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
        body="Diabetes mellitus is a chronic condition where the body either does not produce enough insulin (Type 1) or cannot use insulin effectively (Type 2). Insulin is the hormone that helps glucose enter cells for energy. Without proper insulin function, glucose builds up in the blood."
      />
      <Section
        colors={colors}
        title="Types of Diabetes"
        body={`• Type 1: Autoimmune destruction of insulin-producing beta cells. Usually diagnosed in childhood. Requires lifelong insulin.\n\n• Type 2: Most common form. Caused by insulin resistance plus relative insulin deficiency. Strongly linked to lifestyle and genetics.\n\n• Gestational: Develops during pregnancy and increases the lifetime risk of Type 2 diabetes.\n\n• Prediabetes: Blood sugar is higher than normal but not yet in the diabetic range.`}
      />
      <Section
        colors={colors}
        title="Common Symptoms"
        body={`• Frequent urination (polyuria)\n• Excessive thirst (polydipsia)\n• Increased hunger\n• Unexplained weight loss\n• Fatigue\n• Blurred vision\n• Slow-healing wounds\n• Frequent infections`}
      />
      <Section
        colors={colors}
        title="Diagnostic Criteria"
        body={`• Fasting plasma glucose ≥126 mg/dL\n• Random plasma glucose ≥200 mg/dL with symptoms\n• 2-hour OGTT ≥200 mg/dL\n• HbA1c ≥6.5%\n\nA second confirmatory test is usually required for diagnosis.`}
      />
      <Section
        colors={colors}
        title="Possible Complications"
        body={`Long-term high blood sugar can damage blood vessels and nerves, leading to:\n\n• Cardiovascular disease (heart attack, stroke)\n• Kidney disease (nephropathy)\n• Eye damage (retinopathy, possible blindness)\n• Nerve damage (neuropathy)\n• Foot problems and ulcers\n• Skin and oral health issues\n\nGood control significantly reduces these risks.`}
      />
      <Section
        colors={colors}
        title="Self-Monitoring Tips"
        body={`• Check blood sugar at the times recommended by your doctor.\n• Keep a log of readings, meals, activity and medications.\n• Carry a fast-acting carbohydrate source if you take insulin or sulfonylureas.\n• Attend regular check-ups including HbA1c, eye, kidney and foot exams.\n• Wear a medical ID if you have insulin-dependent diabetes.`}
      />
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
