import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStack from './navigations/RootStack';
import Provider from './stores';

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  )
}

export default App;
