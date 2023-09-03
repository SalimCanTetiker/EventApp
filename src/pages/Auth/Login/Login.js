import { View, Text } from 'react-native'
import React from 'react'

import Buttonn from '../../../components/Buttonn/Buttonn'

const Login = ({navigation}) => {
  const goTab = () => {
    navigation.navigate('TabStack')
  }
  return (
    <View>
      <Text>Login</Text>
      <Buttonn title={'go'} onPress={goTab}/>
    </View>
  )
}

export default Login