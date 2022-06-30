import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CamsScreen from "../screens/CamsScreen";
import ConfigScreen from "../screens/ConfigScreen";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cameras" component={CamsScreen} options={{tabBarIcon: () => <AntDesign size={30} color="black" name="videocamera"/>}} />
      <Tab.Screen name="Configrações" component={ConfigScreen} options={{tabBarIcon: () => <AntDesign size={30} color="black" name="setting"/>}} />
      <Tab.Screen name="Histórico" component={ConfigScreen} options={{tabBarIcon: () => <FontAwesome size={30} color="black" name="history"/>}} />
    </Tab.Navigator>
  );
}

export default MyTabs;
