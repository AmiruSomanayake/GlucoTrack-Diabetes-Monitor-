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
        body="Physical activity makes muscles more sensitive to insulin and helps lower blood glucose. Regular exercise also reduces blood pressure, improves cholesterol, lifts mood and supports healthy weight."
      />
      <Card
        colors={colors}
        title="General Recommendation"
        body={`Aim for at least 150 minutes per week of moderate-intensity aerobic activity (e.g. brisk walking) spread across most days, plus 2-3 sessions of resistance training. Avoid going more than two consecutive days without activity.`}
      />
      <Card
        colors={colors}
        title="Aerobic Activities"
        body={`• Brisk walking — 30 minutes daily\n• Cycling on flat terrain\n• Swimming or water aerobics\n• Dancing\n• Jogging (if cleared by your doctor)\n\nStart with what you can manage and gradually build up intensity and duration.`}
      />
      <Card
        colors={colors}
        title="Resistance Training"
        body={`• Bodyweight squats, lunges, push-ups, planks\n• Resistance bands\n• Light dumbbells (8-15 reps, 2-3 sets)\n\nAim for 2-3 sessions a week, working all major muscle groups. Allow at least one rest day between sessions for the same muscles.`}
      />
      <Card
        colors={colors}
        title="Flexibility & Balance"
        body={`Yoga, tai chi and simple stretching improve joint mobility and reduce fall risk, especially important if you have neuropathy. Spend 10-15 minutes a few times a week on flexibility work.`}
      />
      <Card
        colors={colors}
        title="Safety Tips"
        body={`• Check blood sugar before, during and after exercise, especially when starting a new routine.\n• Carry fast-acting carbs if you take insulin or sulfonylureas.\n• Stay hydrated.\n• Wear well-fitted shoes and inspect your feet daily.\n• Avoid intense exercise if blood sugar is above 250 mg/dL with ketones, or below 100 mg/dL without a snack.\n• Stop and rest if you feel dizzy, short of breath or unwell.`}
      />
      <Card
        colors={colors}
        title="Sample Weekly Plan"
        body={`Mon: 30 min brisk walk + 10 min stretching\nTue: 20 min resistance training (full body)\nWed: 30 min cycling or swimming\nThu: Rest or gentle yoga\nFri: 30 min brisk walk + 20 min resistance\nSat: 40 min outdoor activity (hike, dance)\nSun: Rest or light stretching`}
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
