import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

import Home from './pages/Home/Home'
import Favorite from './pages/Favorite/Favorite'
import Cart from './pages/Cart/Cart'
import MyAccount from './pages/MyAccount/MyAccount'

import Detail from './pages/Detail/Detail'

import Login from './pages/Auth/Login/Login';
import Sign from './pages/Auth/Sign/Sign'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const TabStack = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
    <Tab.Screen name='Home' component={HomeStack} 
    options={{tabBarIcon: () => (<Icon name='home-circle-outline' size={35}/>)}} />
    <Tab.Screen name='Favorite' component={Favorite} 
    options={{tabBarIcon: () => (<Icon name='heart-outline' size={35}/>)}}/>
    <Tab.Screen name='Cart' component={Cart}
    options={{tabBarIcon: () => (<Icon name='cart-outline' size={35}/>)}} />
    <Tab.Screen name='MyAccount' component={MyAccount}
    options={{tabBarIcon: () => (<Icon name='account-circle-outline' size={35}/>)}} />
  </Tab.Navigator>
  )
}
const HomeStack = () => {
  return (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='Homee' component={Home}/>
    <Stack.Screen name='Detail' component={Detail}/>
  </Stack.Navigator>
  )
}
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Sign' component={Sign} />
    </Stack.Navigator>
  )
}

const Router = () => {

  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  },[]);


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      {!userSession ? (
     <Stack.Screen name='Auth' component={AuthStack} /> 
     ) : ( 
     <Stack.Screen name='Tab' component={TabStack} /> 
      )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router