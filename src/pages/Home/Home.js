import { View, Text, FlatList } from 'react-native'
import React from 'react'

import SearchBar from '../../components/SearchBar/SearchBar'
import useFetch from '../../hooks/useFetch/useFetch'

const Home = () => {

  const data = useFetch('https://openapi.izmir.bel.tr/api/ibb/kultursanat/etkinlikler')

  const renderEvent = ({item}) => <Text>{item.Tur}</Text>

  return (
    <View>
      <SearchBar/>
      <Text>Home</Text>
      <FlatList data={data} renderItem={renderEvent}/>
    </View>
  )
}

export default Home