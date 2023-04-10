import React from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';

export default function bulutangkis ({navigation}) {
    return  ( 
      <ScrollView>
      <View style={{ 
        backgroundColor: '#15354F',
        justifycontent: 'center', 
        padding:20,
        paddingTop:0,
        flex:1}}>

        <Image source={require('../../assets/Course/BuluTangkis.png')} 
        style={{height:200, 
        width:400,  
        marginLeft:-20,
        marginBottom:20}}/>

        <Text style={{
         letterSpacing: 1.5,
          alignItems: 'center',
          color: 'white'
        }}>
        Pada artikel kali ini saya akan membagikan materi tentang olahraga badminton secara lengkap meliputi pengertian, teknik dasar bulutangkis, sejarah, peraturan, ukuran lapangan, serta manfaatnya.

Bulu tangkis, nama itu pasti tidak asing lagi di telinga anda. Olahraga yang dimainkan menggunakan raket ini tentunya sangat asik dan seru. Olahraga ini memang tidak terlalu populer seperti permainan sepak bola ataupun basket.

Tapi, tidak sedikit juga negara yang ikut serta dalam permainan bulu tangkis ini. BWF (Badminton World Federation) adalah federasi bulu tangkis dunia yang dibentuk dengan tujuan untuk mengontrol, memperkenalkan, serta menyempurnakan olahraga ini di dunia internasional. Tercatat bahwa BWF telah memiliki 180 negara sebagai anggota dan letak kantor pusat federasi ini berada di Kuala Lumpur, Malaysia.

Olahraga badminton ini mirip dengan tenis (baca: Tenis Lapangan: Sejarah, Teknik Dasar dan Pengertiannya). Tujuan permainan bulutangkis atau badminton adalah untuk memukul bola yang disebut shuttlecock melewati jaring agar jatuh dalam bidang permainan lawan.

Lama waktu permainan bulu tangkis ditentukan oleh game yang terdiri dari 21 poin, tiap permainan maksimal ada 2 game jika beruntut menang. Namun, jika 1 kali menang dan 1 kali kalah dalam setiap game maka akan diberlangsungkan game tambahan yakni game ke-3.

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