import { StatusBar } from 'react-native';
import { Groups } from '@screens/Groups';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'


import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (   
    <>
      <StatusBar 
        barStyle={'light-content'}
        backgroundColor={"transparent"}
        translucent
      />
      {fontsLoaded ? <Groups /> : <Loading />}     
    </>
  );
}
