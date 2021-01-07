import {Button, Text, View} from 'native-base';
import React from 'react';
import {RNCamera} from 'react-native-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { uploadDocumentStyle } from '../assets/styles/Locales/uploadDocumentsStyle';
import { StyleSheet } from 'react-native'

export const CameraDocument = () => {

  const takePicture = async function (camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);

    console.log(data.uri);
  };

  return (
    <>
      <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
        {({camera, status, }) => {
			if (status !== 'READY') return (console.log("Pendiente"));
          return (
            <View style={uploadDocumentStyle.container}>
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => takePicture(camera)} style={styles.capture}>
                  <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </RNCamera>
    </>
  );
};


const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  flexDirection: 'column',
	  backgroundColor: 'black',
	},
	preview: {
	  flex: 1,
	  justifyContent: 'flex-end',
	  alignItems: 'center',
	},
	capture: {
	  flex: 0,
	  backgroundColor: '#fff',
	  borderRadius: 5,
	  padding: 15,
	  paddingHorizontal: 20,
	  alignSelf: 'center',
	  margin: 20,
	},
 });
