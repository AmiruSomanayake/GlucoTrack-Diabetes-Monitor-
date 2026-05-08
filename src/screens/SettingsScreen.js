import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function SettingsScreen() {
  const { colors, isDark, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [reminders, setReminders] = useState(false);

  const Item = ({ icon, label, value, onValueChange }) => (
    <View style={[styles.row, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <Ionicons name={icon} size={22} color={colors.primary} />
      <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: colors.border, true: colors.primary }}
        thumbColor="#fff"
      />
    </View>
  );

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
    >
      <Text style={[styles.section, { color: colors.subText }]}>APPEARANCE</Text>
      <Item icon="moon-outline" label="Dark Mode" value={isDark} onValueChange={toggleTheme} />

      <Text style={[styles.section, { color: colors.subText }]}>NOTIFICATIONS</Text>
      <Item icon="notifications-outline" label="Enable Notifications" value={notifications} onValueChange={setNotifications} />
      <Item icon="alarm-outline" label="Reading Reminders" value={reminders} onValueChange={setReminders} />

      <Text style={[styles.note, { color: colors.subText }]}>
        Notification scheduling is a placeholder. Hook this up with expo-notifications for production use.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  section: { fontSize: 12, fontWeight: '700', marginTop: 12, marginBottom: 8, letterSpacing: 1 },
  row: {
    flexDirection: 'row', alignItems: 'center',
    padding: 14, borderRadius: 12,
    borderWidth: 1, marginBottom: 8, gap: 12,
  },
  label: { flex: 1, fontSize: 15 },
  note: { fontSize: 12, fontStyle: 'italic', marginTop: 16, lineHeight: 18 },
});
