import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import AnimatedBackground from './components/AnimatedBackground';
import Rating from './components/Rating';
import Parse from './config/parse';
import rawgService from './services/rawg';
import styles from './styles/buscar.styles';

export default function Buscar() {
  const [termo, setTermo] = useState('');
  const [jogos, setJogos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [avaliacoes, setAvaliacoes] = useState<{[key: string]: number}>({});
  const router = useRouter();

  async function buscarAvaliacoes(jogosIds: string[]) {
    try {
      const query = new Parse.Query('GameRating');
      query.containedIn('gameId', jogosIds);
      const results = await query.find();

      const mediaAvaliacoes: {[key: string]: { soma: number; quantidade: number }} = {};
      results.forEach(avaliacao => {
        const gameId = avaliacao.get('gameId');
        if (!mediaAvaliacoes[gameId]) {
          mediaAvaliacoes[gameId] = {
            soma: 0,
            quantidade: 0
          };
        }
        mediaAvaliacoes[gameId].soma += avaliacao.get('rating');
        mediaAvaliacoes[gameId].quantidade += 1;
      });

      const mediasFinais: {[key: string]: number} = {};
      Object.keys(mediaAvaliacoes).forEach(gameId => {
        mediasFinais[gameId] = Math.round(
          mediaAvaliacoes[gameId].soma / mediaAvaliacoes[gameId].quantidade
        );
      });

      setAvaliacoes(mediasFinais);
    } catch (error) {
      console.error('Erro ao buscar avaliações:', error);
    }
  }

  async function buscarJogos() {
    if (!termo.trim()) return;
    
    setLoading(true);
    try {
      const response = await axios.get('https://api.rawg.io/api/games', {
        params: {
          key: rawgService.API_KEY,
          search: termo,
          page_size: 5,
        },
      });
      setJogos(response.data.results);
      
      // Buscar avaliações para os jogos encontrados
      const jogosIds = response.data.results.map((jogo: any) => jogo.id.toString());
      await buscarAvaliacoes(jogosIds);
    } catch (err) {
      console.error('Erro ao buscar jogos:', err);
    } finally {
      setLoading(false);
    }
  }

  function navegarParaDetalhes(jogo: any) {
    router.push(`/jogo/${jogo.id}`);
  }

  return (
    <View style={{ flex: 1 }}>
      <AnimatedBackground />
      <Stack.Screen 
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#1B1B2F',
          },
          headerTintColor: '#FFD369',
          headerTitle: 'Buscar Jogos',
          headerLeft: () => (
            <Pressable 
              onPress={() => router.back()}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                marginLeft: 16
              })}
            >
              <Ionicons name="arrow-back" size={24} color="#FFD369" />
            </Pressable>
          ),
        }} 
      />

      <View style={styles.container}>
        <Text style={[styles.title, { marginTop: 60 }]}>Buscar Jogos</Text>

        <TextInput
          placeholder="Digite o nome do jogo"
          value={termo}
          onChangeText={setTermo}
          placeholderTextColor="#FFD369"
          style={styles.searchInput}
          onSubmitEditing={buscarJogos}
        />

        <Pressable style={styles.searchButton} onPress={buscarJogos}>
          <Text style={styles.buttonText}>
            {loading ? 'Buscando...' : 'Buscar'}
          </Text>
        </Pressable>

        {loading ? (
          <ActivityIndicator size="large" color="#FFD369" style={{ marginTop: 20 }} />
        ) : (
          <ScrollView style={styles.resultados}>
            {jogos.map((jogo) => (
              <Pressable
                key={jogo.id}
                onPress={() => navegarParaDetalhes(jogo)}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.7 : 1
                })}
              >
                <View style={styles.jogo}>
                  <Text style={styles.titulo}>{jogo.name}</Text>
                  {jogo.background_image && (
                    <Image
                      source={{ uri: jogo.background_image }}
                      style={styles.imagem}
                    />
                  )}
                  <View style={styles.jogoInfo}>
                    <Rating 
                      rating={avaliacoes[jogo.id.toString()] || 0} 
                      setRating={() => {}} 
                      disabled 
                    />
                    <Text style={styles.lancamento}>
                      {new Date(jogo.released).getFullYear()}
                    </Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        )}

        <Pressable style={[styles.searchButton, { marginTop: 20 }]} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}
