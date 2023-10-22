import { useRouter } from 'expo-router'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native'

export default () => {
  const isDarkMode = useColorScheme() === 'dark'
  const router = useRouter()
  //* Check AuthState

  const wrapperStyle = isDarkMode
    ? { ...s.wrapper, ...s.darkBG }
    : { ...s.wrapper }

  const textStyles = isDarkMode ? { ...s.darkText } : {}

  return (
    <View style={wrapperStyle}>
      <TouchableOpacity onPress={() => router.push('/app/feed')}>
        <Text style={textStyles}>App</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/auth')}>
        <Text style={textStyles}>Auth</Text>
      </TouchableOpacity>
    </View>
  )
}

const s = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  darkBG: {
    backgroundColor: 'black',
  },
  darkText: {
    color: 'white',
  },
})
