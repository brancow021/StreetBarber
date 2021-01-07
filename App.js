import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/Navigation/Navigation';
import {UserStates} from './src/Contexts/states/UserStates';
import {Root} from 'native-base';

const App = () => {
  return (
    <>
      <Root>
        <UserStates>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </UserStates>
      </Root>
    </>
  );
};

export default App;
