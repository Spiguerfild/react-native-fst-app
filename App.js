import React from 'react';
import { Welcome } from './src/pages/Welcome';
import { useFonts, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter'
export default function App() {
  return (
    const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_600SemiBold
  })
    < Welcome />
  );
}

