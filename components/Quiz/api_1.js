import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
import CustomButton from '../Utils/CustomButton';

const App = ({navigation}) => {
  const url = 'https://yazunsport.my.id/api/quizzes/';
  const url2 = 'https://yazunsport.my.id/api/jobsheet/one';
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  const [quiz, setQuiz] = useState('');
  const [nama, setNama] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [ava, setAva] = useState('');
  const [pildo, setPildo] = useState('');
  const [pilco, setPilco] = useState('');
  const [quizFinish, setQuizFinish] = useState(false)

  const updateQuiz = () => {
    setId(quiz[num].id);
    setNama(quiz[num].quiz);
    setEmail(quiz[num].a);
    setAva(quiz[num].b);
    setPilco(quiz[num].c);
    setPildo(quiz[num].d);
  };

  const getAllQuizes = async () => {
    axios.get(url).then((res) => {
      const quizes = res.data.data;
      setQuiz(quizes);
      updateQuiz();
    });
  };

  useEffect(() => {
    getAllQuizes();
  });

  const navigateQuiz = (action) => {
    if (action == 'next') setNum(num + 1);
    else setNum(num - 1);
  };

  // Perintah post quizId adalah dengan id url1, lalu jika answer sama dengan Tombol maka tambah score
  const Score = (pilihan) => {
    fetch(url2, {
      method: 'POST', //or PUT
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quizId: id,
        answer: pilihan,
      }),
    })
      .then((response) => {
        return response.json();
        // console.log(response);
      })
      .then((data) => {
        // const data = response.data
        if (data.benar) {
          setScore(score + 1)
        }
        if(num < (quiz.length - 1)){
          navigateQuiz('next')
        }
        else setQuizFinish(true)
    
        // console.log(data);
      })
      .catch((error) => console.log(error));
  };


  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 ,backgroundColor: '#15354F'}}>
      <View style={{
        display: (quizFinish && "none"),
        color: 'white'
        }}>
        
        <Text style={{ 
          fontSize: 20 , 
          color: 'white'}}>
          Id :{id}
          </Text>
<View style={{
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  paddingTop: 35, 
  height: 200,
  width: 250
}}>
        <Text style={{ 
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'white'}}>
          {nama}
          </Text>
</View>

        <CustomButton title={'A. ' + email} 
        color='rgba(255, 255, 255, 0.5)' 
        pd={8} 
        margin={5} 
        br={5} onPress={() => Score('a')} />

        <CustomButton title={'B. ' + ava} 
        color='rgba(255, 255, 255, 0.5)' 
        pd={8} 
        margin={5} 
        br={5} onPress={() => Score('b')} />

        <CustomButton title={'C. ' + pilco} 
        color='rgba(255, 255, 255, 0.5)' 
        pd={8} 
        margin={5} 
        br={5} onPress={() => Score('c')} />

        <CustomButton title={'D. ' + pildo}
        color='rgba(255, 255, 255, 0.5)' 
        pd={8} 
        margin={5} 
        br={5} 
        onPress={() => Score('d')} />
      </View>
      <View style={{display: (!quizFinish && "none")}}>
      <Image source={require('../../assets/Quiz/result.png')} 
        style={{height:75, 
        width:200,  
        marginBottom:10,
        marginTop: 100,
        alignItems: 'center',
        marginLeft: 10}}
        />
        <Text style={{ 
          fontSize: 20, 
          color:'white',
          textAlign: 'center',
          paddingTop: 50 }}>Score : {Math.round((score / quiz.length) * 10)}/10</Text>

        <TouchableOpacity onPress={()=> navigation.navigate('HomePage')}>
        <Image source={require('../../assets/left-arrow.png')} 
        style={{height:50, 
        marginTop: 100,
        width:50,  
        marginLeft:90,
        marginBottom:20}}
        onPress={()=> navigation.navigate('HomePage')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
