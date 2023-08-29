import { View, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Input.style'

const Input = ({value, onChangeText, placeholder, IconName}) => {
  return (
    <View style={styles.container}>
        <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        />
        <Icon name={IconName} size={45} />
    </View>
  )
}

export default Input