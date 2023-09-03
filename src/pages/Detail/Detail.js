import { View, Text, Image, Pressable} from 'react-native'
import React, {useContext} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { FavoriteContext } from '../../context/FavoriteContext/FavoriteContext';

import styles from './Detail.style'


const Detail = ({route, navigation}) => {

  const {favorite, setFavorite} = useContext(FavoriteContext)

  const {id, name, image, date, time, location} = route.params

  const addToFav = (id) => {
    setFavorite([...favorite, id])
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
      <Icon name='arrow-left' size={40} />
      </Pressable>
      <Text>{name}</Text>
      <Image style={styles.image} source={{uri: image}}/>
      <Text>{date} - {time}</Text>
      <Icon name='map-marker-question' size={40}/>
      <Text>{location}</Text>
      <Pressable onPress={() => addToFav(id)}>
      <Icon name='heart-outline' size={40}/>
      </Pressable>
    </View>
  )
}

export default Detail