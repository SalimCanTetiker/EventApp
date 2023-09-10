import { View, Text, Image, Pressable} from 'react-native'
import React, {useContext} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { FavoriteContext } from '../../context/FavoriteContext/FavoriteContext';
import { CartContext } from '../../context/CartContext/CartContext';
import Buttonn from '../../components/Buttonn/Buttonn';

import styles from './Detail.style'


const Detail = ({route, navigation}) => {

  const {favorite, setFavorite} = useContext(FavoriteContext)

  const {cart, setCart} = useContext(CartContext)

 
  const {item} = route.params

  const addToFav = (item) => {
    setFavorite([...favorite, item])
  }
  const deleteFav = (item) => {
    var filteredFav = favorite.filter(q => q.id != item.id)
    setFavorite([...filteredFav])
  }
  const addToCart = (item) => {
    setCart([...cart, item])
  }
  const deleteCart = (item) => {
    var filteredCart = cart.filter(q => q.id != item.id)
    setCart([...filteredCart])
  }
  const iconCheck = () => {
    var isFav = favorite.find(q => q.id == item.id)
    if(isFav){
      return (
        <Pressable onPress={() => deleteFav(item)}>
        <Icon style={styles.favLogo} name='heart' size={40}/>
       </Pressable>
      )
    }else {
      return (
        <Pressable onPress={() => addToFav(item)}>
        <Icon style={styles.favLogo} name='heart-outline' size={40}/>
       </Pressable>
      )
    }
  }
  const buttonCheck = () => {
    var isCart = cart.find(q => q.id == item.id)
    if(isCart){
      return (
        <Buttonn title={'added to cart'} onPress={() => deleteCart(item)}/>
      )
    }else{
      return (
        <Buttonn  title={'add to cart'} onPress={() => addToCart(item)}/>
      )
    }
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
      {iconCheck()}
      {buttonCheck()}
    </View>
  )
}

export default Detail