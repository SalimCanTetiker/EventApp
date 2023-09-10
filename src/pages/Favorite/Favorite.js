import {FlatList, ImageBackground, Pressable} from 'react-native'
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { FavoriteContext } from '../../context/FavoriteContext/FavoriteContext'
import EventCard from '../../components/Card/EventCard'
import Buttonn from '../../components/Buttonn/Buttonn'

import styles from './Favorite.style'


const Favorite = () => {

  const image = {uri: 'https://www1.chester.ac.uk/sites/default/files/styles/hero/public/Events%20Management%20festival%20image.jpg?itok=eJ3k-5R6'}

  const {favorite, setFavorite} = useContext(FavoriteContext)

  const deleteFav = (item) => {
    var filteredFav = favorite.filter(q => q.id != item.id)
    setFavorite([...filteredFav])
  }

  const renderFav = ({item}) => {
    return (
      <>
      <Pressable onPress={() => deleteFav(item)}>
      <Icon name='delete-circle' size={48}/>
      </Pressable>
      <EventCard event={item}/>
      </>
    )
  }  

  return (
    <ImageBackground source={image} style={styles.image}>
      <FlatList
      data={favorite}
      renderItem={renderFav}
      />
      <Buttonn title={'Delete'} onPress={() => setFavorite([])}/>
    </ImageBackground>
  )
}

export default Favorite