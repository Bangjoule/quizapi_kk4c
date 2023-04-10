import React from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';

export default function baseball ({navigation}) {
    return  ( 
      <ScrollView>
      <View style={{ 
        backgroundColor: '#15354F',
        justifycontent: 'center', 
        padding:20,
        paddingTop:0,
        flex:1}}>

        <Image source={require('../../assets/Course/baseball_c.png')} 
        style={{height:200, 
        width:400,  
        marginLeft:-20,
        marginBottom:20}}/>

        <Text style={{
         letterSpacing: 1.5,
          alignItems: 'center',
          color: 'white'
        }}>
        Berikut ini peraturan dasar permainan baseball.
- Baseball dimainkan oleh dua tim dan masing-masing tim terdiri dari 9 orang.
- Tim yang melempar disebut sebagai fielding team.
- Fielding team terdiri dari pitcher, catcher, penjaga base pertama, kedua dan ketiga, shortstop, dan tiga orang yang berjaga di garis lapangan sebelah kiri, kanan, dan tengah.
- Sementara itu tim yang lain mengirimkan satu orang sebagai pemukul atau batter.
- Satu game baseball terdiri dari 9 inning. Di setiap inning, satu tim berkesempatan untuk menjadi regu pemukul sebanyak satu kali. Tim yang berhasil meraih angka paling banyak akan keluar sebagai pemenang.
- Angka bisa didapatkan dari hasil pukulan batter. Saat bola berhasil dipukul, maka pemukul harus berlari setidaknya hingga base pertama.
- Pemukul harus mencapai base sebelum bola yang ia pukul berhasil tertangkap tim lawan dan dilempar ke penjaga base pertama.
- Angka akan didapatkan jika regu pemukul berhasil melewati base ketiga.
- Pemukul yang berhasil memukul bola hingga jauh dan tidak bisa tertangkap oleh tim lawan disebut berhasil memukul home run dan ia bisa berlari melewati tiga base sekaligus dan mendapatkan satu angka.

        </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('HomePage')}>
        <Image source={require('../../assets/left-arrow.png')} 
        style={{height:50, 
        marginTop: 20,
        width:50,  
        marginLeft:100,
        marginBottom:20}}
        />
        </TouchableOpacity>
    </View>
    </ScrollView>
    );
    
}