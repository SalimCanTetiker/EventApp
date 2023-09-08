import { View, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Input from '../Input/Input'


const SearchBar = () => {
  const [data, setData] = useState([])
  const [event, setEvent] = useState("")

  const getData = async () => {
    try {
      const response = await axios.get('http://192.168.2.233:3000/event?q=${event}')
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData();
  },[])
  const renderEvent = ({item}) => {
    if(event === ''){
      return
    }if(item.name.toLowerCase().includes(event.toLowerCase())){
      return <Text>{item.name}</Text>
    }

  }

  
  return (
    <View>
        <Input
        placeholder={'Search'} 
        IconName={'magnify-plus-outline'}
        onChangeText={text => setEvent(text)}
        value={event}
        />
      { 
      data.length ? (
        <FlatList data={data} renderItem={renderEvent}/>
      ) : null
      }
    </View>
  )
}

export default SearchBar