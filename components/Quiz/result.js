import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import CustomButton from '../Utils/CustomButton';

export default function result({ navigation }) {
  return (
    <View style={{ 
      backgroundColor: '#61187B', 
      justifycontent: 'center', 
      padding:20, 
      paddingTop:50,flex:1}}>

      <Image source={require('../../assets/Quiz/result.png')} 
        style={{height:75, 
        width:200,  
        marginBottom:20,
        marginTop: 100,
        alignItems: 'center',
        marginLeft: 40}}
        />

        <Text style={{
          marginTop: 50,
          fontWeight:'bold', 
          textAlign:'center', 
          color: 'white'
        }}>
        
        TOTAL :
        </Text>

         <TouchableOpacity onPress={()=> navigation.navigate('HomePage')}>
        <Image source={require('../../assets/left-arrow.png')} 
        style={{height:50, 
        marginTop: 200,
        width:50,  
        marginLeft:120,
        marginBottom:20}}
        onPress={()=> navigation.navigate('HomePage')}/>
        </TouchableOpacity>
    </View>
  );
}
