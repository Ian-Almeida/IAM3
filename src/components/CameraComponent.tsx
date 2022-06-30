import React, { useEffect, useRef, useState } from "react";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import { Button, Text, View, TouchableOpacity } from "react-native";

const CameraComponent = () => {
  const devices = useCameraDevices();
  const deviceBack = devices.back;
  const deviceFront = devices.front;

  const [permissions, setPermissions] = useState({camera: 'not-determined', microphone: 'not-determined'});

  const camera = useRef<Camera>(null);

  const getPermissions = async () => {
    setPermissions({
      camera: await Camera.getCameraPermissionStatus(),
      microphone: await Camera.getMicrophonePermissionStatus(),
    });
  }

  useEffect(() => {
    getPermissions().catch((e) => {console.log(e)});
  }, []);

  const takePhoto = async () => {
    if (camera.current) {
      const photo = await camera.current.takePhoto({flash: 'off'});
      console.log(photo)
    }

  }

  if (deviceBack == null) return <View><Text>LOADING VIEW BACK</Text></View>
  if (deviceFront == null) return <View><Text>LOADING VIEW FRONT</Text></View>
  return (
    <View style={{alignItems: 'center'}}>
      <Camera
        ref={camera}
        style={{width: 200, height: 200, margin: 10}}
        device={deviceBack}
        isActive={true}
        photo={true}
      />
      {/*<TouchableOpacity style={{backgroundColor: 'red', padding: 10}} onPress={takePhoto}>*/}
      {/*  <Text>Tirar foto</Text>*/}
      {/*</TouchableOpacity>*/}
    </View>
  )
}

export default CameraComponent;
