import React,{Component} from "react";
import { StyleSheet, Text, View ,Alert, Button, SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import { TextInput, TouchableOpacity } from "react-native-web";

const pesanan = ({})=> {
    return(
      <SafeAreaView style={styles.background}>
        <View style={styles.box}>
          <Text style={styles.H1}>
            Order List
          </Text>
          
          <View style={styles.box2}>
          <Text style={styles.H3} > 
            Bakauheni             <Icon name={'arrow-forward'}  size={20} color={'black'} />              Merak
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
            Service :
          </Text>

          <Text style={styles.H5}>
            Express 
          </Text>

          <Text style={styles.H5}>
            __________________________________________________________
          </Text>

          <Text style={styles.H5}>
            Adult x 1                                                  Rp 65.000,00
          </Text>
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
    width :300,
    alignItems : "center",
    backgroundColor :"ffffff",
    paddingVertical : 20,
    paddingHorizontal : 18,
    
  },
  box2 :{
    marginTop :20,
    width :330,
    alignItems : "center",
    backgroundColor :"#f0f0f0",
    paddingVertical : 20,
    paddingHorizontal : 18,
    borderRadius : 5,
    borderWidth: 1,
    marginBottom : 10,
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
  pemesanan :{
    alignSelf :'flex-start',
    fontWeight :'bold',
    fontSize :12,
    paddingLeft : 8,
  },
  input :{
    alignSelf :'flex-start',
    marginBottom : 8,
    fontWeight :'bold',
    fontSize :12,
    borderWidth:1,
    borderRadius : 3,
    backgroundColor : "#f0f0f0",
    width :250,
    marginLeft : 6,
    height :28,
  },
  tombol:{
    backgroundColor :"#ee9e54",
    height : 45,
    width : 200,
    borderRadius :5,
    marginTop :20,
    paddingHorizontal : 10,
  },
  BuatTiket :{
    color : 'white',
    fontSize : 20,
    fontWeight : 'bold',
    alignSelf :'center',
    padding :8
  },
  identitas : {
    alignSelf :'flex-start',
    fontSize :10,
    fontWeight : 500,
    paddingLeft : 5,
    marginBottom :5,
  },
  TextInput :{
    marginLeft : 10,
  }
  
})
  
export default pesanan;