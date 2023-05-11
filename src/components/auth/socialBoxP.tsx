import { IconButton } from 'react-native-paper';
import { View } from 'react-native';

export default function SocialBox() {
  return (
    <View style={{
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      marginVertical: 10,
      width: '100%',
    }}>
      <IconButton icon='facebook' size={60} iconColor={'#3b5998'}/>
      <IconButton icon='web' size={60}/>
      <IconButton icon='youtube' size={60} iconColor={'#c4302b'}/>
    </View>
  );
}