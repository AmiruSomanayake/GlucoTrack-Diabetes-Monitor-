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
        body="There is no single 'diabetic diet'. The goal is balanced meals that keep blood glucose, blood pressure and cholesterol in target ranges. Consistency in carbohydrate amount and meal timing is often as important as food choice."
      />
      <Card
        colors={colors}
        title="The Plate Method"
        body={`A simple visual guide for each meal:\n\n• Half the plate: non-starchy vegetables (leafy greens, tomatoes, broccoli, carrots, gourds).\n• A quarter: lean protein (fish, skinless chicken, eggs, tofu, lentils).\n• A quarter: complex carbohydrates (red rice, whole grains, oats, beans, sweet potato).\n• A small portion of fruit and a glass of water or unsweetened drink.`}
      />
      <Card
        colors={colors}
        title="Foods to Choose Often"
        body={`• Whole grains: oats, brown or red rice, millet, whole-wheat\n• Legumes: dhal, chickpeas, kidney beans\n• Fresh vegetables — especially leafy greens\n• Whole fruits in moderation: berries, apple, pear, papaya\n• Lean proteins: fish (especially oily fish), eggs, skinless poultry, tofu\n• Healthy fats: nuts, seeds, avocado, olive oil, coconut in moderation\n• Low-fat dairy or unsweetened plant milk`}
      />
      <Card
        colors={colors}
        title="Foods to Limit"
        body={`• Sugary drinks: soft drinks, sweetened tea, fruit juice\n• Sweets, cakes, biscuits and ice cream\n• White bread, white rice and refined flour products\n• Deep-fried foods and processed snacks\n• Processed meats: sausages, salami, ham\n• Excess salt — keep below 5g per day\n• Alcohol — limit and never on an empty stomach`}
      />
      <Card
        colors={colors}
        title="Carbohydrate Awareness"
        body={`Carbohydrates raise blood glucose the most. Choose high-fibre, low-glycemic options and watch portion sizes. A reasonable starting point for many adults is 45-60g of carbs per main meal, but your doctor or dietitian can personalise this based on your weight, activity and medications.`}
      />
      <Card
        colors={colors}
        title="Meal Timing"
        body={`• Eat at consistent times each day.\n• Avoid skipping meals, especially if you take insulin or sulfonylureas.\n• Have a small healthy snack if there are long gaps between meals.\n• Limit late-night eating; finish dinner 2-3 hours before bed.`}
      />
      <Card
        colors={colors}
        title="Hydration"
        body={`Aim for 6-8 glasses of water per day unless your doctor has restricted fluids. Avoid sweetened drinks. Plain water, unsweetened tea, and clear broths are good choices.`}
      />
      <Card
        colors={colors}
        title="Smart Snacks"
        body={`• A small handful of unsalted nuts\n• Carrot or cucumber sticks with hummus\n• Boiled egg\n• Plain yoghurt with a few berries\n• An apple with peanut butter\n• Roasted chickpeas`}
      />
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
