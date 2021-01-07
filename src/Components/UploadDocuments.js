import {View, Text, Content, Card, CardItem, Left, Body, H3} from 'native-base';
import React, {useRef, useState} from 'react';
import {GlobalStyle} from '../assets/styles/Globales/GlobalStyles';
import {Image, PermissionsAndroid} from 'react-native';
import {uploadDocumentStyle} from '../assets/styles/Locales/uploadDocumentsStyle';
import {CameraDocument} from './CameraDocument';

export const UploadDocuments = () => {
  const [pathImgFront, setpathImgFront] = useState('');
  const [cameraOn, setcameraOn] = useState(false);

  const handleOpenCamera = () => {
    setcameraOn(true);
  };

  return (
    <>
      {cameraOn ? <CameraDocument /> : null}

      <View style={uploadDocumentStyle.container}>
        <Card style={uploadDocumentStyle.card}>
          <H3 style={uploadDocumentStyle.titles}>Foto documento ID frontal</H3>
          <CardItem style={uploadDocumentStyle.cardItem}>
            <View>
              <Text onPress={handleOpenCamera}>Tomar Foto</Text>
            </View>
          </CardItem>

          <H3 style={uploadDocumentStyle.titles}>Foto documento ID respaldo</H3>
          <CardItem style={uploadDocumentStyle.cardItem}>
            <Image
              source={{
                uri:
                  'https://img.pngio.com/id-card-icon-job-seeker-iconset-inipagi-studio-id-card-png-1024_1024.png',
              }}
              style={{height: 150, width: 200, flex: 1}}
            />
          </CardItem>
        </Card>
      </View>
    </>
  );
};
