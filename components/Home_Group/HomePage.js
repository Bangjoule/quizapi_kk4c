import React from 'react'
import {Text, Image, View, TouchableOpacity, ScrollView} from 'react-native';

  
export default function home({navigation}){
  return(
    <ScrollView>
    <View style={{ 
      backgroundColor: '#15354F', 
      justifycontent: 'center', 
      alignContent: 'center',
      alignItem: 'center',
      padding:20, 
      paddingTop:20,}}>

      <TouchableOpacity onPress={()=> navigation.navigate('Dummyaccount')}>
      <Image source={require('../../assets/Alldummy/setting.png')} 
      style={{
        height:50, 
        width:50, 
        marginLeft:220, 
        marginBottom:20}}/>
        </TouchableOpacity>

       <Image source={require('../../assets/yzicon.png')} 
      style={{height:135, width:135, marginLeft:75, marginBottom:40}}/>
      <Text style={{
        fontWeight:'bold', 
        textAlign:'center', 
        color:'#F8F4EA', 
        marginBottom:40, }}>
         Yazunsport  adalah Aplikasi E-Book yang berisi 
materi Olahraga Bola Kecil dan juga Quiz Latihannya
      </Text>

      <Text style={{
        fontWeight:'bold', 
        fontSize: 20,
        textAlign:'left', 
        color:'#F8F4EA', 
        marginBottom:20, }}>
        Kategori
      </Text>

     <View style={{
       flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',
     }}>

<TouchableOpacity onPress={()=> navigation.navigate('softball')}>     
<Image source={require('../../assets/Home/softballhome.png')}
style={{height:100, width:118, marginLeft:0, marginBottom:0}}
/>
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate('Baseball')}>
<Image source={require('../../assets/Home/baseballhome.png')}
style={{height:100, width:118, marginLeft:0, marginBottom:0}}
/>
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate('golf')}>
<Image source={require('../../assets/Home/golfhome.png')}
style={{height:100, width:118, marginLeft:0, marginBottom:0}}
/>

</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate('bulutangkis')}>
<Image source={require('../../assets/Home/bulutangkishome.png')}
style={{height:100, width:118, marginLeft:0, marginBottom:0}}
/>
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate('rounders')}>
<Image source={require('../../assets/Home/roundershome.png')}
style={{height:100, width:118, marginLeft:0, marginBottom:0}}
/>
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate('tenismeja')}>
<Image source={require('../../assets/Home/tenismejahome.png')}
style={{height:100, width:118, marginLeft:0, marginBottom:0}}
/>
</TouchableOpacity>
     </View>

    <View>
    <Text style={{
        fontWeight:'bold', 
        fontSize: 20,
        textAlign:'left', 
        color:'#F8F4EA', 
        marginBottom:20, 
        marginTop:20,}}>
        Kategori
      </Text>
      <TouchableOpacity onPress={()=> navigation.navigate('tenismeja')}>
 <Image source={require('../../assets/Underflex/Tenis_Meja.png')} 
      style={{height:90, width:340, marginLeft: -20, marginBottom: 10}}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('takraw')}>
 <Image source={require('../../assets/Underflex/Takraw.png')} 
      style={{height:90, width:340, marginLeft: -20, marginBottom: 10}}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('billiard')}>
 <Image source={require('../../assets/Underflex/Biliard_2.png')} 
      style={{height:90, width:320, marginLeft: -20, marginBottom: 10}}
      />
      </TouchableOpacity>
    </View>

      <TouchableOpacity onPress={()=> navigation.navigate('1')}>
<View style= {{
  height:40,
  width:200,
  backgroundColor: '#A23333',
  color: 'white',
  marginTop: 20,
  marginLeft: 40,
  justifyContent: 'center',
  alignContent: 'center'
}}>
<Text style={{
  color: 'white',
  textAlign: 'center',
  fontSize: 20,
  fontWeight:'bold', 
}}>
COBA QUIZ
</Text>
</View>
</TouchableOpacity>

       <Image source={require('../../assets/Alldummy/botnav.png')} 
      style={{
        height:40, 
        width:316, 
        marginLeft:-19, 
        marginTop:50,
        }}/>

<TouchableOpacity onPress={()=> navigation.navigate('HomePage')}> 
        <Image source= {require('../../assets/Alldummy/homeicon.png')} 
      style={{
        height:40, 
        width:40, 
        marginTop: -40
        }}
        onPress={()=> navigation.navigate('HomePage')}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('Dummyfav')}> 
        <Image source= {require('../../assets/Alldummy/listicon.png')} 
      style={{
        height:40, 
        width:40, 
        marginTop: -40,
        marginLeft: 120
        }}
        onPress={()=> navigation.navigate('Dummyfav')}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('Dummyaccount')}> 
        <Image source= {require('../../assets/Alldummy/accounticon.png')} 
      style={{
        height:40, 
        width:40, 
        marginTop: -40,
        marginLeft: 235
        }}
        onPress={()=> navigation.navigate('Dummyaccount')}
        />
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
  
}