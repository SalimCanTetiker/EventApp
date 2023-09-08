import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

import styles from './EventCard.style'

const EventCard = ({event, onPress}) => {
  return (
    <Pressable onPress={onPress}>
    <View style={styles.container}>
      <Text style={styles.text}>{event.name}</Text>
      <Image style={styles.image} source={{uri: event.image}}/>
      <Text style={styles.text}>{event.category}</Text>
    </View>
    </Pressable>
  )
}

export default EventCard