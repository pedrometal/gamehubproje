import { PressStart2P_400Regular, useFonts } from '@expo-google-fonts/press-start-2p';
import { Slot } from 'expo-router';
import { useEffect, useState } from 'react';
import Parse from './config/parse';
import AuthProvider from './contexts/auth';
import './globals.css';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        // Verifica se há um usuário logado
        await Parse.User.currentAsync();
      } catch (error) {
        console.log('Nenhum usuário logado:', error);
      } finally {
        setIsLoading(false);
      }
    };

    init();
  }, []);

  if (!fontsLoaded || isLoading) return null;

  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
