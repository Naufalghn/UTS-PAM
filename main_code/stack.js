import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native-web';
import Icon from 'react-native-vector-icons/ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React,{Component} from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './home'
import Tiket from './konfirmasi-tiket'
import Buat from './buat-tiket'

const Stack = createStackNavigator();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  };
  render(){
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Buat" component={Buat}/>
          <Stack.Screen name="Tiket" component={Tiket}/>
        </Stack.Navigator>
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