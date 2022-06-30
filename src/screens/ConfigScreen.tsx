import React from "react";
import { View, Text, Button } from "react-native";
import PushNotification from "react-native-push-notification";

const ConfigScreen = () => {

  const pushNotification = () => {
    PushNotification.localNotification({
      title: "My Notification Title", // (optional)
      message: "My Notification Message", // (required)
    });
  }

  return (
    <View>
      <Text>Config</Text>
      <Button title="Notificação" onPress={pushNotification} />
    </View>
  )
}

export default ConfigScreen;
