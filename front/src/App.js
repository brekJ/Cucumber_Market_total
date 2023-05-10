import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './navigations/Navigation';
import { ImageProvider } from './contexts/ImageContext';
import { Store } from './redux/Store';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <Provider store={Store}>
      <ImageProvider>
        <StatusBar style="dark" />
        <Navigation />
      </ImageProvider>
    </Provider>
  );
};

export default App;
