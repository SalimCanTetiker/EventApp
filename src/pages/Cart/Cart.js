import { ImageBackground, FlatList } from 'react-native'
import React, { useContext }  from 'react'

import { CartContext } from '../../context/CartContext/CartContext'
import EventCard from '../../components/Card/EventCard'

import styles  from './Cart.style'

const Cart = () => {

  const image = {uri: 'https://www1.chester.ac.uk/sites/default/files/styles/hero/public/Events%20Management%20festival%20image.jpg?itok=eJ3k-5R6'}


  const {cart} = useContext(CartContext)

  const renderCart = ({item}) => <EventCard event={item}/>

  return (
    <ImageBackground source={image} style={styles.imageBackground}>
      <FlatList
      data={cart}
      renderItem={renderCart}
      />
    </ImageBackground>
  )
}

export default Cart