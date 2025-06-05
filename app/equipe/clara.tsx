import { Stack, useRouter } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import AnimatedBackground from '../components/AnimatedBackground';
import styles from '../styles/equipe/pessoa';

export default function ClaraPage() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <AnimatedBackground />
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <Image
          source={require('../../assets/clara.jpg')}
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
        <Text style={styles.title}>Clara Soares</Text>

        <View style={styles.contente}>
          <Text style={styles.subtitle}>
           Desenvolvedora responsável pelo back-end
            Fez a integração com a API RAWG e com o banco de dados em nuvem usando o Back4App, assegurando que os dados fossem salvos e recuperados corretamente.
          </Text>
        </View>

        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}
