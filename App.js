import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { ScrollView } from 'react-native';

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
      <TopBar />
      <ScrollView>
        {results.map((result) => (
          <CustomCard
            key={result.key}
            title={result.title}
            content={result.content}
          />
        ))}
      </ScrollView>
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
