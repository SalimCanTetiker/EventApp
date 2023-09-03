import { View, FlatList} from 'react-native'
import React, {useState, useEffect}from 'react'
import axios from 'axios'

import SearchBar from '../../components/SearchBar/SearchBar'
import EventCard from '../../components/Card/EventCard'

import styles from './Home.style'


const Home = ({navigation}) => {
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

const selectEvent = (id, name, image, date, time, location) => {
  navigation.navigate('Detail', {id, name, image, date, time,location})
}

const renderEvent = ({item}) => <EventCard event={item} onPress={() => selectEvent(item.id, item.name, item.image, item.date, item.time, item.location)}/>

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