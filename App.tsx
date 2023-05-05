import {  ThemeProvider, createTheme } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './src/navigation/Navigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Navigator/>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
// https://github.com/react-native-elements/react-native-elements/tree/next/example
const theme = createTheme({
  lightColors: {
    // primary: '#b90'
  },
  darkColors: {
    // primary: '#ef3'
  },
  // spacing: {},
  mode: 'light',
  components: {
    Button: { radius: 5 },
    Icon: { type: 'material-community' },
  }
});