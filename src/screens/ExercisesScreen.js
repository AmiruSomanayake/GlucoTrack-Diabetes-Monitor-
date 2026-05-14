import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const Card = ({ title, body, colors }) => (
  <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
    <Text style={[styles.title, { color: colors.primary }]}>{title}</Text>
    <Text style={[styles.body, { color: colors.text }]}>{body}</Text>
  </View>
);

export default function ExercisesScreen() {
  const { colors } = useTheme();
  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
    >
      <Card
        colors={colors}
        title="Why Exercise Matters"
        body="blank"      />
      <Card
        colors={colors}
        title="General Recommendation"
        body="blank"      />
      <Card
        colors={colors}
        title="Aerobic Activities"
        body="blank"      />
      <Card
        colors={colors}
        title="Resistance Training"
        body="blank"      />
      <Card
        colors={colors}
        title="Flexibility & Balance"
        body="blank"      />
      <Card
        colors={colors}
        title="Safety Tips"
        body="blank"      />
      <Card
        colors={colors}
        title="Sample Weekly Plan"
        body="blank"      
      />
      <Text style={[styles.disclaimer, { color: colors.subText }]}>
        Consult your doctor before starting a new exercise programme, especially if you have heart, eye or foot complications.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 32 },
  card: { padding: 16, borderRadius: 12, borderWidth: 1, marginBottom: 12 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
  body: { fontSize: 14, lineHeight: 22 },
  disclaimer: { fontSize: 12, fontStyle: 'italic', textAlign: 'center', marginTop: 8 },
});
