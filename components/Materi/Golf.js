import React from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';

export default function golf ({navigation}) {
    return  ( 
      <ScrollView>
      <View style={{ 
        backgroundColor: '#15354F',
        justifycontent: 'center', 
        padding:20,
        paddingTop:0,
        flex:1}}>

        <Image source={require('../../assets/Course/golf_c.png')} 
        style={{height:200, 
        width:400,  
        marginLeft:-20,
        marginBottom:20}}/>

        <Text style={{
         letterSpacing: 1.5,
          alignItems: 'center',
          color: 'white'
        }}>
        Adapun peraturan-peraturan dalam golf adalah sebagai berikut.
- Pukulan pertama untuk memulai pertandingan harus dilakukan dari teeing ground.
- Dalam olahraga golf, yang menjadi pemenangnya adalah pemain yang memasukkan bola dengan pukulan paling sedikit.
Setiap melakukan pukulan, para pemain golf harus berjalan untuk melakukan pukulan selanjutnya.
Pemain bisa menganggap bolanya tidak dapat dimainkan dalam posisi apapun di dalam lapangan.
Jika mendapatkan pinalty, anda diperbolehkan mengangkat, membersihkan, bahkan mengganti bola.

        </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('HomePage')}>
        <Image source={require('../../assets/left-arrow.png')} 
        style={{height:50, 
        marginTop: 20,
        width:50,  
        marginLeft:100,
        marginBottom:20}}
        onPress={()=> navigation.navigate('HomePage')}/>
        </TouchableOpacity>
    </View>
    </ScrollView>
    );
}