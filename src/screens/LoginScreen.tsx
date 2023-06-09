import { ScrollView, Dimensions, StyleSheet } from 'react-native';
import { Card, ThemeProvider } from '@rneui/themed';
import { LoginForm, SocialBox } from '../components';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function LoginScreen() {
  return (
    <ThemeProvider>
      <ScrollView 
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={styles.container}>
        <Card containerStyle={styles.imageContainer}>
          <Card.Image 
          resizeMode='contain' 
          style={{ width:350, height:100 }} 
          source={{ uri:'https://www.iuvade.com/wp-content/themes/iuvade/img/logo-iuvade.png' }}/>
        </Card>
        <LoginForm />
        <SocialBox />
      </ScrollView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: SCREEN_HEIGHT,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  imageContainer: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  }
});