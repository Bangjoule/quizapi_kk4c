import React from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';

export default function tenislapangan ({navigation}) {
    return  ( 
      <ScrollView>
      <View style={{ 
        backgroundColor: '#15354F',
        justifycontent: 'center', 
        padding:20,
        paddingTop:0,
        flex:1}}>

        <Image source={require('../../assets/Course/tenislapangan_c.png')} 
        style={{height:200, 
        width:400,  
        marginLeft:-20,
        marginBottom:20}}/>

        <Text style={{
         letterSpacing: 1.5,
          alignItems: 'center',
          color: 'white'
        }}>
        Setelah menguasai pegangan raket dan posisi siap yang benar, teknik dasar permainan tenis lapangan lainnya yang perlu dikuasai adalah pukulan bola. Beberapa pukulan bola atau stroke yang cukup penting selama pertandingan tenis seperti berikut ini.
Serve. Pukulan awalan untuk memulai permainan tenis lapangan. Menyempurnakan teknik servis bisa menjadi kunci untuk memenangkan pertandingan, yakni dengan cara membuat lawan kesulitan untuk membalas tembakan.
Return of serve. Pengembalian pukulan servis dari lawan bisa membuka peluang untuk melakukan rally panjang dan mencuri poin. Maka dari itu, Anda perlu melakukan posisi siap yang matang dan pegangan raket dengan benar.
Groundstroke. Pukulan yang paling umum terjadi selama pertandingan, yakni dengan membuat bola harus memantul sekali pada lapangan dalam melakukan serangan. Groundstroke bisa dilakukan dalam teknik forehand atau backhand. Menyempurnakan salah satu teknik tersebut bisa membantu memenangi pertandingan.
Volley. Pukulan yang bisa dilakukan sebelum bola memantul pada lapangan dengan tujuan untuk membatasi waktu reaksi lawan. Teknik ini membutuhkan koordinasi mata dan tangan yang kuat untuk menghasilkan pukulan yang sulit dikembalikan lawan.
Approach shot. Pukulan yang bertujuan menyerang dengan memukul bola sebelum mencapai garis belakang lapangan, tetapi meninggalkan banyak ruang pada bagian belakang. Setelah melakukan gerakan ini, umumnya petenis akan menyelesaikannya dengan pukulan volley.

        </Text>
       <TouchableOpacity onPress={()=> navigation.navigate('HomePage')}>
        <Image source={require('../../assets/left-arrow.png')} 
        style={{height:50, 
        marginTop: 20,
        width:50,  
        marginLeft:100,
        marginBottom:20}}
        onPress={()=> navigation.navigate('HomePage')}
        />
       </TouchableOpacity>
    </View>
    </ScrollView>
    );
}