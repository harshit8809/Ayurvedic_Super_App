import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SCREENS } from '../../constant/screens'

const RecordsScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>RecordsScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate(SCREENS.BOOKING)}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RecordsScreen

const styles = StyleSheet.create({})