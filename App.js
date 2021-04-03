import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import PushNotification from 'react-native-push-notification'

import theme from "./CustomProperties/Themes";
import MainScreen from "./Screens/MainScreen";
import TopBar from "./Components/TopBar";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <TopBar />
      <MainScreen />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
