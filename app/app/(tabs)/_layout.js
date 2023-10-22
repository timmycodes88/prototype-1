import { Octicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { Image, View, useColorScheme } from 'react-native'

export default () => {
  const isDarkMode = useColorScheme() === 'dark'
  //get the current user for the profile icon

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: isDarkMode ? '#fff' : '#000',
        tabBarStyle: {
          backgroundColor: isDarkMode ? '#000' : '#fff',
          borderTopColor: isDarkMode ? '#000' : '#fff',
        },
      }}
    >
      <Tabs.Screen
        name='feed'
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name='home' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='push'
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name='diff-added' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name='search' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='[username]'
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 32,
                height: 32,
                borderRadius: 50,
                borderWidth: focused ? 2 : undefined,
                borderColor: focused ? color : undefined,
              }}
            >
              <Image
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 50,
                }}
                source={{
                  uri: 'https://picsum.photos/200',
                  width: 24,
                  height: 24,
                }}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  )
}

/**
 * <FontAwesome name='plus-square-o' size={24} color='black' />
              <FontAwesome name='heart-o' size={24} color='black' />
              <FontAwesome name='user-o' size={24} color='black' />
 */
