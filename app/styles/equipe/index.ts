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