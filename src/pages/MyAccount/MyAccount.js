import { ImageBackground, Text } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';

import Buttonn from '../../components/Buttonn/Buttonn'

import styles from './MyAccount.style'

const MyAccount = () => {

  const user = auth().currentUser.email.split('@')[0]

  const image = {uri: 'https://www1.chester.ac.uk/sites/default/files/styles/hero/public/Events%20Management%20festival%20image.jpg?itok=eJ3k-5R6'}

  return (
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>{user}</Text>
      <Buttonn title={'log out'} onPress={() => auth().signOut()}/>
    </ImageBackground>
  )
}

export default MyAccount