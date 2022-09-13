// import React, { useState, useEffect } from "react";

// import { Button, StyleSheet, Text, View } from "react-native";

// import { Camera } from "expo-camera";

// import Torch from "react-native-torch";

// export default function App() {
//   const [hasPermission, setHasPermission] = useState(null);
// const [on, setOn] = useState(Torch.switchState(false))
//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestPermissionsAsync();

//       setHasPermission(status === "granted");
//     })();
//   });

//   if (hasPermission === null) {
//     return <View />;
//   }

//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }


//   return (
//     <View style={styles.container}>
//       <Button title="Open Torch" onPress={() => Torch.switchState(true)} />

//       <Button title="Close Torch" onPress={() => Torch.switchState(setOn(false))} />
//     </View>
//   );
// }
// // if (Platform.OS === 'ios') {
// //   *    Torch.switchState(this.isTorchOn);
// //   *  } else {
// //   *    const cameraAllowed = await Torch.requestCameraPermission(
// //   *      'Camera Permissions', // dialog title
// //   *      'We require camera permissions to use the torch on the back of your phone.' // dialog body
// //   *    );
// //   *
// //   *    if (cameraAllowed) {
// //   *      Torch.switchState(this.isTorchOn);
// //   *    }
// //   *  }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//     backgroundColor: "#fff",

//     alignItems: "center",

//     justifyContent: "center",
//   },
// });
