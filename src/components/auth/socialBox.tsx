import { Icon } from '@rneui/themed';
import { View } from 'react-native';

export default function SocialBox() {
  return (
    <View style={{
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      marginVertical: 10,
      width: '100%',
    }}>
      <Icon name='facebook' size={60} type='material-community' color={'#3b5998'}/>
      <Icon name='web' size={60} type='material-community'/>
      <Icon name='youtube' size={60} type='material-community' color={'#c4302b'}/>
    </View>
  );
}