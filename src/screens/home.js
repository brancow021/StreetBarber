import React from 'react';
import {View} from 'react-native';
import {
  Container,
  Text,
  H1,
  Button,
  Footer,
  FooterTab,
  Thumbnail,
} from 'native-base';
import {homeStyles} from '../assets/styles/Locales/HomeStyle';
import { GlobalStyle } from '../assets/styles/Globales/GlobalStyles';

export const home = ({navigation}) => {


  const handleLoginNavigate = () => {
    navigation.navigate('loginScreen')
  }

  const handleRegisterNavigate = () => {
    navigation.navigate('registerScreen')
  }

  return (
    <>
      <Container style={homeStyles.HomeContainer}>
        <View style={homeStyles.Content}>
          <Thumbnail source={require('../assets/images/barber-icon.png')} />
          <H1 style={homeStyles.Title}>Street Barber</H1>
        </View>

        <Footer>
          <FooterTab style={GlobalStyle.button}>
            <Button onPress={()=> handleLoginNavigate()} style={homeStyles.Button}>
              <Text style={GlobalStyle.textButton}>Iniciar sesíon</Text>
            </Button>

            <Button onPress={()=> handleRegisterNavigate()} style={homeStyles.Button}>
              <Text style={GlobalStyle.textButton}>Regístrate</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    </>
  );
};
