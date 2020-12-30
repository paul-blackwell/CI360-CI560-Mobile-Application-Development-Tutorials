import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Camera } from 'expo-camera';



export default function Home() {


  // Make hasPermission sate as we will need to update it
  const [hasPermission, setHasPermission] = useState(null);


  /**
   * The Effect Hook lets you perform side effects in function components
   * we need to do this as we need to await for the user to give
   * permission of our app to use the camera
   */
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Initialize camera as variable otherwise we will get an error 
  let camera = Camera

  // This function will allow the output a picture to the console
  const takePicture = async () => {
    if (!camera) return
    const photo = await camera.takePictureAsync()
    console.log(photo)
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
        <Button
          title="Take a picture"
          onPress={takePicture}
        />
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
  text: {
    paddingVertical: 20,
    fontSize: 20,
    alignItems: 'center',
    width: '100%'
  }

});


