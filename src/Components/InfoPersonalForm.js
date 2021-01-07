import {
  View,
  Text,
  Form,
  Input,
  Item,
  Icon,
  Label,
  ListItem,
  Left,
  Right,
  Radio,
  Content,
  H3,
  Picker,
  Button,
  Toast,
} from 'native-base';
import React, {useContext, useEffect, useState} from 'react';
import {GlobalStyle} from '../assets/styles/Globales/GlobalStyles';
import {infoPersonalFormStyle} from '../assets/styles/Locales/infoPersonalFormStyle';

import 'react-native-vector-icons';
import {useFormik} from 'formik';
import {personasDataRegister} from '../SchemasValidate/FormRegisterUser';
import { UserContext } from '../Contexts/context/UserContext';

export const InfoPersonalForm = ({setisCompleteDataPersonal}) => {
  const [selectTypeDocument, setselectTypeDocument] = useState(true);
  const [selectTypeDocumentExtran, setselectTypeDocumentExtran] = useState(
    false,
  );
  const [disableInput, setdisableInput] = useState(false);
  const ListCitys = [{id: 1, name: 'Cartagena'}];

  const { registerUser, user } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      identifyNumber: '',
      name: '',
      lastName: '',
      email: '',
      city: '',
      contactNumber: '',
    },
    validationSchema: personasDataRegister,
    validateOnMount: true,
  });

  const {
    values,
    handleChange,
    errors,
    isValid,
    handleSubmit,
    setFieldValue,
  } = formik;

  const handleTypeDocument = () => {
    setselectTypeDocument(!selectTypeDocument);
    setselectTypeDocumentExtran(false);
  };

  const handleTypeDocumenteExtran = () => {
    setselectTypeDocumentExtran(!selectTypeDocumentExtran);
    setselectTypeDocument(false);
  };

  const handleVerifyInfo = () => {
    let objectUser = {};

    if (!isValid) {
      setisCompleteDataPersonal(false);

      Toast.show({
        text: `Por favor rellene los datos correctamente ${JSON.stringify(
          errors,
        )}`,
        duration: 6000,
        position: 'top',
        type: 'danger',
        textStyle: {
          textAlign: 'center',
          fontWeight: 'bold',
        },
      });
    } else {
      setisCompleteDataPersonal(true);
      setdisableInput(true);

      Toast.show({
        text:
          'Datos Ingresados correctamente, Presiona el boton SIGUIENTE, para continuar',
        duration: 6000,
        position: 'top',
        type: 'success',
        textStyle: {
          textAlign: 'center',
          fontWeight: 'bold',
        },
      });

      if (selectTypeDocument) {
        objectUser = {
          ...values,
          typeDocument: 'CC',
        };
      } else {
        objectUser = {
          ...values,
          typeDocument: 'CI',
        };
      }

	 }
	 
	 registerUser(objectUser)
	 console.log(objectUser)
	 console.log(user)
  };

  return (
    <>
      <View style={GlobalStyle.ContentForm}>
        <Form style={GlobalStyle.FormLogin}>
          <View style={[{width: '100%'}, GlobalStyle.itemInput]}>
            <H3
              style={{
                marginLeft: 15,
                marginBottom: 10,
                marginTop: 10,
                fontWeight: 'bold',
              }}>
              Tipo de documento:
            </H3>

            <ListItem onPress={handleTypeDocument} style={{width: '80%'}}>
              <Left>
                <Text>Cedula de ciudadania</Text>
              </Left>

              <Right>
                <Radio selected={selectTypeDocument} />
              </Right>
            </ListItem>

            <ListItem
              onPress={handleTypeDocumenteExtran}
              style={{width: '80%'}}>
              <Left>
                <Text>Cedula de extranjeria</Text>
              </Left>

              <Right>
                <Radio selected={selectTypeDocumentExtran} />
              </Right>
            </ListItem>
          </View>

          <Item
            style={GlobalStyle.itemInput}
            floatingLabel
            fixedLabel
            last
            success={!errors.identifyNumber ? true : false}>
            <Icon name={'person-circle-outline'} />
            <Label style={{paddingLeft: 10}}>N° - Identidad:</Label>

            <Input
              disabled={disableInput}
              value={values.identifyNumber}
              onChangeText={handleChange('identifyNumber')}
              keyboardType="number-pad"
            />
            <Icon name={!errors.identifyNumber ? 'checkmark-circle' : null} />
          </Item>

          <Item style={GlobalStyle.itemInput} floatingLabel fixedLabel last>
            <Icon name={'people-outline'} />
            <Label style={{paddingLeft: 10}}>Nombres:</Label>
            <Input
              disabled={disableInput}
              value={values.name}
              onChangeText={handleChange('name')}
            />
          </Item>

          <Item style={GlobalStyle.itemInput} floatingLabel fixedLabel last>
            <Icon name={'people-outline'} />
            <Label style={{paddingLeft: 10}}>Apellidos:</Label>
            <Input
              disabled={disableInput}
              value={values.lastName}
              onChangeText={handleChange('lastName')}
            />
          </Item>

          <Item
            style={GlobalStyle.itemInput}
            floatingLabel
            fixedLabel
            last
            success={!errors.email ? true : false}>
            <Icon name={'mail-outline'} />
            <Label style={{paddingLeft: 10}}>E-mail:</Label>
            <Input
              disabled={disableInput}
              value={values.email}
              onChangeText={handleChange('email')}
              textContentType="emailAddress"
              autoCompleteType="email"
              autoCorrect={false}
            />

            <Icon name={!errors.email ? 'checkmark-circle' : null} />
          </Item>

          <Item
            style={{
              marginTop: 20,
              marginBottom: 15,
            }}>
            <Icon name={'earth-outline'} />
            <Label style={{paddingLeft: 10}}>Ciudad:</Label>

            <Picker
              enabled={!disableInput}
              selectedValue={values.city}
              note
              prompt={'Elija la ciudad'}
              mode="dropdown"
              selectedValue={values.city}
              onValueChange={(itemValue) => 
					      setFieldValue('city', itemValue)
              }>

					    <Picker.Item label='Selecciona tu ciudad' value={values.city} key={0} />
              {ListCitys.map((city, index) => (
                <Picker.Item key={city.id} label={city.name} value={city.name} />
              ))}
            </Picker>
          </Item>

          <Item
            style={GlobalStyle.itemInput}
            floatingLabel
            fixedLabel
            last
            success={!errors.contactNumber ? true : false}>
            <Icon name={'call-outline'} />
            <Label style={{paddingLeft: 10}}>Telefono de contacto:</Label>
            <Input
              disabled={disableInput}
              onChangeText={handleChange('contactNumber')}
              keyboardType="number-pad"
              value={values.contactNumber}
            />
            <Icon name={!errors.contactNumber ? 'checkmark-circle' : null} />
          </Item>
        </Form>

        <Button
          disabled={disableInput}
          style={infoPersonalFormStyle.btnVerifyInfo}
          onPress={handleVerifyInfo}>
          <Text style={GlobalStyle.textButton}>Verificar</Text>
        </Button>
      </View>
    </>
  );
};
