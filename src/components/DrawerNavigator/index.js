import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Main from '../../pages/Main';
import Home from '../../pages/Home';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Main" component={Main} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
