import React from "react";
import {StyleSheet, Text, View ,Alert, Button, SafeAreaView, Picker} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import {TextInput, TouchableOpacity } from "react-native-web";
import {NavigationContainer } from "@react-navigation/native";
import {useRoute} from '@react-navigation/native';

const home =(props)=> {
  const route = useRoute();
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const [pelabuhanawal, setpelabuhanawal] = React.useState();
  const [pelabuhanakhir, setpelabuhanakhir] = React.useState();
  const [pelayanan, setpelayanan] = React.useState();

    return(
      <SafeAreaView style={styles.background}>
        <View style={styles.box}>
          <Text style={styles.H1}>
           Neroship
          </Text>

          <Text style={styles.H2}>
            Starting Port
          </Text>

          <View style={styles.input}>
            <Icon name={'boat-outline'}  size={28}/>
            <Picker style={styles.TextInput} selectedValue={pelabuhanawal} onValueChange={(itemValue, itemIndex) =>setpelabuhanawal(itemValue)}>
              <Picker.Item label="Choose Starting Port" value=""/>
              <Picker.Item label="Bakauheni" value="Bakauheni"/>
              <Picker.Item label="Tanjung Priok " value="Tanjung"/>
            </Picker>
          </View>

          <Text style={styles.H2}>
            Arrival Port
          </Text>

          <View style={styles.input}>
            <Icon name={'boat-outline'}  size={28}/>
            <Picker style={styles.TextInput} selectedValue={pelabuhanakhir} onValueChange={(itemValue, itemIndex) =>setpelabuhanakhir(itemValue)}>
              <Picker.Item label="Choose Arrival Port" value=""/>
              <Picker.Item label="Bakauheni" value="Bakauheni"/>
              <Picker.Item label="Tanjung Priok " value="Tanjung"/>
            </Picker>
          </View>

          <Text style={styles.H2}>
            Service Class
          </Text>
          <View style={styles.input}>
            <Icon name={'pricetags-outline'}  size={28}/>
            <Picker style={styles.TextInput} selectedValue={pelayanan} onValueChange={(itemValue, itemIndex) =>setpelayanan(itemValue)}>
              <Picker.Item label="Service Options" value=""/>
              <Picker.Item label="Economy" value="Economy"/>
              <Picker.Item label="Express" value="Express"/>
            </Picker>
          </View>

          <Text style={styles.H2}>
            Port Entry Date
          </Text>
          <View style={styles.input}>
            <Icon name={'calendar-outline'}  size={28}/>
            <TextInput style={styles.TextInput} placeholder="Choose Entry Date" />
          </View>

          <Text style={styles.H2}>
            Port Entrance Hours 
          </Text>
          <View style={styles.input}>
            <Icon name={'time-outline'}  size={28}/>
            <TextInput style={styles.TextInput} placeholder="Choose Entry Hours" />
          </View>

          <Text style={styles.H2}>
            Number of Tickets
          </Text>
          <View style={styles.input}>
            <Icon name={'man-outline'}  size={28}/>
            <TextInput style={styles.TextInput} placeholder="Enter Number of Tickets" />
          </View>

          <TouchableOpacity style={styles.tombol} onPress={() => props.navigation.push('Buat')} >
            <Icon name={'search'}  size={20} color={'white'} />
            <Text style={styles.BuatTiket}>
              Create Ticket
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );

};

const styles = StyleSheet.create({
  background : {
    backgroundColor: "white",
    flex : 1,
    alignItems:"center",
  },
  box:{
    marginTop : 70,
    width :330,
    alignItems : "center",
    backgroundColor :"ffffff",
    paddingVertical : 20,
    paddingHorizontal : 18,
    borderRadius : 5,
    shadowOpacity : 1,
    shadowRadius : 5
  },
  H1 : {
    color: "#00579c",
    fontWeight :"bold",
    fontSize : 30,
    marginBottom : 25,
  },
  H2 :{
    alignSelf :'flex-start',
    paddingTop : 5,
  },
  input :{
    flexDirection : "row",
    height : 30,
    width : 270,
    marginTop : 10
  },
  TextInput :{
    borderWidth :1,
    height : 30,
    marginLeft : 10,
    width : 250,
    borderRadius : 5,
    backgroundColor :"#eff4f4",
    paddingLeft: 15,
  },
  tombol :{
    backgroundColor :"#ee9e54",
    height : 40,
    width : 200,
    borderRadius :5,
    marginTop :20,
    flexDirection: 'row',
    alignItems : 'center',
    paddingHorizontal : 10
  },
  BuatTiket :{
    color : 'white',
    fontSize : 16,
    marginLeft : 35,
    fontWeight : 'bold',
  }
})

export default home;