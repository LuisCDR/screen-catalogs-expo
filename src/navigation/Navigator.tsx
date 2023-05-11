import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import { useTheme } from '@rneui/themed';
import LoginScreen from '../screens/LoginScreen';
import LoginScreenP from '../screens/LoginScreenP';

const Drawer = createDrawerNavigator();

export default function Navigator() {
  // const { theme } = useTheme();
  return (
    <NavigationContainer 
    theme={{
      colors: {
        background: 'white',
        // background: theme.colors?.background,
        border: 'red',
        card: '#333333',
        notification: '',
        primary: '#dddddd',
        text: 'white',
        // primary: theme.colors?.primary,
        // text: theme.colors.grey3,
      },
      dark: false
      // dark: theme.mode === 'dark'
    }}
    >
      <Drawer.Navigator>
        <Drawer.Screen name='LOGIN' component={LoginScreen} options={{title: 'React Native Elements'}}/>
        <Drawer.Screen name='LOGIN2' component={LoginScreenP} options={{title: 'React Native Paper'}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}