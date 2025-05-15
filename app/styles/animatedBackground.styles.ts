import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width,
    height,
    top: 0,
    left: 0,
    overflow: 'hidden',
    zIndex: -1,
  },
  scrollContainer: {
    flexDirection: 'row',
    width: width * 2,
    height,
  },
  image: {
    width,
    height,
  },
  blur: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.8,
    zIndex: 2,
  },
});

export default styles;