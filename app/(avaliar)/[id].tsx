import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import AnimatedBackground from '../components/AnimatedBackground';
import Rating from '../components/Rating';
import Parse from '../config/parse';
import { useAuth } from '../contexts/auth';

export default function AvaliarJogo() {
  const { id, nome, imagem } = useLocalSearchParams();
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  
  const [rating, setRating] = useState(0);
  const [comentario, setComentario] = useState('');
  const [loading, setLoading] = useState(false);
  const [avaliacoes, setAvaliacoes] = useState<any[]>([]);
  const [mediaAvaliacoes, setMediaAvaliacoes] = useState(0);
  const [loadingAvaliacoes, setLoadingAvaliacoes] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    carregarAvaliacoes();
  }, []);

  async function carregarAvaliacoes() {
    setLoadingAvaliacoes(true);
    setErro('');
    try {
      const query = new Parse.Query('GameRating');
      query.equalTo('gameId', id.toString());
      query.include('user');
      query.descending('createdAt');
      
      const results = await query.find();
      setAvaliacoes(results);

      // Calcula a média
      if (results.length > 0) {
        const soma = results.reduce((acc, curr) => acc + curr.get('rating'), 0);
        setMediaAvaliacoes(soma / results.length);
      }
    } catch (error: any) {
      console.error('Erro ao carregar avaliações:', error);
      setErro('Não foi possível carregar as avaliações. Tente novamente mais tarde.');
    } finally {
      setLoadingAvaliacoes(false);
    }
  }

  async function enviarAvaliacao() {
    if (!isAuthenticated) {
      alert('Você precisa estar logado para avaliar');
      router.push('/(auth)/login');
      return;
    }

    if (rating === 0) {
      alert('Por favor, selecione uma avaliação');
      return;
    }

    setLoading(true);
    setErro('');
    try {
      const GameRating = Parse.Object.extend('GameRating');
      const avaliacao = new GameRating();

      avaliacao.set('gameId', id.toString());
      avaliacao.set('gameName', nome);
      avaliacao.set('rating', rating);
      avaliacao.set('comment', comentario.trim());
      avaliacao.set('user', user);

      await avaliacao.save();
      
      // Recarrega as avaliações
      await carregarAvaliacoes();
      
      // Limpa o formulário
      setRating(0);
      setComentario('');
      
      alert('Avaliação enviada com sucesso!');
    } catch (error: any) {
      setErro('Erro ao enviar avaliação: ' + error.message);
      alert('Erro ao enviar avaliação. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <AnimatedBackground />
      
      <Stack.Screen 
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#1B1B2F',
          },
          headerTintColor: '#FFD369',
          headerTitle: 'Detalhes do Jogo',
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

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.titulo}>{nome}</Text>
        
        {imagem && (
          <Image 
            source={{ uri: imagem as string }} 
            style={styles.imagem} 
            resizeMode="cover"
          />
        )}

        <View style={styles.avaliacaoContainer}>
          <Text style={styles.subtitulo}>Avaliação Média</Text>
          {loadingAvaliacoes ? (
            <ActivityIndicator color="#FFD369" />
          ) : erro ? (
            <Text style={styles.erro}>{erro}</Text>
          ) : (
            <View style={styles.mediaContainer}>
              <Rating rating={Math.round(mediaAvaliacoes)} setRating={() => {}} disabled />
              <Text style={styles.mediaText}>
                {mediaAvaliacoes.toFixed(1)} ({avaliacoes.length} avaliações)
              </Text>
            </View>
          )}
        </View>

        {isAuthenticated ? (
          <View style={styles.avaliacaoContainer}>
            <Text style={styles.subtitulo}>Sua Avaliação</Text>
            <Rating rating={rating} setRating={setRating} />
            
            <TextInput
              placeholder="Deixe seu comentário (opcional)"
              value={comentario}
              onChangeText={setComentario}
              style={styles.input}
              placeholderTextColor="#FFD369"
              multiline
              numberOfLines={4}
              maxLength={500}
              returnKeyType="done"
              blurOnSubmit={true}
              onSubmitEditing={() => {
                if (rating > 0) {
                  enviarAvaliacao();
                }
              }}
            />

            <Text style={styles.caracteresRestantes}>
              {500 - comentario.length} caracteres restantes
            </Text>

            <Pressable 
              style={[
                styles.botaoAvaliar,
                !rating && styles.botaoDesabilitado
              ]}
              onPress={enviarAvaliacao}
              disabled={loading || !rating}
            >
              {loading ? (
                <ActivityIndicator color="#1B1B2F" />
              ) : (
                <Text style={styles.botaoTexto}>
                  {rating ? 'Enviar Avaliação' : 'Selecione uma nota'}
                </Text>
              )}
            </Pressable>
          </View>
        ) : (
          <Pressable 
            style={styles.botaoLogin}
            onPress={() => router.push('/(auth)/login')}
          >
            <Text style={styles.botaoTexto}>Faça login para avaliar</Text>
          </Pressable>
        )}

        <View style={styles.avaliacoesContainer}>
          <Text style={styles.subtitulo}>Últimas Avaliações</Text>
          {avaliacoes.length > 0 ? (
            avaliacoes.map((avaliacao, index) => (
              <View key={index} style={styles.avaliacaoItem}>
                <View style={styles.avaliacaoHeader}>
                  <View style={styles.usuarioInfo}>
                    <Ionicons 
                      name={avaliacao.get('user')?.get('avatar') || 'person-circle'} 
                      size={30} 
                      color="#FFD369" 
                    />
                    <Text style={styles.nomeUsuario}>
                      {avaliacao.get('user')?.get('name') || 'Usuário'}
                    </Text>
                  </View>
                  <Rating 
                    rating={avaliacao.get('rating')} 
                    setRating={() => {}} 
                    disabled 
                  />
                </View>
                {avaliacao.get('comment') && (
                  <Text style={styles.comentario}>
                    {avaliacao.get('comment')}
                  </Text>
                )}
              </View>
            ))
          ) : !loadingAvaliacoes && !erro && (
            <Text style={styles.semAvaliacoes}>
              Nenhuma avaliação ainda. Seja o primeiro a avaliar!
            </Text>
          )}
        </View>

      </ScrollView>

      <View style={styles.botaoVoltarContainer}>
        <Pressable 
          style={styles.botaoVoltar}
          onPress={() => router.back()}
        >
          <Text style={styles.botaoTexto}>Voltar para Busca</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#1B1B2F',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingTop: 20,
    paddingBottom: 100,
  },
  titulo: { 
    fontSize: 24,
    color: '#FFD369',
    fontFamily: 'PressStart2P_400Regular',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#893101',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0,
  },
  subtitulo: {
    fontSize: 18,
    color: '#FFD369',
    fontFamily: 'PressStart2P_400Regular',
    marginBottom: 10,
    textAlign: 'center',
  },
  imagem: { 
    width: '100%',
    height: 250,
    borderRadius: 10,
    borderColor: '#FFD369',
    borderWidth: 4,
    marginBottom: 20,
  },
  avaliacaoContainer: {
    backgroundColor: 'rgba(27, 27, 47, 0.8)',
    padding: 20,
    borderRadius: 10,
    borderColor: '#FFD369',
    borderWidth: 2,
    marginTop: 20,
  },
  mediaContainer: {
    alignItems: 'center',
  },
  mediaText: {
    color: '#FFD369',
    fontSize: 16,
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFD369',
    borderRadius: 8,
    padding: 12,
    color: '#FFD369',
    marginTop: 10,
    minHeight: 100,
    maxHeight: 200,
    textAlignVertical: 'top',
    fontSize: 16,
  },
  botaoAvaliar: {
    backgroundColor: '#FFD369',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  botaoLogin: {
    backgroundColor: '#FFD369',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  botaoTexto: {
    color: '#1B1B2F',
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 14,
  },
  avaliacoesContainer: {
    marginTop: 20,
  },
  avaliacaoItem: {
    backgroundColor: 'rgba(27, 27, 47, 0.8)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: '#FFD369',
    borderWidth: 1,
  },
  avaliacaoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  usuarioInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  nomeUsuario: {
    color: '#FFD369',
    fontSize: 14,
    fontWeight: 'bold',
  },
  comentario: {
    color: '#FFD369',
    fontSize: 14,
    marginTop: 5,
  },
  erro: {
    color: '#FF6B6B',
    textAlign: 'center',
    marginTop: 10,
  },
  semAvaliacoes: {
    color: '#FFD369',
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
  },
  caracteresRestantes: {
    color: '#FFD369',
    fontSize: 12,
    textAlign: 'right',
    marginTop: 5,
    fontStyle: 'italic',
  },
  botaoDesabilitado: {
    opacity: 0.5,
  },
  botaoVoltarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1B1B2F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#FFD369',
  },
  botaoVoltar: {
    backgroundColor: '#FFD369',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
}); 