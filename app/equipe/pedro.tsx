import { Stack, useRouter } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import AnimatedBackground from '../components/AnimatedBackground';
import styles from '../styles/equipe/pessoa';

export default function PedroPage() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <AnimatedBackground />
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <Image
          source={require('../../assets/pedro.jpg')}
          style={{
            width: 160,
            height: 160,
            borderRadius: 80,
            marginBottom: 24,
            borderWidth: 2,
            borderColor: '#FFD369',
          }}
          resizeMode="cover"
        />
        <Text style={styles.title}>Pedro Filipe</Text>

        <View style={styles.contente}>
          <Text style={styles.subtitle}>
          Responsável pelo desenvolvimento do backend e implementação de novas funcionalidades
           no aplicativo de jogos. Utilizei o Back4App como plataforma de backend e integrei 
           com a API RAWG para dados dos jogos
          </Text>
        </View>

        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}
