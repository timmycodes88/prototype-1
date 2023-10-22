import { app } from '../../../styles/app'
import { Text, View, useColorScheme } from 'react-native'

export default () => {
  const isDarkMode = useColorScheme() === 'dark'
  const wrapperStyle = isDarkMode
    ? { ...app.wrapper, ...app.center, ...app.darkBG }
    : { ...app.wrapper, ...app.center }
  const textStyles = isDarkMode ? { ...app.darkText } : {}
  return (
    <View style={wrapperStyle}>
      <Text style={textStyles}>Push P</Text>
    </View>
  )
}
