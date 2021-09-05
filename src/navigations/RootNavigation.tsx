import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AppNavigator from './AppNavigation';
const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="App">
      <Stack.Screen
        options={{headerShown: false}}
        name="App"
        component={AppNavigator}
      />
    </Stack.Navigator>
  );
};
export default RootNavigation;
