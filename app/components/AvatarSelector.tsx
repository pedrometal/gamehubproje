import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

const AVATARES = [
  'person-circle',
  'game-controller',
  'star',
  'rocket',
  'planet',
] as const;

type AvatarSelectorProps = {
  selectedAvatar: string;
  onSelect: (avatar: string) => void;
};

export default function AvatarSelector({ selectedAvatar, onSelect }: AvatarSelectorProps) {
  return (
    <View style={styles.container}>
      {AVATARES.map((avatar) => (
        <Pressable
          key={avatar}
          style={[
            styles.avatarButton,
            selectedAvatar === avatar && styles.selectedAvatar
          ]}
          onPress={() => onSelect(avatar)}
        >
          <Ionicons
            name={avatar}
            size={50}
            color={selectedAvatar === avatar ? '#1B1B2F' : '#FFD369'}
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
    flexWrap: 'wrap',
    gap: 15,
    marginTop: 10,
  },
  avatarButton: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFD369',
  },
  selectedAvatar: {
    backgroundColor: '#FFD369',
  },
}); 