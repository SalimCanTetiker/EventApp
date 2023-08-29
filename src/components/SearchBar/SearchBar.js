import { View, FlatList } from 'react-native'
import React from 'react'

import Input from '../Input/Input'


const SearchBar = () => {

  
  return (
    <View>
        <Input
        placeholder={'Search'} 
        IconName={'magnify-plus-outline'}
        />
        <FlatList
        />
    </View>
  )
}

export default SearchBar