import React from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';

export default function takraw ({navigation}) {
    return  ( 
      <ScrollView>
      <View style={{ 
        backgroundColor: '#15354F',
        justifycontent: 'center', 
        padding:20,
        paddingTop:0,
        flex:1}}>

        <Image source={require('../../assets/Course/takraw_c.png')} 
        style={{height:200, 
        width:400,  
        marginLeft:-20,
        marginBottom:20}}/>

        <Text style={{
         letterSpacing: 1.5,
          alignItems: 'center',
          color: 'white'
        }}>
        Sepak takraw adalah permainan bola kecil yang memadukan setidaknya memadukan dua teknik olahraga populer, yakni voli dan sepak bola. Olahraga tradisional ini punya permainan mirip bola voli, tetapi untuk menyerang dan bertahan lebih banyak menggunakan kaki. Sepak takraw telah dipertandingkan dalam turnamen internasional, biarpun mungkin tidak begitu populer bagi beberapa kalangan.

Tekong (Server). Pemain ini bertugas dalam melakukan servis untuk mengawali permainan. Saat melakukan servis, tekong bisa menendang bola dengan kecepatan tinggi untuk membuat lawan kesulitan bertahan

Bola baseball terbuat dari kulit sapi atau kuda dengan lingkaran kurang lebih 23,5 cm, diameter 7,3 cm, dan berat 178 gram.

Tongkat baseball idealnya memiliki panjang 1,06 meter dengan penampang bergaris tengah 7 cm dan bungkus pegangan sepanjang 46 cm

Tongkat baseball idealnya memiliki panjang 1,06 meter dengan penampang bergaris tengah 7 cm dan bungkus pegangan sepanjang 46 cm.
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