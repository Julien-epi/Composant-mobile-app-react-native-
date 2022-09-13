import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./screens/HomeScreen";
import CameraScreen from "./screens/CameraScreen";
import GeometerScreen from "./screens/GeometerScreen";
import AccelerometerScreen from "./screens/AccelerometerScreen";
import AudioScreen from "./screens/AudioScreen";
import BarometerScreen from "./screens/BarometerScreen";
import GyroscopeScreen from "./screens/GyroscopeScreen";
import VibrationScreen from "./screens/VibrationScreen";
import BatteryScreen from "./screens/BatteryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <TailwindProvider>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="Camera"
              component={CameraScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Geometer"
              component={GeometerScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Accelerometer"
              component={AccelerometerScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Audio"
              component={AudioScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Barometer"
              component={BarometerScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Gyroscope"
              component={GyroscopeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Vibration"
              component={VibrationScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Battery"
              component={BatteryScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
