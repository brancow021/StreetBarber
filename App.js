import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/Navigation/Navigation';
import { UserStates } from './src/Contexts/states/UserStates';

const App = () => {
  return (
    <>
      <UserStates>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </UserStates>
    </>
  );
};

export default App;
