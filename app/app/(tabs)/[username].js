import { View, Text, ScrollView, useColorScheme } from 'react-native'
import React from 'react'
import { Tabs, useGlobalSearchParams } from 'expo-router'
import { app } from '../../../styles/app'

export default () => {
  const { username } = useGlobalSearchParams()
  const isMe = !username
  const name = isMe ? 'Tim' : username

  const isDarkMode = useColorScheme() === 'dark'
  const wrapperStyle = isDarkMode
    ? { ...app.wrapper, ...app.darkBG }
    : { ...app.wrapper }
  const textStyles = isDarkMode ? { ...app.darkText } : {}

  return (
    <ScrollView style={wrapperStyle}>
      <Tabs.Screen options={{ title: `@${name}` }} />
      <View>
        <Text style={{ ...app.greeting, ...textStyles }}>Hi {name}</Text>
        <Text style={{ ...app.headline, ...textStyles }}>
          This will be your profile
        </Text>
      </View>
    </ScrollView>
  )
}
