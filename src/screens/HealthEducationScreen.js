import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const Section = ({ title, body, colors }) => (
  <View style={[styles.section, { backgroundColor: colors.card, borderColor: colors.border }]}>
    <Text style={[styles.sectionTitle, { color: colors.primary }]}>{title}</Text>
    <Text style={[styles.body, { color: colors.text }]}>{body}</Text>
  </View>
);

export default function HealthEducationScreen() {
  const { colors } = useTheme();
  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
    >
      <Section
        colors={colors}
        title="What is Diabetes?"
        body="blank"      />
      <Section
        colors={colors}
        title="Types of Diabetes"
        body="blank"      />
      <Section
        colors={colors}
        title="Common Symptoms"
        body="blank"      />
      <Section
        colors={colors}
        title="Diagnostic Criteria"
        body="blank"      />
      <Section
        colors={colors}
        title="Possible Complications"
        body="blank"      />
      <Section
        colors={colors}
        title="Self-Monitoring Tips"
        body="blank"      />
      <Text style={[styles.disclaimer, { color: colors.subText }]}>
        Always consult your healthcare provider for personalised medical advice.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 32 },
  section: {
    padding: 16, borderRadius: 12,
    borderWidth: 1, marginBottom: 12,
  },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
  body: { fontSize: 14, lineHeight: 22 },
  disclaimer: { fontSize: 12, fontStyle: 'italic', textAlign: 'center', marginTop: 8 },
});
