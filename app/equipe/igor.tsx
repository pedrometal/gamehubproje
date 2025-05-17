import { Stack, useRouter } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import AnimatedBackground from '../components/AnimatedBackground';
import styles from '../styles/equipe/pessoa';

export default function IgorPage() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <AnimatedBackground />
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <Image
          source={require('../../assets/igor.png')}
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
        <Text style={styles.title}>Igor Carvalheira</Text>

        <View style={styles.contente}>
          <Text style={styles.subtitle}>
            Desenvolvedor responsável por grande parte do front-end do aplicativo, com foco na construção da interface usando React Native, Expo Router e NativeWind. Participei ativamente da estruturação das telas principais como Home, Equipe e Sobre, além de contribuir para a padronização dos estilos visuais do app.
          </Text>
        </View>

        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}