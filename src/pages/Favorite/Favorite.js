import { View, Text, FlatList } from 'react-native'
import React, { useContext } from 'react'

import { FavoriteContext } from '../../context/FavoriteContext/FavoriteContext'

const Favorite = () => {
  const {favorite} = useContext(FavoriteContext)

  const renderFav = ({item}) => <Text>{item.name}</Text>
  return (
    <View>
      <FlatList
      data={favorite}
      renderItem={renderFav}
      />
    </View>
  )
}

export default Favorite