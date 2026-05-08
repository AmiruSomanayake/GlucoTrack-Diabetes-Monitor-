import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function ProfileScreen({ navigation }) {
  const { colors, isDark, toggleTheme } = useTheme();

  const Row = ({ icon, label, onPress, right }) => (
    <TouchableOpacity
      style={[styles.row, { backgroundColor: colors.card, borderColor: colors.border }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={[styles.iconBox, { backgroundColor: colors.primary + '22' }]}>
        <Ionicons name={icon} size={22} color={colors.primary} />
      </View>
      <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
      {right || <Ionicons name="chevron-forward" size={20} color={colors.subText} />}
    </TouchableOpacity>
  );

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
    >
      {/* Profile picture placeholder */}
      <View style={styles.avatarWrap}>
        <View style={[styles.avatar, { backgroundColor: colors.primary + '33', borderColor: colors.primary }]}>
          <Ionicons name="person" size={64} color={colors.primary} />
        </View>
        <Text style={[styles.name, { color: colors.text }]}>Welcome</Text>
        <Text style={[styles.email, { color: colors.subText }]}>Tap to set up your profile</Text>
      </View>

      <Row icon="settings-outline" label="Settings" onPress={() => navigation.navigate('Settings')} />

      <Row
        icon={isDark ? 'moon' : 'sunny-outline'}
        label={isDark ? 'Dark Theme' : 'Light Theme'}
        onPress={toggleTheme}
        right={
          <View style={[styles.switch, { backgroundColor: isDark ? colors.primary : colors.border }]}>
            <View style={[styles.knob, { left: isDark ? 22 : 2 }]} />
          </View>
        }
      />

      <Row icon="information-circle-outline" label="About" onPress={() => navigation.navigate('About')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  avatarWrap: { alignItems: 'center', marginBottom: 28 },
  avatar: {
    width: 120, height: 120, borderRadius: 60,
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 2, marginBottom: 12,
  },
  name: { fontSize: 20, fontWeight: '700' },
  email: { fontSize: 13, marginTop: 2 },
  row: {
    flexDirection: 'row', alignItems: 'center',
    padding: 14, borderRadius: 12,
    borderWidth: 1, marginBottom: 10, gap: 12,
  },
  iconBox: {
    width: 40, height: 40, borderRadius: 10,
    justifyContent: 'center', alignItems: 'center',
  },
  label: { flex: 1, fontSize: 15, fontWeight: '600' },
  switch: {
    width: 44, height: 24, borderRadius: 12, justifyContent: 'center',
  },
  knob: {
    position: 'absolute',
    width: 20, height: 20, borderRadius: 10,
    backgroundColor: '#fff',
  },
});
