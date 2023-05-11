import { ScrollView, Dimensions, StyleSheet } from 'react-native';
import { Provider, Card } from 'react-native-paper';
import { LoginFormP, SocialBoxP } from '../components';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function LoginScreenP() {
  return (
    <Provider>
      <ScrollView 
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={styles.container}>
        <Card contentStyle={styles.imageContainer}>
          <Card.Cover 
          resizeMode='contain' 
          style={{ width:350, height: 100 }} 
          source={{ uri: 'https://www.iuvade.com/wp-content/themes/iuvade/img/logo-iuvade.png'}}/>
        </Card>
        <LoginFormP />
        <SocialBoxP />
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  imageContainer: {
    height: 150,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  }
});