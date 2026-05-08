// Returns: { category, severity, range, advice }
// severity is one of: 'critical', 'warning', 'success', 'danger'
// category is the short label shown to the user

export function interpretBloodSugar(value, type) {
  const v = parseFloat(value);
  if (isNaN(v) || v <= 0) {
    return null;
  }

  if (type === 'CBS') {
    // Capillary Blood Sugar in mg/dL (random)
    if (v < 54) {
      return {
        category: 'Critically Hypoglycemic',
        severity: 'critical',
        range: 'Reference: Below 54 mg/dL is severe hypoglycemia.',
        advice:
          'This is a medical emergency. If you are conscious and able to swallow, take 15g of fast-acting carbohydrate (e.g. 3-4 glucose tablets, half a cup of fruit juice, or a tablespoon of sugar). Recheck in 15 minutes. If symptoms persist or worsen, call emergency services immediately. Do NOT drive.',
      };
    }
    if (v < 70) {
      return {
        category: 'Hypoglycemic',
        severity: 'warning',
        range: 'Reference: 54-69 mg/dL is hypoglycemia.',
        advice:
          'Apply the 15-15 rule: consume 15g of fast-acting carbohydrate (e.g. 3 glucose tablets, 120 ml of fruit juice, or 1 tablespoon of honey). Wait 15 minutes and recheck. Repeat if still below 70 mg/dL. Once normal, eat a small snack with protein and complex carbs.',
      };
    }
    if (v < 140) {
      return {
        category: 'Normal',
        severity: 'success',
        range: 'Reference (random): 70-139 mg/dL. Fasting: 70-99 mg/dL.',
        advice:
          'Your blood sugar is within the normal range. Continue with a balanced diet, regular physical activity, adequate sleep and stress management. Keep up routine monitoring as advised by your doctor.',
      };
    }
    if (v < 200) {
      return {
        category: 'Prediabetic',
        severity: 'warning',
        range: 'Reference (random): 140-199 mg/dL. Fasting prediabetes: 100-125 mg/dL.',
        advice:
          'This reading suggests prediabetes. Lifestyle changes can prevent or delay type 2 diabetes: aim for at least 150 minutes of moderate exercise weekly, reduce refined carbs and sugary drinks, increase fibre intake, and target a healthy weight. Schedule a follow-up with your doctor for an HbA1c or fasting glucose test.',
      };
    }
    if (v < 250) {
      return {
        category: 'Diabetic',
        severity: 'danger',
        range: 'Reference (random): ≥200 mg/dL is in the diabetic range. Fasting: ≥126 mg/dL.',
        advice:
          'This reading is in the diabetic range. If you have not been diagnosed, please consult a doctor for confirmatory testing. If you are already diagnosed, review your medication, diet, hydration and stress levels. Drink water, avoid sugary foods and recheck in 1-2 hours. Contact your doctor if levels stay elevated.',
      };
    }
    return {
      category: 'Critically High Sugar',
      severity: 'critical',
      range: 'Reference: ≥250 mg/dL is critically high (hyperglycemic crisis risk).',
      advice:
        'This is dangerously high. Watch for signs of diabetic ketoacidosis (DKA): nausea, vomiting, abdominal pain, fruity-smelling breath, rapid breathing or confusion. Drink water if able, and contact your doctor or emergency services immediately, especially if you have type 1 diabetes or these symptoms appear. Do NOT drive.',
    };
  }

  if (type === 'HbA1c') {
    // HbA1c in % (DCCT units)
    if (v < 4) {
      return {
        category: 'Unusually Low',
        severity: 'warning',
        range: 'Reference: HbA1c is rarely below 4%. Normal is below 5.7%.',
        advice:
          'Very low HbA1c values are uncommon and may reflect frequent hypoglycemia or certain medical conditions affecting red blood cells. Discuss this result with your doctor for further evaluation.',
      };
    }
    if (v < 5.7) {
      return {
        category: 'Normal',
        severity: 'success',
        range: 'Reference: Normal HbA1c is below 5.7%.',
        advice:
          'Your three-month average glucose is in the normal range. Maintain a balanced diet, regular activity and routine check-ups. Repeat HbA1c at intervals advised by your doctor.',
      };
    }
    if (v < 6.5) {
      return {
        category: 'Prediabetic',
        severity: 'warning',
        range: 'Reference: Prediabetes range is 5.7-6.4%.',
        advice:
          'You are in the prediabetic range. Studies show 5-7% weight loss combined with regular exercise can reduce the risk of progressing to type 2 diabetes by up to 58%. Focus on whole foods, reduce sugar and refined carbs, and recheck HbA1c in 3-6 months.',
      };
    }
    if (v < 9) {
      return {
        category: 'Diabetic',
        severity: 'danger',
        range: 'Reference: Diabetes is diagnosed at HbA1c ≥6.5%. Target for most adults is below 7%.',
        advice:
          'This indicates diabetes. If newly diagnosed, see your doctor to start a management plan. If already diagnosed, review medication adherence, diet, exercise and monitoring frequency. Most adults aim for an HbA1c below 7%, but your personal target may differ.',
      };
    }
    return {
      category: 'Critically High',
      severity: 'critical',
      range: 'Reference: HbA1c above 9% indicates poorly controlled diabetes with high complication risk.',
      advice:
        'This level greatly increases risk of long-term complications affecting eyes, kidneys, nerves and the heart. Please contact your doctor as soon as possible to review and intensify your treatment plan. Daily glucose monitoring, medication review and a structured diet/exercise plan are strongly recommended.',
    };
  }

  return null;
}
