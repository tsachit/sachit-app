import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import theme from './CustomProperties/Themes';
import TopBar from './Components/TopBar';
import CustomCard from './Components/Card';

import getResults from './actions/resultsAction';

export default function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // only on first load
    getResults(setResults);
    const interval = setInterval(() => {
      getResults(setResults);
    }, 5 * 60 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <PaperProvider theme={theme}>
      <View style = {styles.container}>
        <TopBar handleRefresh={() => getResults(setResults)}/>
        <ScrollView>
          {results.map((result) => (
            <CustomCard
              key={result.key}
              title={result.title}
              content={result.content}
            />
          ))}
        </ScrollView>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
