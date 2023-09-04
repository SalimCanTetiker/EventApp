import { View, Text, FlatList } from 'react-native'
import React, { useContext }  from 'react'

import { CartContext } from '../../context/CartContext/CartContext'

const Cart = () => {

  const {cart} = useContext(CartContext)

  const renderCart = ({item}) => <Text>{item.name}</Text>

  return (
    <View>
      <FlatList
      data={cart}
      renderItem={renderCart}
      />
    </View>
  )
}

export default Cart