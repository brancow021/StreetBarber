import React, {useContext, useEffect, useState} from 'react';
import {GlobalStyle} from '../assets/styles/Globales/GlobalStyles';
import {Form, Item, Input, Text, View, Picker, Toast, Icon} from 'native-base';
import {FormVerifyPhoneStyle} from '../assets/styles/Locales/FormVerifyPhoneStyle';
import {registerUserSchema} from '../SchemasValidate/FormRegisterUser';
import {SmallButton} from './SmallButton';
import {useFormik} from 'formik';
import {UserContext} from '../Contexts/context/UserContext';

export const FormVerifyPhone = ({setisComplete}) => {
  const [verifyCode, setverifyCode] = useState(false);
  const [stateVerification, setstateVerification] = useState('pending');
  const [loadingButton, setloadingButton] = useState(false);
  const [time, settime] = useState(40);
  const {
    user,
    verifyPhone,
    requestNumberPhone,
    verifyCodePhone,
    verifyCodeRequest,
  } = useContext(UserContext);

  const ListCountrys = [
    {id: 1, icon: '🇨🇴', prefixNumber: '+57', country: 'COL'},
  ];

  const formik = useFormik({
    initialValues: {numberPhone: '', code: ''},
    validationSchema: registerUserSchema,
    initialTouched: false,
    validateOnMount: true,
  });

  useEffect(() => {
    return () => {
      setverifyCode(false);
      setloadingButton(false);
      formik.resetForm();
    };
  }, []);

  useEffect(() => {
    if (requestNumberPhone.ok) {
      setverifyCode(true);
      setloadingButton(true);
      setstateVerification(requestNumberPhone.verification.status);

      setTimeout(() => {
        setloadingButton(false);
      }, 3000);
      
    } else {
      setverifyCode(false);
    }
  }, [requestNumberPhone]);

  useEffect(() => {
    if (verifyCodeRequest.ok) {
      setstateVerification(verifyCodeRequest.verification_check.status);
      setisComplete(true);
      
    }
  }, [verifyCodeRequest]);

  // useEffect(() => {
  //   setInterval(() => {
  //     if (time > 0 && verifyCode) {
  //       settime((time) => time - 1);
  //     }
  //   }, 1000);
  // }, [time]);

  const handleSubmitPhoneVerify = async (phone) => {
    await verifyPhone(phone);

    Toast.show({
      text: 'Enviamos un codigo de verificacion por SMS',
      duration: 4000,
      position: 'top',
      type: 'success',
      textStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
      },
    });
  };

  const handleSubmitVerifyCode = async(phone, code) => {
    await verifyCodePhone(phone, code);
  };

  const {
    values,
    handleChange,
    errors,
    setFieldTouched,
    touched,
    isValid,
  } = formik;

  return (
    <>
      <View style={GlobalStyle.ContentForm}>
        <View>
          <Form>
            <Item error={!isValid && touched.numberPhone} success={isValid}>
              <Picker
                note
                enabled={!verifyCode}
                mode="dropdown"
                style={FormVerifyPhoneStyle.pickerCountry}>
                {ListCountrys.map((country) => (
                  <Picker.Item
                    key={country.id}
                    label={`${country.icon} ${country.prefixNumber}`}
                    value={country.country}
                  />
                ))}
              </Picker>
              <Input
                editable={!verifyCode}
                onChangeText={handleChange('numberPhone')}
                keyboardType="numeric"
                placeholder="Numero Movil"
                values={values.numberPhone}
              />

              <Icon name={isValid ? 'checkmark-circle' : null} />
            </Item>

            <Item>
              <Input
                style={FormVerifyPhoneStyle.inputCode}
                onChangeText={handleChange('code')}
                keyboardType="number-pad"
                placeholder="Codigo"
                values={values.code}
                editable={verifyCode}
                autoFocus
              />

              <SmallButton
                loading={loadingButton}
                code={values.code}
                touched={touched}
                handleSubmitPhoneVerify={handleSubmitPhoneVerify}
                numberPhone={values.numberPhone}
                verifyCode={verifyCode}
                isValid={isValid}
                text={verifyCode ? 'Verificar' : 'Continuar'}
                handleSubmitVerifyCode={handleSubmitVerifyCode}
                verifyCode={verifyCode}
              />
            </Item>

            {verifyCode ? (
              <Item style={FormVerifyPhoneStyle.itemForm}>
                <View style={FormVerifyPhoneStyle.statusRequest}>
                  <Text>Enviamos un codigo via SMS: 0:{time}</Text>
                  <Text
                    style={
                      stateVerification === 'pending'
                        ? FormVerifyPhoneStyle.textStatusPending
                        : FormVerifyPhoneStyle.textStatusAproved
                    }>
                    Status: {stateVerification}
                  </Text>
                </View>
              </Item>
            ) : null}
          </Form>
        </View>
      </View>
    </>
  );
};
