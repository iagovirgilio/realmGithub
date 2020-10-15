import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';

import Home from '~/pages/Home';
import Main from '~/pages/Main';
import Repositorio from '~/pages/Repositorio';
import DrawerNavigator from '~/components/DrawerNavigator';

import { DrawerActions } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome'

const principal = createStackNavigator();

const RepositorioRoutes = () => {

  return (
    <principal.Navigator
      screenOptions={{
        headerShown: false,
        // headerLeft: () => (
        //   <TouchableOpacity>
        //     <Icon name="bars" size={35} />
        //   </TouchableOpacity>
        // ),
        // headerStyle: { backgroundColor: '#7159c1' }
      }}
    >
      <principal.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <principal.Screen name="Home" component={Home} />
      <principal.Screen name="Main" component={Main} />
      <principal.Screen name="Repositorio" component={Repositorio} />
    </principal.Navigator>
  );
}

export default RepositorioRoutes;
