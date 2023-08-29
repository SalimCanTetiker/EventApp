import { Pressable, Text } from 'react-native'
import React from 'react'

import styles from './Buttonn.style'

const Buttonn = ({title, onPress}) => {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
   )
}

export default Buttonn