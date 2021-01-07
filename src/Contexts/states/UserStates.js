import React from 'react';
import {useReducer} from 'react';
import {verifyNumberPhone} from '../../helpers/verifyNumberPhone';
import {UserContext} from '../context/UserContext';
import {userReducer} from '../reducers/userReducer';
import {DATA_STEPS_REGISTER, REGISTER_USER, REQUEST_NUMBERPHONE, REQUEST_VERIFYCODE} from '../types/registerTypes';

export const UserStates = (props) => {
  const initialState = {
    user: [],
    requestNumberPhone: {},
    verifyCodeRequest: {},
    stepsRegister: {}
  };
  const [state, dispatch] = useReducer(userReducer, initialState);

  const verifyPhone = (numberPhone) => {
    let phone = `+57${numberPhone}`;
    let rol = 'numberPhoneRequest';

    verifyNumberPhone(phone, (code = 0), rol)
      .then((response) => {
        dispatch({
          type: REQUEST_NUMBERPHONE,
          payload: response,
        });
        console.log(response);
      })
      .catch((err) => console.log(err));
  };


  const verifyCodePhone = (number, code) => {
    let rol = 'verify-code';
    let phone = `+57${number}`;

    verifyNumberPhone(phone, code, rol)
      .then((response) => {
        dispatch({
          type: REQUEST_VERIFYCODE,
          payload: response,
        });

        dispatch({
          type: DATA_STEPS_REGISTER,
          payload: response.verification_check
        });
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const registerUser = (user) => {
    dispatch({
      type: REGISTER_USER,
      payload: user,
    });
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        registerUser,
        verifyPhone,
        requestNumberPhone: state.requestNumberPhone,
        verifyCodePhone,
        verifyCodeRequest: state.verifyCodeRequest,
        stepsRegister: state.stepsRegister
      }}>
      {props.children}
    </UserContext.Provider>
  );
};
