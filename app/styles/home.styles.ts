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
  content: {
    alignSelf: 'stretch',
    marginBottom: 40,
  },
  subtitle: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 10,
    color: '#FFFFFF',
    marginBottom: 16,
    textAlign: 'left',
  },
  
  listItem: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'left',
    paddingLeft: 8,
    marginBottom: 8,
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
