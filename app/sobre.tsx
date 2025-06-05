import { Stack, useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import AnimatedBackground from '../app/components/AnimatedBackground';
import styles from './styles/home.styles';

export default function Sobre() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <AnimatedBackground />
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <Text style={styles.title}>Sobre o App</Text>
        <Text style={styles.description}>
          Este aplicativo permite que você descubra, avalie e gerencie seus jogos favoritos de forma simples e intuitiva.
        </Text>

        <View style={{ marginBottom: 40 }}>
          <Text style={styles.listItem}>•  Exibição de imagens e informações detalhadas dos jogos</Text>
          <Text style={styles.listItem}>• Avalie jogos com estrelas e comentários</Text>
          <Text style={styles.listItem}>• Veja avaliações de outros usuários</Text>
          <Text style={styles.listItem}>• Gerencie suas avaliações</Text>
        </View>

        <Pressable 
          style={[styles.button, { marginBottom: 10 }]} 
          onPress={() => router.push('/equipe')}
        >
          <Text style={styles.buttonText}>Conheça a Equipe</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}
