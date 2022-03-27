import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native-web';
import Icon from 'react-native-vector-icons/ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react'

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  render() {
    return (
      <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Stack}options={{headerShown: false, tabBarIcon: () => (<Icon name={'home'} size={28}  />)}}/>
        <Tab.Screen name="My Order" component={Daftar}options={{headerShown: false, tabBarIcon: () => (<Icon name={'browsers-sharp'} size={28}  />)}}/>
        <Tab.Screen name="Cancellation" component={batal}options={{headerShown: false, tabBarIcon: () => (<Icon name={'close-circle-sharp'} size={28}  />)}}/>
        <Tab.Screen name="Other" component={lainnya}options={{headerShown: false, tabBarIcon: () => (<Icon name={'menu'} size={28}  />)}}/>
      </Tab.Navigator>
    </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;