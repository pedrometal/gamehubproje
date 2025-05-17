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
    fontSize: 24,
    fontFamily: 'PressStart2P_400Regular',
    color: '#FFD369',
    marginBottom: 24,
    textAlign: 'center',
    textShadowColor: '#893101',
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 0,
  },

  contente: {
    alignSelf: 'stretch',
    marginBottom: 40,
  },

  subtitle: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 10,
    color: '#FFFFFF',
    lineHeight: 20,
    marginBottom: 16,
    textAlign: 'left',
  },

  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#FFD369',
  },

  button: {
    backgroundColor: '#1B1B2F',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 0,
    marginVertical: 8,
    borderColor: '#FFD369',
    borderWidth: 4,
    width: width * 0.7,
    alignItems: 'center',
    shadowColor: '893101',
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
});

export default styles;