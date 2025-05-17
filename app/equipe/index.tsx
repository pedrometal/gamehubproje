import { Stack, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import AnimatedBackground from '../components/AnimatedBackground';
import styles from '../styles/equipe/index';

export default function EquipeIndex() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <AnimatedBackground />
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.title}>Equipe de Desenvolvimento</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/equipe/clara')}
        >
          <Text style={styles.buttonText}>Clara Soares</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/equipe/igor')}
        >
          <Text style={styles.buttonText}>Igor Carvalheira</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/equipe/lucas')}
        >
          <Text style={styles.buttonText}>Lucas Gurgel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/equipe/marco')}
        >
          <Text style={styles.buttonText}>Marco Antônio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/equipe/pedro')}
        >
          <Text style={styles.buttonText}>Pedro Filipe</Text>
        </TouchableOpacity>

        {/* Botão de voltar */}
        <TouchableOpacity
          style={[styles.button, {marginTop: 40 }]}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}