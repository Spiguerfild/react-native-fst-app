import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Welcome } from '../pages/Welcome';
import { Confirmation } from '../pages/Confirmation';
import { UserIdentification } from '../pages/UserIdentification';
import colors from '../styles/colors'

const stackRoutes = createNativeStackNavigator();

const AppRoutes = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false
    }}

  >
    <stackRoutes.Screen
      name='Welcome'
      component={Welcome}
    />
    <stackRoutes.Screen
      name='UserIdentificationer'
      component={UserIdentification}
    />
    <stackRoutes.Screen
      name='Confirmation'
      component={Confirmation}
    />

  </stackRoutes.Navigator>
)

export default AppRoutes;