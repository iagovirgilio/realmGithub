import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '~/pages/Main';
import Repositorio from '~/pages/Repositorio';

const principal = createStackNavigator();

const RepositorioRoutes = () => {

  return (
    <principal.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <principal.Screen name="Main" component={Main}/>
      <principal.Screen name="Repositorio" component={Repositorio}/>
    </principal.Navigator>
  );
}

export default RepositorioRoutes;
