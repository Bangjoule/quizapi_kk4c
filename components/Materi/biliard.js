import React from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';

export default function biliard ({navigation}) {
    return  ( 
      <ScrollView>
      <View style={{ 
        backgroundColor: '#15354F',
        justifycontent: 'center', 
        padding:20,
        paddingTop:0,
        flex:1}}>

        <Image source={require('../../assets/Course/biliard_c.png')} 
        style={{height:200, 
        width:400,  
        marginLeft:-20,
        marginBottom:20}}/>

        <Text style={{
         letterSpacing: 1.5,
          alignItems: 'center',
          color: 'white'
        }}>
        Bola sodok atau biliar adalah sebuah cabang olahraga yang masuk dalam kategori cabang olahraga konsentrasi, sehingga sangat dibutuhkan ketahanan dan pemahaman mental yang benar serta harus ditunjang oleh kemampuan fisik yang prima agar mampu berprestasi lebih tinggi dan stabil.

Cabang olahraga ini dimainkan di atas meja dan dengan peralatan bantu khusus serta peraturan tersendiri. Permainan ini terbagi dari beberapa Jenis, antara lain jenis Carom, English Billiard dan Pool. Dapat dimainkan secara perorangan maupun tim.

Sebagai contoh, jenis Carom dimainkan di meja yang tidak memiliki lubang sama sekali. Ini berbeda dengan jenis English Billiard dan Pool yang dimainkan di meja yang memiliki lubang sebanyak 6 buah. Meski sama-sama memilki 6 buah lubang, ukuran atau luas meja antara English Billiar dan Pool pun berbeda, lebih luas meja jenis English Billiard.

Sampai saat ini, tahun 2008, yang sangat berkembang di Indonesia adalah jenis Pool yang itu pun masih terbagi dalam Nomor bola 15, bola 8 dan bola 9. Dahulu di Indonesia, biliar identik dengan olahraga yang selalu dimainkan oleh para lelaki saja. Namun saat ini banyak wanita yang mulai menggemari olahraga biliar.

 
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