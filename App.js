import react from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


//Act 1
import login from './components/Home_Group/LoginForm'
import register from './components/Home_Group/RegisterForm'
import splashscreen from './components/Home_Group/splashscreen'
import home from './components/Home_Group/HomePage'
import dummyaccount from './components/Home_Group/Dummyaccount'
import dummyfav from './components/Home_Group/Dummyfav'

//Act 2
import baseball from './components/Materi/Baseball'
import biliard from './components/Materi/biliard'
import bulutangkis from './components/Materi/BuluTangkis'
import golf from './components/Materi/Golf'
import rounders from './components/Materi/rounders'
import softball from './components/Materi/Softball'
import takraw from './components/Materi/takraw'
import tenislapangan from './components/Materi/tenislapangan'
import tenismeja from './components/Materi/Tenismeja'
//ACT 3
import api_1 from './components/Quiz/api_1'



const Stack = createStackNavigator();
  
export default function app(){
  return(
    <NavigationContainer>

    <Stack.Navigator>
            
                <Stack.Screen name="Login" component={login} />
                <Stack.Screen name="Register" component={register} />
                <Stack.Screen name="HomePage" component={home} />
                <Stack.Screen name="Dummyaccount" component={dummyaccount} />
                <Stack.Screen name="Dummyfav" component={dummyfav} />
                <Stack.Screen name="Baseball" component={baseball} />
                <Stack.Screen name="billiard" component={biliard} />
                <Stack.Screen name="bulutangkis" component={bulutangkis} />
                <Stack.Screen name="golf" component={golf} />
                <Stack.Screen name="rounders" component={rounders} />
                <Stack.Screen name="softball" component={softball} />
                <Stack.Screen name="takraw" component={takraw} />
                <Stack.Screen name="tenislapangan" component={tenislapangan} />
                <Stack.Screen name="tenismeja" component={tenismeja} />
                <Stack.Screen name="1" component={api_1} />
                     
    </Stack.Navigator>
    </NavigationContainer>
  );
}