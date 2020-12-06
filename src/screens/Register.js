import {Text, View} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {Container} from 'native-base';
import React from 'react';
import {registerStyles} from '../assets/styles/Locales/RegisterStyle';
import { GlobalStyle } from '../assets/styles/Globales/GlobalStyles';
import { FormVerifyPhone } from '../Components/FormVerifyPhone';
import { InfoPersonalForm } from '../Components/InfoPersonalForm';
import { UploadDocuments } from '../Components/UploadDocuments';

export const Register = () => {
  return (
    <>
      <Container style={GlobalStyle.HomeContainer}>
        <ProgressSteps
          labelColor="#9D9D9E"
          activeStepIconBorderColor="#1841B3"
          completedStepIconColor="#1841B3"
          completedProgressBarColor="#1841B3"
          activeLabelColor="#1841B3">
          <ProgressStep
            nextBtnText="Siguiente"
            previousBtnStyle={registerStyles.previousButton}
            previousBtnTextStyle={registerStyles.previousButtonText}
            nextBtnTextStyle={registerStyles.nextButtonText}
            nextBtnStyle={registerStyles.nextButton}
            label="Verificar Telefono">
            <View style={{alignItems: 'center'}}>
              <FormVerifyPhone />
            </View>
          </ProgressStep>

          <ProgressStep
            previousBtnText="Anterior"
            nextBtnText="Siguiente"
            previousBtnStyle={registerStyles.previousButton}
            previousBtnTextStyle={registerStyles.previousButtonText}
            nextBtnTextStyle={registerStyles.nextButtonText}
            nextBtnStyle={registerStyles.nextButton}
            label="Datos personales">
            <View style={{alignItems: 'center'}}>
              <InfoPersonalForm />
            </View>
          </ProgressStep>

          <ProgressStep
            previousBtnText="Anterior"
            nextBtnText="Siguiente"
            previousBtnStyle={registerStyles.previousButton}
            previousBtnTextStyle={registerStyles.previousButtonText}
            nextBtnTextStyle={registerStyles.nextButtonText}
            nextBtnStyle={registerStyles.nextButton}
            label="Subir documentos">
            <View style={{alignItems: 'center'}}>
              <UploadDocuments />
            </View>
          </ProgressStep>
        </ProgressSteps>
      </Container>
    </>
  );
};
