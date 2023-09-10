import { ImageBackground, FlatList, Pressable, Text} from 'react-native'
import React, { useContext }  from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { CartContext } from '../../context/CartContext/CartContext'
import EventCard from '../../components/Card/EventCard'
import Buttonn from '../../components/Buttonn/Buttonn'

import styles  from './Cart.style'

const Cart = () => {

  const image = {uri: 'https://www1.chester.ac.uk/sites/default/files/styles/hero/public/Events%20Management%20festival%20image.jpg?itok=eJ3k-5R6'}


  const {cart, setCart} = useContext(CartContext)

  const deleteCart = (item) => {
    var filteredCart = cart.filter(q => q.id != item.id)
    setCart([...filteredCart])
  }

  const renderCart = ({item}) => {
    return (
      <>
      <Pressable onPress={() => deleteCart(item)}>
      <Icon name='delete-circle' size={48}/>
      </Pressable>
      <EventCard event={item}/>
      </>
    )
  }

  return (
    <ImageBackground source={image} style={styles.imageBackground}>
      <Text style={styles.header}>MY CART</Text>
      <FlatList
      data={cart}
      renderItem={renderCart}
      />
      <Buttonn title={'Delete'} onPress={() => setCart([])}/>
    </ImageBackground>
  )
}

export default Cart