import { ScrollView, Text, useColorScheme } from 'react-native'
import { app } from '../../styles/app'

export default () => {
  const isDarkMode = useColorScheme() === 'dark'
  const wrapperStyle = isDarkMode
    ? { ...app.wrapper, ...app.darkBG }
    : { ...app.wrapper }
  const textStyles = isDarkMode ? { ...app.darkText } : {}
  return (
    <ScrollView style={wrapperStyle}>
      <Text style={textStyles}>notifications</Text>
    </ScrollView>
  )
}
