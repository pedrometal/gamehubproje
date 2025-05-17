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
    fontSize: 22,
    fontFamily: 'PressStart2P_400Regular',
    color: '#FFD369',
    textAlign: 'center',
    marginBottom: 32,
    textShadowColor: '#893101',
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 0,
  },
  button: {
    backgroundColor: '#1B1B2F',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 16,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#FFD369',
    width: width * 0.7,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFD369',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;