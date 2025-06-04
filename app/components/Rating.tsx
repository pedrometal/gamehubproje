import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

type RatingProps = {
  rating: number;
  setRating: (rating: number) => void;
  disabled?: boolean;
};

export default function Rating({ rating, setRating, disabled = false }: RatingProps) {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Pressable
          key={star}
          onPress={() => !disabled && setRating(star)}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            padding: 5,
          })}
          disabled={disabled}
        >
          <Ionicons
            name={star <= rating ? 'star' : 'star-outline'}
            size={32}
            color="#FFD369"
          />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
}); 