import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const ComposantRowTwo = ({ title, description, imgUrl }) => {
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
      </View>
    </TouchableOpacity>
  );
};

export default ComposantRowTwo;
