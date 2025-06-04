import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 32,
    fontFamily: 'PressStart2P_400Regular',
    color: '#FFD369',
    marginBottom: 40,
    textAlign: 'center',
    textShadowColor: '#893101',
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 0,
  },
  label: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#FFD369',
    fontSize: 12,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
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
  errorText: {
    color: '#FF6B6B',
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 10,
    marginTop: 8,
    textAlign: 'center',
  },
  registerText: {
    color: '#FFD369',
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 10,
    marginTop: 24,
    textAlign: 'center',
    textDecorationLine: 'underline',
  }
});

export default styles; 