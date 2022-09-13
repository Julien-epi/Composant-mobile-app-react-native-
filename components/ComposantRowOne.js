import { View, Text, TouchableOpacity, Image, Button } from "react-native";
import React from "react";


const ComposantRowOne = ({ title, description, imgUrl }) => {


  return (
    <TouchableOpacity className="bg-white m-3 shadow w-40">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded-sm"
      />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <Text className="font-bold text-sm pt-2">{description}</Text>
        <View>

        </View>
        {/* <View className="flex-row items-center space-x-1">
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">$$$$$</Text> 
          </Text>
        </View> */}

        {/* <View className="flex-row items-center space-x-1">
          <Text className="text-xs text-gray-500">Nearby -</Text>
        </View> */}
      </View>
    </TouchableOpacity>
  );
};

export default ComposantRowOne;
