import { Stack } from 'expo-router';

export default function JogoLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1B1B2F',
        },
        headerTintColor: '#FFD369',
        headerTitleStyle: {
          fontFamily: 'PressStart2P_400Regular',
          fontSize: 14,
        },
      }}
    />
  );
} 