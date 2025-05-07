import { ActivityIndicator } from 'react-native';
import { Groups } from '@screens/Groups';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { styles } from 'styleApp';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (   
    <>
      {fontsLoaded ? <Groups /> : <ActivityIndicator style={styles.container} size="large"/>}    
    </>
  );
}
