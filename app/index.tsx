import { Link, Stack } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../app/styles/home.styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={styles.emoji}>🎮</Text>
      <Text style={styles.title}>App de Jogos</Text>
      <Text style={styles.subtitle}>Organize seus jogos favoritos!</Text>

      <Link href="/jogos" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver Jogos</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/equipe" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Equipe</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/sobre" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sobre o App</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
