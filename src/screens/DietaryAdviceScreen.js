import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const Card = ({ title, body, colors }) => (
  <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
    <Text style={[styles.title, { color: colors.primary }]}>{title}</Text>
    <Text style={[styles.body, { color: colors.text }]}>{body}</Text>
  </View>
);

export default function DietaryAdviceScreen() {
  const { colors } = useTheme();
  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
    >
      <Card
        colors={colors}
        title="Eating Well with Diabetes"
        body="blank"
      />
      <Card
        colors={colors}
        title="The Plate Method"
        body="blank"
      />
      <Card
        colors={colors}
        title="Foods to Choose Often"
        body="blank"
      />
      <Card
        colors={colors}
        title="Foods to Limit"
        body="blank"
      />
      <Card
        colors={colors}
        title="Carbohydrate Awareness"
        body="blank"
      />
      <Card
        colors={colors}
        title="Meal Timing"
        body="balnk"
      />
      <Card
        colors={colors}
        title="Hydration"
        body="blank"
      />
      <Card
        colors={colors}
        title="Smart Snacks"
        body="blank"      />
      <Text style={[styles.disclaimer, { color: colors.subText }]}>
        For a meal plan tailored to your needs, consult a registered dietitian.
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
