import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera';




export default function CameraScreen() {


  /**
   *  Make hasPermission and is recording state as we will need to update it
   *  Note: isRecording will be used to toggle the Start/Stop recording buttons
   */
  const [hasPermission, setHasPermission] = useState(null);
  const [isRecording, setIsRecording] = useState(false);


  // This will ask the user for the audio and camera permissions
  useEffect(() => {
    (async () => {
      const { status, expires, permissions } = await Permissions.getAsync(
        Permissions.CAMERA_ROLL,
        Permissions.AUDIO_RECORDING
      );
      setHasPermission(status === 'granted');
    })();
  }, []);


  // Initialize camera as variable otherwise we will get an error 
  let camera = Camera


  // The MediaLibrary will allow us to save the video
  const saveVideo = async (video) => {
    const asset = await MediaLibrary.createAssetAsync(video.uri);
    if (asset) {
      setVideo(null);
    }
  };

  // This will Record and save the video (using saveVideo())
  const startRecord = () => {
    (async () => {
      const video = await camera.recordAsync();
      saveVideo(video)
    })();
    setIsRecording(true)
  }

  // This will stop recording the video 
  const stopRecord = async () => {
    if (!camera) return
    camera.stopRecording();
    setIsRecording(false)
  }





  // If user didn't give permission output text
  if (hasPermission === null) {
    return <Text>Waiting on user permissions</Text>;
  }


  // If user didn't give permission output text
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Camera
          style={styles.camera}
          type={Camera.Constants.Type.back}
          ref={(r) => {
            camera = r
          }}
        ></Camera>
        <View style={styles.buttonContainer}>
          <Button
            title={'Start recording'}
            disabled={isRecording ? true : false} // toggle based on isRecording state
            onPress={startRecord}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            color={'#ff5c5c'}
            disabled={isRecording ? false : true} // toggle based on isRecording state
            title={'Stop recording'}
            onPress={stopRecord}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center'
  },
  camera: {
    height: 500,
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
  text: {
    paddingVertical: 20,
    fontSize: 20,
    alignItems: 'center',
    width: '100%'
  }

});

