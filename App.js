import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AmountScreen from './src/view/AmountScreen';
import MainStack from './src/navigation/MainStack';
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <MainStack />
      <Toast />
    </>
  );
}
