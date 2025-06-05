import { Stack, useRouter } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import AnimatedBackground from '../components/AnimatedBackground';
import styles from '../styles/equipe/pessoa';

export default function MarcoPage() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <AnimatedBackground />
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <Image
          source={require('../../assets/marco.jpg')}
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
        <Text style={styles.title}>Marco Antônio</Text>

        <View style={styles.contente}>
          <Text style={styles.subtitle}>
           Desenvolvedor responsável pelo front-end
            Criou as telas do aplicativo, cuidou da navegação entre as páginas e da estrutura visual utilizando React Native com Expo Router.    </Text>
        </View>

        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}
