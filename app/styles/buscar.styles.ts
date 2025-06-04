import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: 'PressStart2P_400Regular',
    color: '#FFD369',
    marginBottom: 40,
    textAlign: 'center',
    textShadowColor: '#893101',
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 0,
  },
  searchInput: {
    backgroundColor: '#1B1B2F',
    width: width * 0.85,
    height: 50,
    borderRadius: 0,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderColor: '#FFD369',
    borderWidth: 4,
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 12,
    color: '#FFFFFF',
  },
  searchButton: {
    backgroundColor: '#1B1B2F',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 0,
    marginVertical: 8,
    borderColor: '#FFD369',
    borderWidth: 4,
    width: width * 0.7,
    alignItems: 'center',
    shadowColor: '#893101',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  buttonText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#FFD369',
    fontWeight: 'bold',
    fontSize: 12,
  },
  resultados: {
    width: '100%',
    marginTop: 20,
  },
  jogo: {
    backgroundColor: '#1B1B2F',
    padding: 16,
    marginBottom: 16,
    borderColor: '#FFD369',
    borderWidth: 4,
    borderRadius: 0,
  },
  titulo: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#FFD369',
    fontSize: 14,
    marginBottom: 12,
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  jogoInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#FFD369',
    fontSize: 12,
  },
  lancamento: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#FFD369',
    fontSize: 12,
  },
});

export default styles; 