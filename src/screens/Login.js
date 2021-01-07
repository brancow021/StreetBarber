import {View} from 'react-native';
import {
  Container,
  Form,
  Input,
  H1,
  Item,
  Icon,
  Button,
  Text,
  Thumbnail,
} from 'native-base';
import React, {useState} from 'react';
import {GlobalStyle} from '../assets/styles/Globales/GlobalStyles';
import {loginStyles} from '../assets/styles/Locales/LoginStyles';

export const Login = ({navigation}) => {
  const [visiblePassword, setvisiblePassword] = useState(false);
  const [nameIconPassword, setnameIconPassword] = useState('eye-off-outline');

  const handlevisiblePassword = () => {
    setvisiblePassword(!visiblePassword);

    if (visiblePassword) {
      setnameIconPassword('eye-outline');
    } else {
      setnameIconPassword('eye-off-outline');
    }
  };

  return (
    <>
      <Container style={GlobalStyle.HomeContainer}>
        <View style={loginStyles.header}>
          <Thumbnail source={require('../assets/images/barber-icon.png')} />
          <H1>Street Barber</H1>
        </View>

        <Form style={GlobalStyle.FormLogin}>
          <Item style={GlobalStyle.itemInput}>
            <Icon name="person" />
            <Input placeholder="Usuario" />
          </Item>

          <Item style={GlobalStyle.itemInput}>
            <Icon name="lock-closed" />
            <Input
              passwordRules
              secureTextEntry={!visiblePassword}
              autoCompleteType="password"
              placeholder="Contraseña"
              autoCorrect={!visiblePassword}
            />
            <Icon
              onPress={() => handlevisiblePassword()}
              name={visiblePassword ? 'eye-outline' : 'eye-off-outline'}
            />
          </Item>

          <View style={loginStyles.privacyTextContent}>
            <Text style={loginStyles.privacyText}>
              Al iniciar Sesion asegura haber leido y estar de acuerdo con los
              terminos y condiciones y las Politicas de Privacidad
            </Text>
          </View>

          <View>
            <Button onPress={() => navigation.navigate('dashboard')} style={GlobalStyle.blockButton}>
              <Text style={GlobalStyle.textButton}>Iniciar Sesíon</Text>
            </Button>

            <Text style={loginStyles.passwordLoss}>
              Olvidastes tu contraseña
            </Text>
          </View>
        </Form>
      </Container>
    </>
  );
};
