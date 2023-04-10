import React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import CustomButton from '../Utils/CustomButton';


export default function register ({navigation}) {
  return (
   <View style={{ backgroundColor: '#0A2647', justifycontent: 'center', padding:20, paddingTop:50,flex:1}}>

      <Image source={require('../../assets/yzicon.png')} 
      style={{height:160, width:150, marginLeft:80, marginBottom:40}}/>

      <TextInput style={{backgroundColor:'#4F687F', height:40, borderRadius:25, paddingLeft:20, color:'#F8F4EA'}}
      
        placeholder="Username"
        keyboardType="string" />

        <TextInput style={{backgroundColor:'#4F687F', height:40, marginTop:10, borderRadius:25, paddingLeft:20, color:'#F8F4EA'}}
      
        placeholder="Email"
        keyboardType="string" />

        <TextInput style={{backgroundColor:'#4F687F', height:40, marginTop:10, borderRadius:25, paddingLeft:20, color:'#F8F4EA'}}
      
        placeholder="Password"
        keyboardType="numeric" />

        <TextInput style={{backgroundColor:'#4F687F', height:40, marginTop:10, borderRadius:25, paddingLeft:20, color:'#F8F4EA'}}
      
        placeholder="Confirm Password"
        keyboardType="numeric" />

      
        <CustomButton title='Login' color='#ED693F' pd={8} margin={5} br={15} 
        onPress={()=> navigation.navigate('HomePage')} />
       <CustomButton title='Register' color='#ED693F' pd={8} margin={5}  br={15}
       onPress={()=> navigation.navigate('HomePage')} />
       
    </View>
  );
}

