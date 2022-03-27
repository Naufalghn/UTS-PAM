import React from "react";
import { StyleSheet, Text, View ,Alert, Button, SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import { TextInput, TouchableOpacity } from "react-native-web";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';

const BuatTiket = (props)=> {
  return(
    <SafeAreaView style={styles.background}>
      <View style={styles.box}>
        <Text style={styles.H1}>
          Neroship
        </Text>
        <Text style={styles.H2}>
          Quota available (10000)
        </Text>
        <Text style={styles.H2}>
          Ticket Details
        </Text>

        <View style={styles.box2}>
          <Text style={styles.H3} > 
            Bakauheni        <Icon name={'arrow-forward'}  size={20} color={'black'} />        Merak
          </Text>

          <Text style={styles.H4}>
            Port Entry Schedule
          </Text>

          <Text style={styles.H5}>
            Thursday, 23 March 2022 
          </Text>

          <Text style={styles.H5}>
            22:30
          </Text>

          <Text style={styles.H4}>
            Layanan :
          </Text>

          <Text style={styles.H5}>
            Express 
          </Text>

          <Text style={styles.H5}>
            __________________________________________________
          </Text>

          <Text style={styles.H5}>
            Adult x 1                                     Rp 65.000,00
          </Text>
        </View>

        <Text style ={styles.H6}>
          Total                              Rp 65.000
        </Text>

        <View style={styles.tombol}>
          <TouchableOpacity style={styles.warnatombol} onPress={() => props.navigation.navigate('Home')} > 
            <Text style= {styles.tulisan}>
              Back
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.warnatombol2} onPress={() => props.navigation.navigate('Tiket')} >
          <Text style= {styles.tulisan2}>
              Next
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

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
  box2 :{
    width :290,
    alignItems : "center",
    backgroundColor :"#f0f0f0",
    paddingVertical : 20,
    paddingHorizontal : 18,
    borderRadius : 5,
    borderWidth: 1,
  },
  H1 : {
    color: "#00579c",
    fontWeight :"bold",
    fontSize : 30,
    marginBottom : 25,
  },
  H2 :{
    alignSelf :'flex-start',
    paddingBottom: 20,
    fontWeight :'bold',
    fontSize :14,
  },
  H3 :{
    fontSize : 17,
    fontWeight : "bold",
    marginBottom : 10,
    alignSelf :'flex-start',
  },
  H4 :{
    alignSelf :'flex-start',
    fontWeight : "bold",
    marginTop : 10,
    marginBottom : 5,
    fontSize :12,
  },
  H5 :{
    alignSelf :'flex-start',
    marginBottom : 5,
    fontSize :12,
  },
  H6 :{
    alignSelf :'flex-start',
    fontWeight : "bold",
    marginTop : 10,
    marginBottom : 30,
    fontSize :18,
  },
  input :{
    flexDirection : "row",
    height : 30,
    width : 270,
    marginTop : 10
  },
  tombol:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 35,
    width: 270,
  },
  warnatombol :{
    backgroundColor :'white',
    borderWidth : 2,
    borderColor : '#00579c',
    width : 125,
    borderRadius :5,
  },
  warnatombol2 :{
    backgroundColor :'#00579c',
    borderWidth : 2,
    borderColor : '#00579c',
    width : 125,
    borderRadius : 5,
  },
  tulisan:{
    fontWeight :'bold',
    color :'#00579c',
    alignSelf : 'center',
    padding : 5,
  },
  tulisan2:{
    fontWeight :'bold',
    color :'white',
    alignSelf : 'center',
    padding :5,
  },
})

export default BuatTiket;