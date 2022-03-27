import React from "react";
import { StyleSheet, Text, View ,Alert, Button, SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import { TextInput, TouchableOpacity } from "react-native-web";
import { useRoute } from '@react-navigation/native';

const konfirmasi = ({})=> {
  return(
    <SafeAreaView style={styles.background}>
      <View style={styles.box}>
        <Text style={styles.H1}>
          Neroship
        </Text>
        <Text style={styles.H4}>
          Order Information
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
            Service :
          </Text>

          <Text style={styles.H5}>
            Express 
          </Text>

          <Text style={styles.H5}>
            _______________________________________________
          </Text>

          <Text style={styles.H5}>
            Adult x 1                               Rp 65.000,00
          </Text>
        </View>
        <Text style={styles.H4}>
          Order Data
        </Text>
        <Text style={styles.H6}>
          Full Name
        </Text>

        <View style={styles.input}>
          <TextInput style={styles.TextInput} placeholder="Full Name" ></TextInput>
        </View>

        <Text style={styles.H6}>
          Identity
        </Text>

        <View style={styles.input}>
          <TextInput style={styles.TextInput} placeholder="Men" ></TextInput>
        </View>

        <Text style={styles.H6}>
          Age
        </Text>

        <View style={styles.input}>
          <TextInput style={styles.TextInput} placeholder="Age" ></TextInput>
        </View>

        <TouchableOpacity style={styles.tombol}>
          <Text style={styles.BuatTiket}>
            Submit
          </Text>
        </TouchableOpacity>

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
    marginTop: 10,
    borderWidth: 1,
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
    width :290,
    height :28,
  },
  H1 : {
    color: "#00579c",
    fontWeight :"bold",
    fontSize : 30,
    marginBottom : 15,
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
    fontSize :12,
  },
  H6 :{
    alignSelf :'flex-start',
    marginBottom : 5,
    fontSize :12,
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
    marginLeft : 65,
    fontWeight : 'bold',
  },
  TextInput :{
    marginLeft : 10,
  }
  
})

export default konfirmasi;