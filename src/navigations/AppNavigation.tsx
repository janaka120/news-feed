import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AppScreen from '../features/app/screens/AppScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={AppScreen} />
    </Stack.Navigator>
  );
};
export default AppNavigation;
