import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: '#FFD369',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#D9D7E5',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#222831',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 12,
    width: '30%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFD369',
  },
  buttonText: {
    color: '#FFD369',
    fontSize: 16,
    fontWeight: '600',
  },
});
