import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@rneui/themed';
import LoginScreen from '../screens/LoginScreen';

const Drawer = createDrawerNavigator();

export default function Navigator() {
  const { theme } = useTheme();
  return (
    <NavigationContainer theme={{
      colors: {
        background: theme.colors?.background,
        border: '',
        card: '',
        notification: '',
        primary: theme.colors?.primary,
        text: theme.colors.grey3,
      },
      dark: theme.mode === 'dark'
    }}>
      <Drawer.Navigator>
        <Drawer.Screen name='SIGGO' component={LoginScreen} navigationKey='login'/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}