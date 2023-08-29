import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './pages/Home/Home'
import Favorite from './pages/Favorite/Favorite'
import Cart from './pages/Cart/Cart'
import MyAccount from './pages/MyAccount/MyAccount'

const Tab = createBottomTabNavigator()

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
        <Tab.Screen name='Home' component={Home} 
        options={{tabBarIcon: () => (<Icon name='home-circle-outline' size={35}/>)}} />
        <Tab.Screen name='Favorite' component={Favorite} 
        options={{tabBarIcon: () => (<Icon name='heart-outline' size={35}/>)}}/>
        <Tab.Screen name='Cart' component={Cart}
        options={{tabBarIcon: () => (<Icon name='cart-outline' size={35}/>)}} />
        <Tab.Screen name='MyAccount' component={MyAccount}
        options={{tabBarIcon: () => (<Icon name='account-circle-outline' size={35}/>)}} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Router