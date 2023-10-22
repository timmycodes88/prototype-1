import { ScrollView, Text, useColorScheme } from 'react-native'
import React from 'react'
import { app } from '../../../styles/app'

export default () => {
  const isDarkMode = useColorScheme() === 'dark'
  const wrapperStyle = isDarkMode
    ? { ...app.wrapper, ...app.darkBG }
    : { ...app.wrapper }
  const textStyles = isDarkMode ? { ...app.darkText } : {}
  return (
    <ScrollView style={wrapperStyle}>
      <Text style={textStyles}>Feed</Text>
    </ScrollView>
  )
}
