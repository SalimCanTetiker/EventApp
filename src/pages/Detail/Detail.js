import { View, Text, Image, Pressable} from 'react-native'
import React, {useContext, useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { FavoriteContext } from '../../context/FavoriteContext/FavoriteContext';
import { CartContext } from '../../context/CartContext/CartContext';

import styles from './Detail.style'
import Buttonn from '../../components/Buttonn/Buttonn';


const Detail = ({route, navigation}) => {

  const {favorite, setFavorite} = useContext(FavoriteContext)

  const {cart, setCart} = useContext(CartContext)

 
  const {item} = route.params

  const addToFav = (item) => {
    setFavorite([...favorite, item])
  }
  const addToCart = (item) => {
    setCart([...cart, item])
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
      <Icon style={styles.backLogo} name='arrow-left' size={40} />
      </Pressable>
      <Text style={styles.title}>{item.name}</Text>
      <Image style={styles.image} source={{uri: item.image}}/>
      <Text style={styles.datetimeTitle}>{item.date} - {item.time}</Text>
      <Icon style={styles.locationLogo} name='map-marker-question' size={40}/>
      <Text style={styles.locationTitle}>{item.location}</Text>
      <Pressable onPress={() => addToFav(item)}>
        <Icon style={styles.favLogo} name='heart' size={40}/>
       </Pressable>
        <Buttonn style={styles.button} title={'add to cart'} onPress={() => addToCart(item)}/>
    </View>
  )
}

export default Detail