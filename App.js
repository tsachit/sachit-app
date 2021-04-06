import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, ScrollView, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import theme from './CustomProperties/Themes';
import TopBar from './Components/TopBar';
import CustomCard from './Components/Card';

import getResults from './actions/resultsAction';

export default function App() {
  const [results, setResults] = useState([]);

  const handleRefresh = () => {
    setResults([]);
    getResults(setResults);
  };

  useEffect(() => {
    // only on first load
    getResults(setResults);
    const interval = setInterval(() => {
      handleRefresh();
    }, 60 * 60 * 1000); // update in one hour
    return () => {
      clearInterval(interval);
    };
  }, []);

  const Loading = () => (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );

  const Body = () => (
    <ScrollView>
      {results.map((result) => (
        <CustomCard
          key={result.key}
          title={result.title}
          content={result.content}
        />
      ))}
    </ScrollView>
  );

  return (
    <PaperProvider theme={theme}>
      <View style = {styles.container}>
        <TopBar handleRefresh={handleRefresh}/>
        { results.length ? <Body/> : <Loading /> }
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  loading: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
