import { FlatList, ImageBackground} from 'react-native'
import React, { useContext } from 'react'

import { FavoriteContext } from '../../context/FavoriteContext/FavoriteContext'
import EventCard from '../../components/Card/EventCard'

import styles from './Favorite.style'


const Favorite = () => {

  const image = {uri: 'https://www1.chester.ac.uk/sites/default/files/styles/hero/public/Events%20Management%20festival%20image.jpg?itok=eJ3k-5R6'}

  const {favorite} = useContext(FavoriteContext)

  const renderFav = ({item}) => <EventCard event={item}/>
  return (
    <ImageBackground source={image} style={styles.image}>
      <FlatList
      data={favorite}
      renderItem={renderFav}
      />
    </ImageBackground>
  )
}

export default Favorite