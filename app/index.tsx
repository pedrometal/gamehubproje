import { LinearGradient } from 'expo-linear-gradient';
import { Stack, useRouter } from 'expo-router';
import { Pressable, Text } from 'react-native';
import styles from '../app/styles/home.styles';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#0d0c1d', '#1f1b3a', '#2e2b5f']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={styles.title}>🎮 App de Jogos</Text>
      <Text style={styles.subtitle}>Organize seus jogos favoritos!</Text>

      <Pressable style={styles.button} onPress={() => router.push('/jogos')}>
        <Text style={styles.buttonText}>Ver Jogos</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push('/equipe')}>
        <Text style={styles.buttonText}>Equipe</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push('/sobre')}>
        <Text style={styles.buttonText}>Sobre o App</Text>
      </Pressable>
    </LinearGradient>
  );
}
