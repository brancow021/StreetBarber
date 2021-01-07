import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {home} from '../screens/home';
import {Login} from '../screens/Login';
import {Register} from '../screens/Register';

const Tab = createBottomTabNavigator();

export const AuthNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          animationEnabled: true,
          gestureEnabled: true,
        }}
        detachInactiveScreens>
        <Tab.Screen
          options={{
            title: 'Home',
            tabBarVisible: false,
          }}
          name="homeScreen"
          component={home}
        />

        <Tab.Screen
          options={{
            title: 'Login',
            tabBarVisible: false,
          }}
          name="loginScreen"
          component={Login}
        />

        <Tab.Screen
          options={{
            title: 'Register',
            tabBarVisible: false,
          }}
          name="registerScreen"
          component={Register}
        />
      </Tab.Navigator>
    </>
  );
};
