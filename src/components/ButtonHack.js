import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-elements'
import Toast from 'react-native-toast-message';

export default function ButtonHack(props) {
  const { style, onPress, text } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <View>
      <Button title={text} buttonStyle={style} onPress={onPress}/>
    </View>
  )
}