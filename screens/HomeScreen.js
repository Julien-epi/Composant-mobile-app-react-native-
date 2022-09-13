import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        {/* Header */}
        <View className="pb-5 pt-5 items-center">
          <Text className="font-bold text-gray-400 text-xl">My App</Text>
        </View>

        {/* Body */}
        {/* FIRST ROWS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 10,
          }}
        >
          {/* Camera */}
          <TouchableOpacity
            className="bg-white m-2 shadow w-40"
            onPress={() => navigation.navigate("Camera")}
          >
            <Icon
              style={{ paddingTop: 20 }}
              name="camera-outline"
              type="ionicon"
              size={40}
            />
            <View className="px-3 pb-4">
              <Text className="font-bold text-lg pt-2">Camera</Text>
              <Text className="font-bold text-sm pt-2">
                Appuyer pour utiliser la caméra et partager ou sauvegarder vos
                photos
              </Text>
            </View>
          </TouchableOpacity>

          

          {/* FlashLight */}
          <TouchableOpacity
            className="bg-white m-3 shadow w-40"
            onPress={() => navigation.navigate("Torch")}
          >
            <Icon
              style={{ paddingTop: 20 }}
              name="magnet-outline"
              type="ionicon"
              size={40}
            />
            <View className="px-3 pb-4">
              <Text className="font-bold text-lg pt-2">Flash Light</Text>
              <Text className="font-bold text-sm pt-2">
                Appuyez pour utiliser la lampe torche
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-white m-3 shadow w-40"
            onPress={() => navigation.navigate("Vibration")}
          >
            <Icon
              style={{ paddingTop: 20 }}
              name="magnet-outline"
              type="ionicon"
              size={40}
            />
            <View className="px-3 pb-4">
              <Text className="font-bold text-lg pt-2">Vibration</Text>
              <Text className="font-bold text-sm pt-2">
                Appuyez pour faire vibrer le téléphone
              </Text>
            </View>
          </TouchableOpacity>

          {/* Geometre */}
          <TouchableOpacity
            className="bg-white m-3 shadow w-40"
            onPress={() => navigation.navigate("Geometer")}
          >
            <Icon
              style={{ paddingTop: 20 }}
              name="magnet-outline"
              type="ionicon"
              size={40}
            />
            <View className="px-3 pb-4">
              <Text className="font-bold text-lg pt-2">Géomètre</Text>
              <Text className="font-bold text-sm pt-2">
                Cliquez pour utiliser le géomètre
              </Text>
            </View>
          </TouchableOpacity>

          {/* Gyroscope */}
          <TouchableOpacity
            className="bg-white m-3 shadow w-40"
            onPress={() => navigation.navigate("Gyroscope")}
          >
            <Icon
              style={{ paddingTop: 20 }}
              name="magnet-outline"
              type="ionicon"
              size={40}
            />
            <View className="px-3 pb-4">
              <Text className="font-bold text-lg pt-2">Gyroscope</Text>
              <Text className="font-bold text-sm pt-2">
                Cliquez pour utiliser le Gyroscope
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        {/* SECOND ROWS */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 10,
          }}
        >
          

          {/* AUDIO */}
          <TouchableOpacity
            className="bg-white m-3 shadow w-40"
            onPress={() => navigation.navigate("Audio")}
          >
            <Icon
              style={{ paddingTop: 20 }}
              name="musical-notes-outline"
              type="ionicon"
              size={40}
            />

            <View className="px-3 pb-4">
              <Text className="font-bold text-lg pt-2">Lecteur audio</Text>
              <Text className="font-bold text-sm pt-2">
                Cliquez pour utiliser le fichier audio
              </Text>
            </View>
          </TouchableOpacity>

          
          <TouchableOpacity
            className="bg-white m-3 shadow w-40"
            onPress={() => navigation.navigate("Battery")}
          >
            <Icon
              style={{ paddingTop: 20 }}
              name="musical-notes-outline"
              type="ionicon"
              size={40}
            />

            <View className="px-3 pb-4">
              <Text className="font-bold text-lg pt-2">Batterie</Text>
              <Text className="font-bold text-sm pt-2">
                Cliquez pour afficher le niveau de batterie
              </Text>
            </View>
          </TouchableOpacity>

          {/* Barometer */}
          {/* <TouchableOpacity
            className="bg-white m-3 shadow w-40"
            onPress={() => navigation.navigate("Barometer")}
          >
            <Icon
              style={{ paddingTop: 20 }}
              name="musical-notes-outline"
              type="ionicon"
              size={40}
            />

            <View className="px-3 pb-4">
              <Text className="font-bold text-lg pt-2">Baromètre</Text>
              <Text className="font-bold text-sm pt-2">
                Cliquez pour utiliser le Baromètre
              </Text>
            </View>
          </TouchableOpacity> */}


          <TouchableOpacity
            className="bg-white m-3 shadow w-40"
            onPress={() => navigation.navigate("Accelerometer")}
          >
            <Image source={{}} className="h-20 w-20 rounded-sm" />

            <View className="px-3 pb-4">
              <Text className="font-bold text-lg pt-2">Accéléromètre</Text>
              <Text className="font-bold text-sm pt-2">
                Cliquez pour utiliser l'accéléromètre
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
