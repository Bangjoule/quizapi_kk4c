import React from 'react';
import {Image, Text, View, CustomButton, TouchableOpacity, ScrollView} from 'react-native';

export default function tenismeja ({navigation}) {
    return  ( 
      <ScrollView>
      <View style={{ 
        backgroundColor: '#15354F',
        justifycontent: 'center', 
        padding:20,
        paddingTop:0,
        flex:1}}>

        <Image source={require('../../assets/Course/tenismeja_c.png')} 
        style={{height:200, 
        width:400,  
        marginLeft:-20,
        marginBottom:20}}/>

        <Text style={{
         letterSpacing: 1.5,
          alignItems: 'center',
          color: 'white',
        }}>
        Tenis meja merupakan salah satu cabang olahraga yang dimainkan oleh dua orang pemain secara tunggal atau dua pasang pemain secara ganda dengan cara berhadapan dengan lawan memakai sebuah bola kecil, bet yang terbuat dari bahan kayu yang dilapisi menggunakan karet, dan lapangan tenis berupa meja.

Permainan tenis meja dikenal oleh masyarakat Inggris sejak abad ke 19. Saat itu, tenis meja dikenal dengan nama ping pong, whiff whaff atau gossima. Salah satu nama yang digunakan bagi seluruh negara yaitu ping pong. Bahkan ada sebuah perusahaan dari Inggris yakni J. Jaques and Son, Ltd., menjadikannya sebagai merek dagangnya pada tahun 1901.
Semenjak itulah, ping pong hanya dipakai bila permainan itu memakai peralatan dari Jacques, sementara perusahaan lainnya memberikan namanya yaitu table tennis. Pada masa itu, tenis meja menjadi sebuah permainan di kalangan kelas atas, dan kerap dimainkan di dalam ruangan sesudah makan malam.
Pada awalnya, peralatan yang dipakai terdiri dari sebuah meja, sebaris buku yang telah disusun diletakan di bagian tengah meja yang digunakan sebagai net, bola golf, dan juga dua buah buku sebagai pemukul bola tersebut. Akan tetapi, di tahun 1901, seorang pecinta tenis meja bernama James W. Gibb berhasil menemukan sebuah bola seluloid.
Di tahun yang sama pula, seorang pecinta tenis meja bernama E.C. Goode membuat suatu bet dengan versi modern yakni dengan cara memasang selembar lapisan karet yang terdapat bintik-bintik pada papan kayu dengan permukaannya dihaluskan.

        </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('HomePage')}>
        <Image source={require('../../assets/left-arrow.png')} 
        style={{height:50, 
        marginTop: 20,
        width:50,  
        marginLeft:100,
        marginBottom:20}}
        onPress={()=> navigation.navigate('home')}/>
        </TouchableOpacity>
    </View>
    </ScrollView>
    );
}