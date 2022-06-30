import React from "react";
import { View, Text } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import CameraComponent from "../components/CameraComponent";

const CamsScreen = () => {
  return (
    <View>
      <Text>Cams</Text>
      <AntDesign size={30} color="black" name="setting"/>
      <CameraComponent />
    </View>
  )
}

export default CamsScreen;
