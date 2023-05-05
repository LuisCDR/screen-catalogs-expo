import { Image, ScrollView, View, Dimensions, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';
import { LoginForm } from '../components';
import SocialBox from '../components/auth/socialBox';
// import LoginForm from '../components/auth/loginForm';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function LoginScreen() {
  return (
    <ScrollView 
    keyboardShouldPersistTaps='handled'
    contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ 
          uri:'https://www.iuvade.com/wp-content/themes/iuvade/img/logo-iuvade.png',
          height: 100,
          width: 350,
        }}/>
      </View>
      <LoginForm />
      <SocialBox />
    </ScrollView>
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