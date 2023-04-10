import React from 'react';
import {Image, Text, View, CustomButton, TouchableOpacity, ScrollView} from 'react-native';

export default function softball ({navigation}) {
    return  ( 
      <ScrollView>
      <View style={{ 
        backgroundColor: '#15354F',
        justifycontent: 'center', 
        padding:20,
        paddingTop:0,
        flex:1}}>

        <Image source={require('../../assets/Course/Softball.png')} 
        style={{height:200, 
        width:400,  
        marginLeft:-20,
        marginBottom:20}}/>

        <Text style={{
         letterSpacing: 1.5,
          alignItems: 'center',
          color: 'white',
        }}>
        Softball atau softball adalah olahraga bola beregu yang terdiri dari 2 tim. Permainan sofbol lahir di Amerika Serikat, diciptakan oleh George Hancock di kota Chicago pada tahun 1887.

Sofbol merupakan perkembangan dari olahraga sejenis yaitu bisbol (baseball) atau hardball. Bola sofbol saat ini berdiameter 28-30,5 centimeter; bola tersebut dilempar oleh seorang pelempar bola (pitcher) dan menjadi sasaran pemain lawan yang memukul (batter) dengan menggunakan tongkat pemukul (bat).

Terdapat sebuah regu yang berjaga (defense) dan tim yang memukul (offense). Tiap tim berlomba mengumpulkan angka (run) dengan cara memutari tiga seri marka (base) pelari hingga menyentuh marka akhir yaitu home plate.

 Cabang olahraga Softball boleh dikatakan olahraga yang paling digemari anak anak muda, terutama para pelajar dan mahasiswa.Biasanya pada pemain mempergunakan seragam olahraga yang menarik, dengan disertai teriakan-teriakan istilah bahasa asing ketika mereka sedang bermain.


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