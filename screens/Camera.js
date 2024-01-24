import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Camera = ({navigation}) => {
  const [{cameraRef}, {takePicture}] = useCamera();
  const [isAllowed, setIsAllowed] = useState(true);

  useEffect(() => {
    checkLastPhotoTime();
  }, []);

  const checkLastPhotoTime = async () => {
    try {
      const lastPhotoTime = await AsyncStorage.getItem('lastPhotoTime');
      if (lastPhotoTime) {
        const currentTime = new Date().getTime();
        const timeDifference = currentTime - parseInt(lastPhotoTime, 10);

        // Allow only after 24 hours
        // if (timeDifference < 24 * 60 * 60 * 1000) {
        //   setIsAllowed(false);
        // }
      }
    } catch (error) {
      console.error('Error reading last photo time', error);
    }
  };

  const handleTakePicture = async () => {
    if (isAllowed) {
      try {
        if (cameraRef) {
          try {
            const options = {quality: 0.5, base64: true};
            const data = await takePicture(options);
            console.log(data.uri); // Handle the captured photo data as needed
          } catch (error) {
            console.log('Error while taking picture', error);
          }
        }
        // Update last photo time
        await AsyncStorage.setItem(
          'lastPhotoTime',
          new Date().getTime().toString(),
        );

        // Update state to disallow further photos until 24 hours
        setIsAllowed(false);
        navigation.navigate('Dashboard');
      } catch (error) {
        console.error('Error taking picture', error);
      }
    } else {
      console.log('Not allowed to take a photo yet.');
    }
  };

  return (
    <View style={{flex: 1}}>
      {isAllowed ? (
        <>
          <RNCamera
            ref={cameraRef}
            style={{flex: 1}}
            type={RNCamera.Constants.Type.front}
            captureAudio={false} // Disable audio recording
            captureVideo={false} // Disable video recording
          />

          <View style={{position: 'absolute', bottom: 20, alignSelf: 'center'}}>
            <Button title="Take Picture" onPress={handleTakePicture} />
          </View>
        </>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Camera Closed</Text>
          <Button title="blocked" />
        </View>
      )}
    </View>
  );
};

export default Camera;
