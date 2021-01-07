import React from 'react';
import {View, Text, Button, Icon} from 'native-base';
import {FormVerifyPhoneStyle} from '../assets/styles/Locales/FormVerifyPhoneStyle';
import {GlobalStyle} from '../assets/styles/Globales/GlobalStyles';

export const SmallButton = ({
  handleSubmitPhoneVerify,
  handleSubmitVerifyCode,
  numberPhone,
  isValid,
  touched,
  code,
  verifyCode,
  loading,
  text = 'Continuar',
}) => {


  return (
    <View style={FormVerifyPhoneStyle.containerButtom}>
      <Button
        onPress={() => !verifyCode ? handleSubmitPhoneVerify(numberPhone) : handleSubmitVerifyCode(numberPhone, code)}
        disabled={!isValid || loading}
        style={
          isValid && !loading
            ? FormVerifyPhoneStyle.buttonVerify
            : FormVerifyPhoneStyle.disabledButton
        }>
        <Text style={GlobalStyle.textButton}>{text}</Text>
      </Button>
    </View>
  );
};
