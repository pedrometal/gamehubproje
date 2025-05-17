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
          Este aplicativo permite que você gerencie seus jogos favoritos de forma simples e intuitiva.
        </Text>

        <View style={{ marginBottom: 40 }}>
          <Text style={styles.listItem}>• Adicione jogos com nome, gênero e plataforma</Text>
          <Text style={styles.listItem}>• Edite ou remova jogos</Text>
          <Text style={styles.listItem}>• Visualize os jogos cadastrados</Text>
          <Text style={styles.listItem}>• Sincronize com o banco de dados</Text>
        </View>

        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}
