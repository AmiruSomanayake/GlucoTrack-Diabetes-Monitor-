import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { interpretBloodSugar } from '../utils/interpretBloodSugar';

export default function HomeScreen() {
  const { colors } = useTheme();
  const [type, setType] = useState('CBS'); // 'CBS' or 'HbA1c'
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleDone = () => {
    Keyboard.dismiss();
    const r = interpretBloodSugar(value, type);
    if (!r) {
      setError('Please enter a valid positive number.');
      setResult(null);
      return;
    }
    setError('');
    setResult(r);
  };

  const handleReset = () => {
    setValue('');
    setResult(null);
    setError('');
  };

  const severityColor = (sev) => {
    switch (sev) {
      case 'success': return colors.success;
      case 'warning': return colors.warning;
      case 'danger': return colors.danger;
      case 'critical': return colors.critical;
      default: return colors.primary;
    }
  };

  const unitLabel = type === 'CBS' ? 'mg/dL' : '%';

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.background }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <Text style={[styles.heading, { color: colors.text }]}>Check Your Reading</Text>
        <Text style={[styles.sub, { color: colors.subText }]}>
          Select the type and enter your value below.
        </Text>

        {/* Type selector */}
        <View style={[styles.toggleWrap, { backgroundColor: colors.card, borderColor: colors.border }]}>
          {['CBS', 'HbA1c'].map((opt) => (
            <TouchableOpacity
              key={opt}
              style={[
                styles.toggleBtn,
                type === opt && { backgroundColor: colors.primary },
              ]}
              onPress={() => { setType(opt); setResult(null); setError(''); }}
            >
              <Text
                style={[
                  styles.toggleText,
                  { color: type === opt ? '#fff' : colors.text },
                ]}
              >
                {opt === 'CBS' ? 'CBS (mg/dL)' : 'HbA1c (%)'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Input box */}
        <View style={[styles.inputBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.label, { color: colors.subText }]}>
            Enter {type === 'CBS' ? 'Capillary Blood Sugar' : 'HbA1c'} value
          </Text>
          <View style={styles.inputRow}>
            <TextInput
              style={[styles.input, { color: colors.text, backgroundColor: colors.inputBg, borderColor: colors.border }]}
              placeholder={type === 'CBS' ? 'e.g. 110' : 'e.g. 6.2'}
              placeholderTextColor={colors.subText}
              keyboardType="decimal-pad"
              value={value}
              onChangeText={(t) => { setValue(t); setError(''); }}
              returnKeyType="done"
              onSubmitEditing={handleDone}
            />
            <Text style={[styles.unit, { color: colors.subText }]}>{unitLabel}</Text>
          </View>
          {!!error && <Text style={[styles.error, { color: colors.danger }]}>{error}</Text>}
        </View>

        {/* Action buttons */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.doneBtn, { backgroundColor: colors.primary }]}
            onPress={handleDone}
          >
            <Ionicons name="checkmark-circle" size={20} color="#fff" />
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
          {result && (
            <TouchableOpacity
              style={[styles.resetBtn, { borderColor: colors.border }]}
              onPress={handleReset}
            >
              <Ionicons name="refresh" size={18} color={colors.text} />
              <Text style={[styles.resetText, { color: colors.text }]}>Reset</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Interpretation */}
        {result && (
          <>
            <View
              style={[
                styles.resultCard,
                {
                  backgroundColor: colors.card,
                  borderLeftColor: severityColor(result.severity),
                  borderColor: colors.border,
                },
              ]}
            >
              <Text style={[styles.resultCategory, { color: severityColor(result.severity) }]}>
                {result.category}
              </Text>
              <Text style={[styles.resultRange, { color: colors.subText }]}>
                {result.range}
              </Text>
            </View>

            <View style={[styles.adviceCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <View style={styles.adviceHeader}>
                <Ionicons name="medkit-outline" size={20} color={colors.primary} />
                <Text style={[styles.adviceTitle, { color: colors.text }]}>What to do next</Text>
              </View>
              <Text style={[styles.adviceText, { color: colors.subText }]}>
                {result.advice}
              </Text>
            </View>

            <Text style={[styles.disclaimer, { color: colors.subText }]}>
              ⚠️ This app is for educational purposes only and does not replace professional medical advice.
            </Text>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scroll: { padding: 20, paddingBottom: 40 },
  heading: { fontSize: 24, fontWeight: '700', marginBottom: 4 },
  sub: { fontSize: 14, marginBottom: 20 },
  toggleWrap: {
    flexDirection: 'row',
    borderRadius: 12,
    padding: 4,
    borderWidth: 1,
    marginBottom: 16,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  toggleText: { fontWeight: '600', fontSize: 14 },
  inputBox: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    marginBottom: 16,
  },
  label: { fontSize: 13, marginBottom: 10 },
  inputRow: { flexDirection: 'row', alignItems: 'center' },
  input: {
    flex: 1,
    height: 52,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 18,
    fontWeight: '600',
  },
  unit: { marginLeft: 12, fontSize: 14, fontWeight: '600' },
  error: { marginTop: 8, fontSize: 13 },
  actions: { flexDirection: 'row', gap: 10, marginBottom: 20 },
  doneBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  doneText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  resetBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    gap: 6,
  },
  resetText: { fontWeight: '600' },
  resultCard: {
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 6,
    borderWidth: 1,
    marginBottom: 12,
  },
  resultCategory: { fontSize: 22, fontWeight: '700', marginBottom: 6 },
  resultRange: { fontSize: 13, lineHeight: 18 },
  adviceCard: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    marginBottom: 12,
  },
  adviceHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  adviceTitle: { fontSize: 16, fontWeight: '700' },
  adviceText: { fontSize: 14, lineHeight: 20 },
  disclaimer: { fontSize: 12, fontStyle: 'italic', textAlign: 'center', marginTop: 8 },
});
