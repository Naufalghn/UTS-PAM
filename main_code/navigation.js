import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/ionicons';

import HomeScreen from './main_code/home'
import Pesanan from './main_code/pesanan-saya'
import Tiket from './main_code/konfirmasi-tiket'
import Buat from './main_code/buat-tiket'
import Stack from './main_code/stack'
import Daftar from './main_code/pesanan-saya';
import Konfirmasi from './main_code/konfirmasi-tiket';
import Pesan from './main_code/buat-tiket';
import batal from './main_code/batal';
import lainnya from './main_code/lainnya';

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Stack}options={{headerShown: false, tabBarIcon: () => (<Icon name={'boat-outline'} size={28}  />)}}/>
        <Tab.Screen name="My Order" component={Pesan}options={{headerShown: false, tabBarIcon: () => (<Icon name={'book-outline'} size={28}  />)}}/>
        <Tab.Screen name="Cancellation" component={Batal}options={{headerShown: false, tabBarIcon: () => (<Icon name={'close-circle-outline'} size={28}  />)}}/>
        <Tab.Screen name="Other" component={Lainnya}options={{headerShown: false, tabBarIcon: () => (<Icon name={'menu-outline'} size={28}  />)}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;  