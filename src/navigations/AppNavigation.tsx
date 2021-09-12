import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AppScreen from '../features/app/screens/AppScreen';
import {HomeLabels} from '../features/app/constants/AppConstant';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={HomeLabels.HEADER_NAV_NAME}>
      <Stack.Screen
        name={HomeLabels.HEADER_NAV_NAME}
        component={AppScreen}
        options={{title: HomeLabels.HEADER_NAV_TITLE}}
      />
    </Stack.Navigator>
  );
};
export default AppNavigation;
