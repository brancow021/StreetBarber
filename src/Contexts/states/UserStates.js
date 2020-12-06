import React from 'react';
import {useReducer} from 'react';
import {UserContext} from '../context/UserContext';
import {userReducer} from '../reducers/userReducer';

export const UserStates = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const initialState = {
    user: [],
  };

  return (
    <UserContext.Provider value={{user: []}}>
      {props.children}
    </UserContext.Provider>
  );
};
