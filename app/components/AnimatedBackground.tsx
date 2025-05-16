import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef } from 'react';
import { Animated, Image, View } from 'react-native';

import styles from '../styles/animatedBackground.styles';

const image = require('../../assets/background.jpg');

export default function AnimatedBackground() {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: -styles.image.width,
        duration: 60000,
        useNativeDriver: true,
      })
    ).start();
  }, [translateX]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.scrollContainer,
          {
            transform: [{ translateX }],
          },
        ]}
      >
        <Image source={image} style={styles.image} resizeMode="cover" />
        <Image source={image} style={styles.image} resizeMode="cover" />
      </Animated.View>

      <BlurView intensity={40} tint="dark" style={styles.blur} />
      <LinearGradient
        colors={['#0d0c1d', '#1f1b3a', '#2e2b5f']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      />
    </View>
  );
}