import react from 'react';
import {Button, View,} from 'react-native';

const CustomButton = (props) =>{
  return(
    <View style={{padding:props.pd, backgroundColor:props.bg, margin:props.margin, borderRadius:props.br}}>
    <Button title={props.title} 
    color={props.color} 
    onPress={props.onPress} 
    borderRadius={props.borderRadius}/>
      
    </View>
  )
}

export default CustomButton;