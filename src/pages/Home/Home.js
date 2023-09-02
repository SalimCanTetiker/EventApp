import { View, Text, Image, FlatList} from 'react-native'
import React, {useState, useEffect}from 'react'
import axios from 'axios'

import SearchBar from '../../components/SearchBar/SearchBar'

import styles from './Home.style'


const Home = () => {
const [data, setData] = useState([])

const getData = async () => {
  try {
    const response = await axios.get('http://192.168.2.233:3000/event')
    setData(response.data)
  } catch (error) {
    console.log(error)
  }
}
useEffect(() => {
  getData()
}, [])

const renderEvent = ({item}) => {
  return ( 
  <View style={styles.body_container}>
    <Text style={styles.text}>{item.name}</Text>
    <Image style={styles.image} source={{uri: item.image}}/>
    <Text>{item.category}</Text>
  </View>
  )
}

  return (
    <View style={styles.container}>
      <SearchBar/>
      { data.length ? (
        <FlatList data={data} renderItem={renderEvent}/>
      ) : null
      }
    </View>
  )
}

export default Home