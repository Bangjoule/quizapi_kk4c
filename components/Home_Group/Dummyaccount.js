import React from 'react';
import { Text, View, Image, TouchableOpacity, } from 'react-native';
import CustomButton from '../Utils/CustomButton';


export default function dummyaccount ({navigation}) {
  return (
   <View style={{ backgroundColor: '#0A2647', justifycontent: 'center', padding:20, paddingTop:50,flex:1}}>

      <Image source={require('../../assets/Alldummy/Account.png')} 
      style={{
        height:160, 
        width:250, 
        marginLeft:15, 
        marginTop:80,
        }}/>

       <Image source={require('../../assets/Alldummy/botnav.png')} 
      style={{
        height:40, 
        width:316, 
        marginLeft:-19, 
        marginTop:200,
        }}/>

<TouchableOpacity onPress={()=> navigation.navigate('HomePage')}> 
        <Image source= {require('../../assets/Alldummy/homeicon.png')} 
      style={{
        height:40, 
        width:40, 
        marginTop: -40
        }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('Dummyfav')}> 
        <Image source= {require('../../assets/Alldummy/listicon.png')} 
      style={{
        height:40, 
        width:40, 
        marginTop: -40,
        marginLeft: 120
        }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('Dummyaccount')}> 
        <Image source= {require('../../assets/Alldummy/accounticon.png')} 
      style={{
        height:40, 
        width:40, 
        marginTop: -40,
        marginLeft: 235
        }}
        />
      </TouchableOpacity>
      
    </View>
  );
}
