import { View, FlatList, ImageBackground} from 'react-native'
import React, {useState, useEffect}from 'react'
import axios from 'axios'

import SearchBar from '../../components/SearchBar/SearchBar'
import EventCard from '../../components/Card/EventCard'

import styles from './Home.style'


const Home = ({navigation}) => {

  const image = {uri: 'https://www1.chester.ac.uk/sites/default/files/styles/hero/public/Events%20Management%20festival%20image.jpg?itok=eJ3k-5R6'}

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

const selectEvent = (item) => {
  navigation.navigate('Detail', {item})
}

const renderEvent = ({item}) => <EventCard event={item} onPress={() => selectEvent(item)}/>

  return (
    <ImageBackground source={image} style={styles.image}>
      <SearchBar/>
      { data.length ? (
        <FlatList data={data} renderItem={renderEvent}/>
      ) : null
      }
      </ImageBackground>
  )
}

export default Home