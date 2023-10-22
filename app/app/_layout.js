import { Entypo, Feather } from '@expo/vector-icons'
import { Link, Stack } from 'expo-router'
import { StyleSheet, Text, View, useColorScheme } from 'react-native'

export default () => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode ? '#000' : '#fff',
        },
        headerTintColor: isDarkMode ? '#fff' : '#000',
        headerLeft: () => {
          return (
            <Link href='/app/feed'>
              <Text
                style={{ fontSize: 32, color: isDarkMode ? '#fff' : '#000' }}
              >
                X2
              </Text>
            </Link>
          )
        },
        title: null,
        headerRight: ({ tintColor }) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
              }}
            >
              <Link href='/app/activity'>
                <Feather name='bell' size={21} color={tintColor} />
              </Link>
              <Link href='/app/messages'>
                <Feather name='message-square' size={21} color={tintColor} />
              </Link>
            </View>
          )
        },
      }}
    >
      <Stack.Screen
        name='activity'
        options={{
          presentation: 'modal',
          title: 'Activity',
          headerRight: null,
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name='messages'
        options={{
          title: 'Messages',
          headerRight: ({ tintColor }) => (
            <Entypo name='new-message' size={20} color={tintColor} />
          ),
          headerLeft: null,
        }}
      />
    </Stack>
  )
}
