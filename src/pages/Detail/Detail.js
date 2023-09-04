import { View, Text, Image, Pressable} from 'react-native'
import React, {useContext} from 'react'
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
      <Icon name='arrow-left' size={40} />
      </Pressable>
      <Text>{item.name}</Text>
      <Image style={styles.image} source={{uri: item.image}}/>
      <Text>{item.date} - {item.time}</Text>
      <Icon name='map-marker-question' size={40}/>
      <Text>{item.location}</Text>
      <Pressable onPress={() => addToFav(item)}>
      <Icon name='heart-outline' size={40}/>
      </Pressable>
        <Buttonn title={'add to cart'} onPress={() => addToCart(item)}/>
    </View>
  )
}

export default Detail