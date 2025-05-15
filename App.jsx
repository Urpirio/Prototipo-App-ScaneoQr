import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './Screens/HomeScreen.jsx';
import { AppStyle } from './Style/AppStyle.js';

export default function App() {
  return (
    <SafeAreaProvider style={AppStyle.Top}>
      <HomeScreen/>
      <StatusBar style='auto'/>
    </SafeAreaProvider>
  );
}


