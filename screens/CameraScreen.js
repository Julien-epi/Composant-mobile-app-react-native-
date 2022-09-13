import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";


export default function App() {

  const navigation = useNavigation();

  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView className="flex flex-1">
        <TouchableOpacity 
        onPress={() => navigation.navigate("Home")}
        className=" bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg">
          <Icon name="arrow-left" />
        </TouchableOpacity>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        <TouchableOpacity className="flex flex-row justify-around h-20 p-4">
          <Icon name="share-social-outline" type="ionicon" onPress={sharePic} />
          {hasMediaLibraryPermission ? (
            <Icon name="save-outline" type="ionicon" onPress={savePhoto} />
          ) : undefined}
          <Icon
            name="reload-outline"
            type="ionicon"
            onPress={() => setPhoto(undefined)}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef} type={type}>
      <TouchableOpacity 
        onPress={() => navigation.navigate("Home")}
        className=" bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg">
          <Icon name="arrow-left" />
        </TouchableOpacity>
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <Text style={styles.text}> Flip </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={takePic}
          style={{
            width: 70,
            height: 70,
            borderRadius: 50,
            marginBottom: 30,
            backgroundColor: "#fff",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></TouchableOpacity>
      </View>
      {/* <View style={styles.buttonContainer}>
        <Icon
        className="absolute top-4"
        name="camera-outline"
        type="ionicon"
        onPress={takePic}
        />
      </View> */}
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#fff",
    alignSelf: "flex-end",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
  text: {
    fontSize: "40px",
    position: "sticky",
    top: 50,
    left: 140,
    color: "black",
  },
});
