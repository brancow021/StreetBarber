import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {home} from '../screens/home';
import {Login} from '../screens/Login';
import {Register} from '../screens/Register';
import {AuthNavigation} from './AuthNavigation';
import { Dashboard } from '../screens/Dashboard';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <>
      <Tab.Navigator initialRouteName="authScreen">
        <Tab.Screen
          options={{
            title: 'Home',
            tabBarVisible: false,
          }}
          name="authScreen"
          component={AuthNavigation}
        />

        <Tab.Screen name="dashboard" component={Dashboard} />
      </Tab.Navigator>
    </>
  );
};
