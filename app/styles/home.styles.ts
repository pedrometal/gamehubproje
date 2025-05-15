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
    fontWeight: 'bold',
    color: '#FFD369',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#D9D7E5',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1B1B2F',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 16,
    marginVertical: 8,
    borderColor: '#FFD369',
    borderWidth: 1,
    width: width * 0.4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFD369',
    fontWeight: 'bold',
    fontSize: 16,
    
  },
});

export default styles;
