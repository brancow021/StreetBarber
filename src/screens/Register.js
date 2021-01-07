import {Text, View} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {Container} from 'native-base';
import React, {useState} from 'react';
import {registerStyles} from '../assets/styles/Locales/RegisterStyle';
import {GlobalStyle} from '../assets/styles/Globales/GlobalStyles';
import {FormVerifyPhone} from '../Components/FormVerifyPhone';
import {InfoPersonalForm} from '../Components/InfoPersonalForm';
import {UploadDocuments} from '../Components/UploadDocuments';
import {FormVerifyPhoneStyle} from '../assets/styles/Locales/FormVerifyPhoneStyle';

export const Register = () => {
  const [isCompletePhoneVerify, setisCompletePhoneVerify] = useState(true);
  const [errorPhoneVerify, seterrorPhoneVerify] = useState(false);

  const [isCompleteDataPersonal, setisCompleteDataPersonal] = useState(true);

  const [errorDataPersonal, seterrorDataPersonal] = useState(false)

  const onNextStep = () => {
    if (!isCompletePhoneVerify) {
      seterrorPhoneVerify(true);
    } else {
      seterrorPhoneVerify(false);
    }
  };

  const onNextStepDataPersonal = () => {
    if (!isCompleteDataPersonal) {
      seterrorDataPersonal(true);
    } else {
      seterrorDataPersonal(false);
    }
  };

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
            onNext={onNextStep}
            errors={errorPhoneVerify}
            previousBtnStyle={registerStyles.previousButton}
            previousBtnTextStyle={registerStyles.previousButtonText}
            nextBtnTextStyle={registerStyles.nextButtonText}
            nextBtnStyle={
              isCompletePhoneVerify
                ? registerStyles.nextButton
                : registerStyles.nextButtonDisabled
            }
            label="Verificar Telefono">
            <View style={{alignItems: 'center'}}>
              <FormVerifyPhone
                setisComplete={setisCompletePhoneVerify}
                isComplete={isCompletePhoneVerify}
              />
            </View>
          </ProgressStep>

          <ProgressStep
            previousBtnText="Anterior"
            nextBtnText="Siguiente"
            onNext={onNextStepDataPersonal}
            errors={errorDataPersonal}
            previousBtnDisabled
            previousBtnStyle={registerStyles.previousButton}
            previousBtnTextStyle={registerStyles.previousButtonText}
            nextBtnTextStyle={registerStyles.nextButtonText}
            nextBtnStyle={
              isCompleteDataPersonal
                ? registerStyles.nextButton
                : registerStyles.nextButtonDisabled
            }
            label="Datos personales">
            <View style={{alignItems: 'center'}}>
              <InfoPersonalForm
                setisCompleteDataPersonal={setisCompleteDataPersonal}
              />
            </View>
          </ProgressStep>

          <ProgressStep
            previousBtnText="Anterior"
            nextBtnText="Siguiente"
            previousBtnDisabled
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
