import React from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';

export default function rounders ({navigation}) {
    return  ( 
      <ScrollView>
      <View style={{ 
        backgroundColor: '#15354F',
        justifycontent: 'center', 
        padding:20,
        paddingTop:0,
        flex:1}}>

        <Image source={require('../../assets/Course/rounders_c.png')} 
        style={{height:200, 
        width:400,  
        marginLeft:-20,
        marginBottom:20}}/>

        <Text style={{
         letterSpacing: 1.5,
          alignItems: 'center',
          color: 'white'
        }}>
       Apa itu Permainan rounders? Rounders adalah permainan atau olahraga bola kecil yang menyerupai permainan kasti, bassball, bola bakar ataupun softball. Cara memainkanya juga serupa dengan permainan-permainan tersebut. Cara bermain rounders adalah dengan memukul bola lalu mengelilingi lapangan yang sebelumnya telah ditandai dengan tiang atau titik base. Pemenangnya adalah regu yang paling banyak mengelilingi lapangan. Tiap regu terdiri dari 9 pemain. Untuk menjadi pemain rounder yang hebat, seseorang harus menguasai teknik teknik dasar berupa kemampuan melempar, menangkap, memukul, ketrampilan mengetik, serta menghindari sentuhan bola. Baca juga : Pengertian Kebugaran Jasmani Sejarah Permainan Rounders Sejarah permainan rounders sudah ada sejak lama sekali. Diprediksi permainan ini sudah dimainkan di Inggris sejak zaman Tudor. Hal itu dibuktikan dari buku yang berjudul “Pocket-Pretty” dimana permainan ini disebut permainan ‘dasar-bola’ oleh John Newbery. Tahun 1828, terbit edisi kedua dari buku “Pemilik The Boy” oleh William Clarke di London. Buku tersebut menjelaskan aturan permainan kasti dan deskripsi permainannya dalam bahasa Inggris. Tahun berikutnya, buku tersebut diterbitkan di Boston, Massachussetts.

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