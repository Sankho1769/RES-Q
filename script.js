const emergencyData = {
  chest_pain: {
    label: "Chest Pain",
    icon: "&#128147;",
    questions: [
      { id: "breathing", text: "Are you having difficulty breathing?", options: ["Yes, severe", "Yes, mild", "No"] },
      { id: "sweating", text: "Are you experiencing unusual sweating?", options: ["Yes, profuse", "Yes, slight", "No"] },
      { id: "arm_pain", text: "Do you feel pain radiating to arm, jaw or neck?", options: ["Yes, strongly", "Somewhat", "No"] },
      { id: "dizziness", text: "Are you feeling dizzy or lightheaded?", options: ["Yes, severely", "Mildly", "No"] },
      { id: "heart_disease", text: "Do you have existing heart disease?", options: ["Yes", "Suspected", "No"] },
      { id: "severity", text: "Rate your pain severity (1-10)", type: "slider" }
    ],
    predictions: {
      high: {
        condition: "Possible Cardiac Emergency",
        severity: "Critical",
        score: 92,
        ambulance: "Cardiac Ambulance",
        hospital: "Heart & Trauma Center",
        confidence: 94,
        priority: "IMMEDIATE"
      },
      low: {
        condition: "Possible Angina / Musculoskeletal Pain",
        severity: "Moderate",
        score: 58,
        ambulance: "Oxygen Ambulance",
        hospital: "General Emergency Hospital",
        confidence: 78,
        priority: "URGENT"
      }
    },
    suggestions: [
      { icon: "&#128116;", text: "<strong>Sit upright</strong> and avoid lying flat. Keep patient calm and still." },
      { icon: "&#128138;", text: "<strong>Loosen tight clothing</strong> around the chest and neck immediately." },
      { icon: "&#128137;", text: "If aspirin is available and patient is not allergic, <strong>give 325mg aspirin</strong> to chew." },
      { icon: "&#128680;", text: "<strong>Do not allow patient to walk</strong> or exert themselves in any way." },
      { icon: "&#128222;", text: "<strong>Call emergency services immediately</strong>. Do not wait for symptoms to worsen." },
      { icon: "&#9989;", text: "Monitor breathing and consciousness. <strong>Be ready for CPR</strong> if patient loses consciousness." }
    ]
  },
  bleeding: {
    label: "Heavy Bleeding",
    icon: "&#129656;",
    questions: [
      { id: "blood_loss", text: "How much blood has been lost?", options: ["Massive (soaked clothing)", "Moderate (large bandage)", "Minor (small cloth)"] },
      { id: "location", text: "Where is the injury located?", options: ["Head/Neck", "Torso/Abdomen", "Limbs"] },
      { id: "consciousness", text: "Is the patient conscious?", options: ["Unconscious", "Confused/Semi-conscious", "Fully conscious"] },
      { id: "dizziness", text: "Is the patient dizzy or faint?", options: ["Collapsed", "Very dizzy", "Slightly dizzy", "No"] },
      { id: "active_bleeding", text: "Is bleeding still active?", options: ["Cannot stop it", "Slowing down", "Under control"] }
    ],
    predictions: {
      high: {
        condition: "Possible Severe Hemorrhage / Blood Loss",
        severity: "High",
        score: 89,
        ambulance: "ICU Ambulance",
        hospital: "Trauma & Surgical Center",
        confidence: 91,
        priority: "IMMEDIATE"
      },
      low: {
        condition: "Controlled Laceration / Minor Wound",
        severity: "Moderate",
        score: 45,
        ambulance: "Basic Ambulance",
        hospital: "General Emergency Hospital",
        confidence: 82,
        priority: "URGENT"
      }
    },
    suggestions: [
      { icon: "&#128137;", text: "<strong>Apply direct firm pressure</strong> to the wound using a clean cloth or bandage." },
      { icon: "&#128070;", text: "If possible, <strong>elevate the injured limb</strong> above the level of the heart." },
      { icon: "&#128683;", text: "<strong>Do NOT remove embedded objects</strong> from the wound. Stabilize and cover instead." },
      { icon: "&#128116;", text: "Keep the patient <strong>lying down and still</strong> to prevent shock." },
      { icon: "&#9889;", text: "Watch for signs of shock: <strong>pale skin, rapid breathing, confusion</strong>." },
      { icon: "&#128222;", text: "<strong>Maintain pressure continuously</strong> until emergency services arrive." }
    ]
  },
  accident: {
    label: "Accident / Injury",
    icon: "&#128663;",
    questions: [
      { id: "type", text: "What type of accident occurred?", options: ["Vehicle collision", "Fall from height", "Crush injury", "Sports injury"] },
      { id: "consciousness", text: "Patient's level of consciousness?", options: ["Unconscious", "Confused", "Alert but in pain", "Fully alert"] },
      { id: "spine", text: "Is there possible neck or spine injury?", options: ["Yes, suspected", "Uncertain", "No"] },
      { id: "bleeding", text: "Is there visible bleeding?", options: ["Severe bleeding", "Moderate", "Minor wounds", "No bleeding"] },
      { id: "movement", text: "Can the patient move limbs?", options: ["No movement possible", "Limited movement", "Full movement with pain"] }
    ],
    predictions: {
      high: {
        condition: "Possible Multiple Trauma / Polytrauma",
        severity: "High",
        score: 87,
        ambulance: "ICU Ambulance",
        hospital: "Trauma Center & Neurosurgery",
        confidence: 88,
        priority: "IMMEDIATE"
      },
      low: {
        condition: "Minor Traumatic Injury",
        severity: "Moderate",
        score: 52,
        ambulance: "Basic Ambulance",
        hospital: "Orthopedic Emergency Hospital",
        confidence: 79,
        priority: "URGENT"
      }
    },
    suggestions: [
      { icon: "&#128683;", text: "<strong>Do NOT move the patient</strong> if spinal injury is suspected. Immobilize head and neck." },
      { icon: "&#128137;", text: "<strong>Control visible bleeding</strong> with clean cloths. Apply gentle but firm pressure." },
      { icon: "&#128065;", text: "<strong>Monitor consciousness</strong> continuously. Speak to patient to keep them alert." },
      { icon: "&#128683;", text: "<strong>Do not remove helmet</strong> unless necessary for breathing. Leave in place if spine injury suspected." },
      { icon: "&#128116;", text: "Keep patient warm and <strong>covered with a blanket</strong> to prevent shock." },
      { icon: "&#9989;", text: "<strong>Do not give water or food</strong> to an unconscious or severely injured patient." }
    ]
  },
  breathing: {
    label: "Breathing Problem",
    icon: "&#129688;",
    questions: [
      { id: "severity", text: "How severe is the breathing difficulty?", options: ["Cannot breathe at all", "Very labored breathing", "Shortness of breath", "Mild difficulty"] },
      { id: "cause", text: "Do you know the cause?", options: ["Asthma attack", "Allergic reaction", "Choking", "Unknown cause"] },
      { id: "chest_pain", text: "Is there accompanying chest pain?", options: ["Yes, severe", "Mild chest tightness", "No"] },
      { id: "skin_color", text: "What is the patient's skin/lip color?", options: ["Blue/Purple (cyanosis)", "Pale/Grey", "Normal"] },
      { id: "inhaler", text: "Does patient have inhaler or medication?", options: ["Yes, used already", "Yes, not used", "No medication"] }
    ],
    predictions: {
      high: {
        condition: "Possible Respiratory Failure / Severe Asthma",
        severity: "Critical",
        score: 94,
        ambulance: "Oxygen Ambulance",
        hospital: "Pulmonary & ICU Center",
        confidence: 96,
        priority: "IMMEDIATE"
      },
      low: {
        condition: "Mild Respiratory Distress / Hyperventilation",
        severity: "Moderate",
        score: 60,
        ambulance: "Oxygen Ambulance",
        hospital: "General Emergency Hospital",
        confidence: 80,
        priority: "URGENT"
      }
    },
    suggestions: [
      { icon: "&#128116;", text: "<strong>Help patient sit upright</strong> in a forward-leaning position to open airways." },
      { icon: "&#128138;", text: "<strong>Loosen all tight clothing</strong> around neck, chest and waist immediately." },
      { icon: "&#128144;", text: "If available, <strong>administer the inhaler or oxygen mask</strong> right away." },
      { icon: "&#128683;", text: "<strong>Keep patient calm</strong> — panic worsens breathing. Speak in a slow, calm voice." },
      { icon: "&#128065;", text: "Watch for <strong>blue lips or fingernails</strong>. This indicates critical oxygen shortage." },
      { icon: "&#128222;", text: "If breathing stops, <strong>prepare to start CPR</strong> and call emergency immediately." }
    ]
  },
  stroke: {
    label: "Stroke Symptoms",
    icon: "&#129504;",
    questions: [
      { id: "facial_droop", text: "Is there facial drooping on one side?", options: ["Yes, clearly visible", "Slight drooping", "No"] },
      { id: "arm_weakness", text: "Is there sudden arm weakness?", options: ["Cannot raise arm", "Arm drifts down", "No weakness"] },
      { id: "speech", text: "Is speech slurred or confused?", options: ["Cannot speak", "Slurred speech", "Confused speech", "Normal"] },
      { id: "time", text: "When did symptoms start?", options: ["Within last hour", "1-3 hours ago", "3-6 hours ago", "More than 6 hours"] },
      { id: "headache", text: "Is there sudden severe headache?", options: ["Worst headache ever", "Moderate headache", "Mild headache", "No headache"] }
    ],
    predictions: {
      high: {
        condition: "Possible Acute Ischemic / Hemorrhagic Stroke",
        severity: "Critical",
        score: 96,
        ambulance: "ICU Ambulance",
        hospital: "Neurology Stroke Center",
        confidence: 95,
        priority: "IMMEDIATE"
      },
      low: {
        condition: "Possible TIA (Mini-Stroke) / Neurological Episode",
        severity: "High",
        score: 75,
        ambulance: "ICU Ambulance",
        hospital: "Neurology Center",
        confidence: 82,
        priority: "URGENT"
      }
    },
    suggestions: [
      { icon: "&#9200;", text: "<strong>Note the exact time symptoms started.</strong> This is critical for stroke treatment eligibility." },
      { icon: "&#128116;", text: "Keep patient <strong>calm and lying down</strong> with head slightly elevated." },
      { icon: "&#128683;", text: "<strong>Do NOT give food, water or medication</strong> — swallowing reflex may be impaired." },
      { icon: "&#128065;", text: "Use the <strong>FAST test: Face, Arms, Speech, Time</strong> to document stroke signs." },
      { icon: "&#128683;", text: "<strong>Do not let patient sleep</strong> or dismiss symptoms as tiredness." },
      { icon: "&#128222;", text: "<strong>Every minute counts.</strong> Stroke treatment window is 4.5 hours. Call ambulance immediately." }
    ]
  },
  burns: {
    label: "Burns",
    icon: "&#128293;",
    questions: [
      { id: "severity", text: "What degree of burn?", options: ["Third degree (charred skin)", "Second degree (blistering)", "First degree (redness only)"] },
      { id: "area", text: "How much body area is affected?", options: ["Large area (>10%)", "Moderate area", "Small area (<5%)"] },
      { id: "location", text: "Where is the burn located?", options: ["Face/Airway", "Hands/Feet/Genitals", "Other body areas"] },
      { id: "cause", text: "What caused the burn?", options: ["Fire/Flames", "Chemical", "Electrical", "Hot liquid/steam"] },
      { id: "breathing", text: "Is there any breathing difficulty (inhaled smoke)?", options: ["Yes, severe", "Mild difficulty", "No"] }
    ],
    predictions: {
      high: {
        condition: "Possible Severe Burns / Inhalation Injury",
        severity: "High",
        score: 85,
        ambulance: "ICU Ambulance",
        hospital: "Burns & Trauma Center",
        confidence: 89,
        priority: "IMMEDIATE"
      },
      low: {
        condition: "Minor Superficial Burns",
        severity: "Low",
        score: 32,
        ambulance: "Basic Ambulance",
        hospital: "General Emergency Hospital",
        confidence: 85,
        priority: "NON-URGENT"
      }
    },
    suggestions: [
      { icon: "&#128167;", text: "<strong>Cool the burn with running cool water for 20 minutes</strong> immediately. Do not stop early." },
      { icon: "&#128683;", text: "<strong>Never use ice, ice water, butter, or creams</strong> on a burn. These cause more damage." },
      { icon: "&#128137;", text: "<strong>Cover with a clean, non-fluffy material</strong> like cling film or a clean plastic bag." },
      { icon: "&#128148;", text: "<strong>Remove jewelry and tight items</strong> near the burn before swelling begins." },
      { icon: "&#128683;", text: "<strong>Do not break blisters.</strong> This increases infection risk significantly." },
      { icon: "&#128222;", text: "For face/airway burns, <strong>call emergency immediately</strong> — airway swelling can block breathing." }
    ]
  },
  seizure: {
    label: "Seizure",
    icon: "&#9889;",
    questions: [
      { id: "duration", text: "How long has the seizure lasted?", options: ["More than 5 minutes", "2-5 minutes", "Less than 2 minutes", "Ended now"] },
      { id: "consciousness", text: "Is patient conscious after seizure?", options: ["Fully unconscious", "Confused/Drowsy", "Recovering", "Alert"] },
      { id: "history", text: "Does patient have history of seizures?", options: ["No, first time", "Yes, but this is different", "Yes, similar before"] },
      { id: "injury", text: "Was the patient injured during seizure?", options: ["Yes, head injury", "Yes, other injury", "No injury"] },
      { id: "fever", text: "Does the patient have a high fever?", options: ["Yes, very high", "Yes, moderate", "No fever"] }
    ],
    predictions: {
      high: {
        condition: "Possible Status Epilepticus / New-Onset Seizure",
        severity: "High",
        score: 83,
        ambulance: "ICU Ambulance",
        hospital: "Neurology & ICU Center",
        confidence: 87,
        priority: "IMMEDIATE"
      },
      low: {
        condition: "Febrile Seizure / Known Epilepsy Episode",
        severity: "Moderate",
        score: 55,
        ambulance: "Basic Ambulance",
        hospital: "Neurology Center",
        confidence: 81,
        priority: "URGENT"
      }
    },
    suggestions: [
      { icon: "&#128680;", text: "<strong>Clear the area of hazards</strong> immediately — remove sharp objects, furniture, hard items." },
      { icon: "&#129657;", text: "<strong>Cushion the patient's head</strong> with something soft. Do not restrain movements." },
      { icon: "&#9200;", text: "<strong>Time the seizure.</strong> If it lasts more than 5 minutes, this is a medical emergency." },
      { icon: "&#128683;", text: "<strong>Never put anything in the patient's mouth</strong> — this is a dangerous myth." },
      { icon: "&#128116;", text: "After seizure ends, <strong>place patient in recovery position</strong> (on side) to prevent choking." },
      { icon: "&#128222;", text: "Call emergency if: <strong>first seizure, lasts >5 min, patient has diabetes, is pregnant, or is injured</strong>." }
    ]
  },
  fever: {
    label: "High Fever",
    icon: "&#127777;",
    questions: [
      { id: "temperature", text: "What is the temperature?", options: ["Above 40°C (104°F)", "39-40°C (102-104°F)", "38-39°C (100-102°F)"] },
      { id: "duration", text: "How long has the fever lasted?", options: ["More than 3 days", "1-3 days", "Less than 24 hours"] },
      { id: "symptoms", text: "Additional symptoms present?", options: ["Stiff neck / severe headache", "Rash / confusion", "Nausea / vomiting", "Just fever"] },
      { id: "age_group", text: "Age group of patient?", options: ["Infant under 3 months", "Child (3 months - 12 years)", "Adult", "Elderly (65+)"] },
      { id: "consciousness", text: "Is patient responsive and alert?", options: ["Unconscious/Unresponsive", "Very confused/drowsy", "Slightly drowsy", "Fully alert"] }
    ],
    predictions: {
      high: {
        condition: "Possible Sepsis / Meningitis / Severe Infection",
        severity: "High",
        score: 78,
        ambulance: "ICU Ambulance",
        hospital: "Infectious Disease Center",
        confidence: 83,
        priority: "URGENT"
      },
      low: {
        condition: "Viral Fever / Common Infection",
        severity: "Low",
        score: 35,
        ambulance: "Basic Ambulance",
        hospital: "General Hospital",
        confidence: 88,
        priority: "NON-URGENT"
      }
    },
    suggestions: [
      { icon: "&#128167;", text: "<strong>Apply cool, damp cloths</strong> to forehead, neck, armpits and groin to reduce fever." },
      { icon: "&#128167;", text: "<strong>Keep patient hydrated</strong> with water, oral rehydration solution or clear fluids." },
      { icon: "&#128683;", text: "<strong>Do not over-bundle</strong> patient. Remove excess clothing to allow body to cool naturally." },
      { icon: "&#128138;", text: "Give <strong>fever-reducing medication (paracetamol)</strong> if available and appropriate for age." },
      { icon: "&#128065;", text: "Watch for danger signs: <strong>stiff neck, severe headache, skin rash, confusion</strong> — call emergency." },
      { icon: "&#128680;", text: "For <strong>infants under 3 months with any fever</strong>, this is always an emergency. Call immediately." }
    ]
  },
  pregnancy: {
    label: "Pregnancy Emergency",
    icon: "&#129328;",
    questions: [
      { id: "weeks", text: "How many weeks pregnant?", options: ["Less than 20 weeks", "20-36 weeks", "36+ weeks / Near term"] },
      { id: "symptoms", text: "What symptoms are present?", options: ["Heavy bleeding/hemorrhage", "Severe abdominal pain", "Labor contractions", "Reduced baby movement"] },
      { id: "bleeding", text: "Is there vaginal bleeding?", options: ["Heavy, bright red bleeding", "Moderate bleeding", "Light spotting", "No bleeding"] },
      { id: "pain", text: "Describe pain level?", options: ["Unbearable pain", "Severe pain", "Moderate pain", "Mild discomfort"] },
      { id: "consciousness", text: "Patient's mental state?", options: ["Unconscious/unresponsive", "Confused/disoriented", "Alert but distressed", "Calm but concerned"] }
    ],
    predictions: {
      high: {
        condition: "Possible Placental Abruption / Eclampsia / Preterm Labor",
        severity: "Critical",
        score: 93,
        ambulance: "ICU Ambulance",
        hospital: "Maternity & Obstetric Emergency Unit",
        confidence: 92,
        priority: "IMMEDIATE"
      },
      low: {
        condition: "Possible Braxton Hicks / Early Labor",
        severity: "Moderate",
        score: 50,
        ambulance: "Basic Ambulance",
        hospital: "Maternity Hospital",
        confidence: 80,
        priority: "URGENT"
      }
    },
    suggestions: [
      { icon: "&#128116;", text: "<strong>Keep the patient calm and still.</strong> Anxiety increases complications." },
      { icon: "&#129656;", text: "<strong>Lie on left side</strong> if possible to improve blood flow to the baby." },
      { icon: "&#9200;", text: "<strong>Time contractions</strong> — frequency and duration. Report this to the ambulance team." },
      { icon: "&#128683;", text: "<strong>Do not give any medications</strong> without medical advice during pregnancy emergencies." },
      { icon: "&#128065;", text: "Monitor for <strong>heavy bleeding, severe headache, vision changes</strong> — signs of eclampsia." },
      { icon: "&#128222;", text: "<strong>Call emergency services immediately.</strong> Do not attempt to drive to hospital with heavy bleeding." }
    ]
  },
  other: {
    label: "Other Emergency",
    icon: "&#128680;",
    questions: [
      { id: "type", text: "What best describes the emergency?", options: ["Poisoning/Overdose", "Allergic reaction (Anaphylaxis)", "Drowning/Near-drowning", "Loss of consciousness"] },
      { id: "consciousness", text: "Is the patient conscious?", options: ["Fully unconscious", "Semi-conscious/Confused", "Conscious but deteriorating", "Fully conscious"] },
      { id: "breathing", text: "Is breathing normal?", options: ["Not breathing", "Labored breathing", "Shallow/fast breathing", "Normal breathing"] },
      { id: "duration", text: "How long has emergency lasted?", options: ["Just happened", "5-15 minutes", "More than 15 minutes"] },
      { id: "severity", text: "Overall perceived severity?", options: ["Life-threatening", "Very serious", "Moderate concern", "Mild concern"] }
    ],
    predictions: {
      high: {
        condition: "Undetermined Emergency — High Risk Indicators Detected",
        severity: "High",
        score: 80,
        ambulance: "ICU Ambulance",
        hospital: "General Emergency & Trauma Center",
        confidence: 76,
        priority: "URGENT"
      },
      low: {
        condition: "Non-Life-Threatening Emergency",
        severity: "Low",
        score: 38,
        ambulance: "Basic Ambulance",
        hospital: "General Hospital",
        confidence: 72,
        priority: "NON-URGENT"
      }
    },
    suggestions: [
      { icon: "&#128065;", text: "<strong>Monitor patient continuously.</strong> Watch breathing, pulse and consciousness level." },
      { icon: "&#128116;", text: "<strong>Keep patient calm and still.</strong> Movement can worsen unknown injuries." },
      { icon: "&#9989;", text: "If patient is unconscious but breathing, <strong>place in recovery position</strong> (on their side)." },
      { icon: "&#128680;", text: "If patient is not breathing, <strong>start CPR immediately</strong>: 30 chest compressions, 2 breaths." },
      { icon: "&#128683;", text: "<strong>Do not give food or water</strong> to an unconscious or seriously ill patient." },
      { icon: "&#128222;", text: "<strong>Call emergency services immediately</strong> and stay on the line for guidance." }
    ]
  }
};

const chatResponses = {
  chest_pain: {
    keywords: ["chest pain", "chest", "heart pain", "cardiac", "heart attack", "heart"],
    response: "🚨 <strong>Chest Pain Detected!</strong><br><br>This could be a cardiac emergency. Here's what to do RIGHT NOW:<br><br>✅ <strong>Sit upright</strong> — don't lie down<br>✅ <strong>Chew aspirin</strong> (325mg) if available<br>✅ <strong>Loosen clothing</strong> around chest<br>✅ <strong>Don't exert yourself</strong><br><br>⚠️ Risk Level: <span style='color:#ff2d55'>CRITICAL</span><br>🚑 Recommended: <strong>Cardiac Ambulance</strong><br>🏥 Hospital: <strong>Heart & Trauma Center</strong><br><br><em>Please start AI Assessment above for detailed analysis.</em>"
  },
  bleeding: {
    keywords: ["bleeding", "blood", "hemorrhage", "wound", "cut", "laceration"],
    response: "🩸 <strong>Bleeding Emergency Detected!</strong><br><br>Act immediately to control blood loss:<br><br>✅ <strong>Apply DIRECT FIRM pressure</strong> to wound<br>✅ <strong>Elevate the injured limb</strong> if possible<br>✅ <strong>Use clean cloths</strong> — never remove once applied<br>❌ <strong>Do NOT remove embedded objects</strong><br><br>⚠️ Risk Level: <span style='color:#ff6b35'>HIGH</span><br>🚑 Recommended: <strong>ICU Ambulance</strong><br>🏥 Hospital: <strong>Trauma & Surgical Center</strong><br><br><em>Start Assessment for emergency dispatch.</em>"
  },
  fever: {
    keywords: ["fever", "temperature", "hot", "burning up", "high temperature"],
    response: "🌡️ <strong>High Fever Alert!</strong><br><br>Monitor closely and take these steps:<br><br>✅ <strong>Cool wet cloths</strong> to forehead and neck<br>✅ <strong>Keep patient hydrated</strong> with fluids<br>✅ Paracetamol if appropriate for age<br>✅ Remove excess clothing<br>❌ No ice water — too cold<br><br>⚠️ <strong>WARNING:</strong> If fever above 40°C with stiff neck or rash — CALL EMERGENCY IMMEDIATELY!<br><br>⚠️ Risk Level: <span style='color:#ffcc00'>MODERATE-HIGH</span><br>🚑 Recommended: <strong>Basic Ambulance</strong>"
  },
  accident: {
    keywords: ["accident", "crash", "collision", "injury", "fall", "trauma", "hit"],
    response: "🚗 <strong>Accident / Trauma Emergency!</strong><br><br>Critical steps to take now:<br><br>✅ <strong>DO NOT MOVE patient</strong> if spine injury suspected<br>✅ <strong>Immobilize head and neck</strong><br>✅ Control visible bleeding with pressure<br>✅ Keep patient warm and still<br>❌ Do NOT remove helmet<br>❌ Do NOT give water to unconscious patient<br><br>⚠️ Risk Level: <span style='color:#ff6b35'>HIGH</span><br>🚑 Recommended: <strong>ICU Ambulance</strong><br>🏥 Hospital: <strong>Trauma Center</strong>"
  },
  breathing: {
    keywords: ["breathing", "breath", "inhale", "exhale", "asthma", "choking", "suffocating", "cant breathe", "can't breathe", "respiratory"],
    response: "🫁 <strong>Breathing Emergency Detected!</strong><br><br>IMMEDIATE ACTION REQUIRED:<br><br>✅ <strong>Sit upright — lean forward</strong><br>✅ <strong>Loosen ALL tight clothing</strong><br>✅ Use inhaler if available<br>✅ Stay calm — breathe slowly<br>✅ Allow fresh air flow<br><br>🔴 If lips/nails turn blue → <strong>CRITICAL EMERGENCY</strong><br><br>⚠️ Risk Level: <span style='color:#ff2d55'>CRITICAL</span><br>🚑 Recommended: <strong>Oxygen Ambulance</strong><br>🏥 Hospital: <strong>Pulmonary ICU Center</strong>"
  },
  unconsciousness: {
    keywords: ["unconscious", "fainted", "passed out", "not responding", "unresponsive", "collapsed"],
    response: "⚠️ <strong>UNCONSCIOUSNESS DETECTED — CRITICAL!</strong><br><br>Act NOW:<br><br>✅ <strong>Check breathing</strong> — look, listen, feel<br>✅ If breathing: <strong>place in recovery position</strong> (on side)<br>✅ If NOT breathing: <strong>START CPR IMMEDIATELY</strong><br>&nbsp;&nbsp;&nbsp;→ 30 chest compressions + 2 rescue breaths<br>✅ <strong>Call emergency services NOW</strong><br><br>🔴 Risk Level: <span style='color:#ff2d55'>CRITICAL — DO NOT DELAY</span><br>🚑 Recommended: <strong>ICU Ambulance</strong>"
  },
  burns: {
    keywords: ["burn", "burns", "fire", "scalded", "chemical burn", "hot water"],
    response: "🔥 <strong>Burns Emergency Detected!</strong><br><br>Critical first aid:<br><br>✅ <strong>COOL with running water for 20 minutes</strong><br>✅ Remove clothing/jewelry near burn<br>✅ Cover with clean cling film or plastic bag<br>❌ <strong>NEVER use ice, butter or creams</strong><br>❌ Do NOT break blisters<br><br>🔴 For face/airway burns → <strong>CALL EMERGENCY — airway can swell</strong><br><br>⚠️ Risk Level: <span style='color:#ff6b35'>HIGH</span><br>🚑 Recommended: <strong>ICU Ambulance</strong><br>🏥 Hospital: <strong>Burns Center</strong>"
  },
  seizure: {
    keywords: ["seizure", "convulsion", "epilepsy", "fit", "shaking", "convulsing"],
    response: "⚡ <strong>Seizure Emergency Detected!</strong><br><br>DO THIS RIGHT NOW:<br><br>✅ <strong>Clear area of hazards</strong> immediately<br>✅ <strong>Cushion the head</strong> — do not restrain<br>✅ <strong>Time the seizure</strong> duration<br>❌ <strong>NEVER put anything in mouth</strong><br>✅ After: place on side (recovery position)<br><br>🔴 Call emergency if: First seizure OR lasts >5 minutes<br><br>⚠️ Risk Level: <span style='color:#ff6b35'>HIGH</span><br>🚑 Recommended: <strong>ICU Ambulance</strong>"
  },
  default: {
    response: "👋 I'm <strong>Juhi AI</strong>, your emergency assistant.<br><br>Tell me your emergency symptoms and I'll provide:<br>• Immediate first aid guidance<br>• Emergency severity assessment<br>• Ambulance recommendation<br>• Hospital recommendation<br><br>You can also describe any of these:<br>🫀 Chest pain &nbsp; 🩸 Bleeding &nbsp; 🫁 Breathing<br>🚗 Accident &nbsp; 🔥 Burns &nbsp; ⚡ Seizure<br>🌡️ Fever &nbsp; 😵 Unconscious<br><br><em>Or use the Assessment tool above for full AI analysis.</em>"
  }
};

let selectedSymptom = null;
let assessmentAnswers = {};
let sliderValue = 5;
let chatOpen = false;

function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 35; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.width = (Math.random() * 3 + 1) + 'px';
    p.style.height = p.style.width;
    p.style.animationDuration = (Math.random() * 15 + 10) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    const opacity = Math.random() * 0.6 + 0.2;
    p.style.opacity = opacity;
    container.appendChild(p);
  }
}

function selectSymptom(card) {
  document.querySelectorAll('.symptom-card').forEach(c => c.classList.remove('active'));
  card.classList.add('active');
  selectedSymptom = card.getAttribute('data-symptom');
  assessmentAnswers = {};
  renderQuestions(selectedSymptom);
  setTimeout(() => {
    document.getElementById('questionsSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 150);
}

function renderQuestions(symptomKey) {
  const data = emergencyData[symptomKey];
  const section = document.getElementById('questionsSection');
  const container = document.getElementById('questionsContainer');
  section.style.display = 'block';
  document.getElementById('analysisSection').style.display = 'none';
  document.getElementById('predictionSection').style.display = 'none';
  document.getElementById('suggestionsSection').style.display = 'none';
  document.getElementById('summarySection').style.display = 'none';
  container.innerHTML = '';

  data.questions.forEach((q, idx) => {
    const item = document.createElement('div');
    item.className = 'question-item';
    item.style.animationDelay = (idx * 0.08) + 's';

    if (q.type === 'slider') {
      item.innerHTML = `
        <div class="question-label">${q.text}</div>
        <input type="range" min="1" max="10" value="5" class="severity-slider" id="slider_${q.id}"
          oninput="updateSlider(this, '${q.id}')">
        <div class="slider-labels">
          <span>1 - Mild</span>
          <span id="sliderVal_${q.id}">5</span>
          <span>10 - Severe</span>
        </div>`;
    } else {
      const optionBtns = q.options.map((opt, oi) =>
        `<button class="q-opt" onclick="selectOption(this, '${q.id}', '${opt}')">${opt}</button>`
      ).join('');
      item.innerHTML = `
        <div class="question-label">${q.text}</div>
        <div class="q-options">${optionBtns}</div>`;
    }
    container.appendChild(item);
  });
}

function updateSlider(el, id) {
  document.getElementById('sliderVal_' + id).textContent = el.value;
  assessmentAnswers[id] = parseInt(el.value);
}

function selectOption(btn, id, value) {
  const group = btn.closest('.q-options');
  group.querySelectorAll('.q-opt').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  assessmentAnswers[id] = value;
}

function calculateSeverityScore() {
  if (!selectedSymptom) return 50;
  const data = emergencyData[selectedSymptom];
  let score = 0;
  let factors = 0;

  for (const [key, val] of Object.entries(assessmentAnswers)) {
    if (key === 'severity' && typeof val === 'number') {
      score += (val / 10) * 100;
      factors++;
      continue;
    }
    const valLower = (val + '').toLowerCase();
    if (valLower.includes('severe') || valLower.includes('critical') || valLower.includes('cannot')
        || valLower.includes('unconscious') || valLower.includes('massive') || valLower.includes('worst')
        || valLower.includes('immediate') || valLower.includes('unbearable') || valLower.includes('cannot')
        || valLower.includes('yes') || valLower.includes('high') || valLower.includes('collapsed')
        || valLower.includes('heavy') || valLower.includes('head') || valLower.includes('third')) {
      score += 90;
    } else if (valLower.includes('moderate') || valLower.includes('confused') || valLower.includes('mild')
               || valLower.includes('slight') || valLower.includes('second') || valLower.includes('somewhat')) {
      score += 60;
    } else {
      score += 25;
    }
    factors++;
  }

  const baseScore = data.predictions.high.score;
  const calculatedScore = factors > 0 ? Math.round(score / factors) : 50;
  return Math.min(99, Math.max(20, Math.round((baseScore * 0.5) + (calculatedScore * 0.5))));
}

function getSeverityLevel(score) {
  if (score >= 80) return 'critical';
  if (score >= 60) return 'high';
  if (score >= 40) return 'moderate';
  return 'low';
}

function getSeverityLabel(score) {
  if (score >= 80) return 'CRITICAL EMERGENCY';
  if (score >= 60) return 'HIGH RISK';
  if (score >= 40) return 'MODERATE RISK';
  return 'LOW RISK';
}

function analyzeEmergency() {
  if (!selectedSymptom) {
    showToast('Please select an emergency symptom first.');
    return;
  }

  const score = calculateSeverityScore();
  const level = getSeverityLevel(score);
  const data = emergencyData[selectedSymptom];
  const predictionData = score >= 60 ? data.predictions.high : data.predictions.low;

  document.getElementById('analysisSection').style.display = 'block';
  document.getElementById('predictionSection').style.display = 'none';
  document.getElementById('suggestionsSection').style.display = 'none';
  document.getElementById('summarySection').style.display = 'none';

  setTimeout(() => {
    document.getElementById('analysisSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);

  const ringFill = document.getElementById('ringFill');
  const circumference = 314;
  ringFill.style.strokeDashoffset = circumference;

  const colorMap = { critical: '#ff2d55', high: '#ff6b35', moderate: '#ffcc00', low: '#00ff88' };
  ringFill.style.stroke = colorMap[level];

  setTimeout(() => {
    const offset = circumference - (score / 100) * circumference;
    ringFill.style.strokeDashoffset = offset;
    document.getElementById('ringScore').textContent = score + '%';
  }, 300);

  document.querySelectorAll('.slabel').forEach(el => el.classList.remove('active'));
  const activeLabelEl = document.querySelector('.slabel.' + level);
  if (activeLabelEl) activeLabelEl.classList.add('active');

  const badgeEl = document.getElementById('emergencyBadge');
  const badgeText = document.getElementById('badgeText');
  badgeText.textContent = getSeverityLabel(score);
  badgeEl.style.borderColor = colorMap[level];
  badgeEl.style.background = colorMap[level] + '18';

  const scanAnim = [
    { id: 'sv1', val: 'COMPLETE', delay: 400 },
    { id: 'sv2', val: Math.round(score * 0.97) + '%', delay: 800 },
    { id: 'sv3', val: level.toUpperCase(), delay: 1200 },
    { id: 'sv4', val: predictionData.confidence + '%', delay: 1600 }
  ];
  scanAnim.forEach(item => {
    document.getElementById(item.id).textContent = '--';
    setTimeout(() => { document.getElementById(item.id).textContent = item.val; }, item.delay);
  });

  const criticalAlert = document.getElementById('criticalAlert');
  if (level === 'critical') {
    criticalAlert.style.display = 'flex';
    document.body.classList.add('critical-mode');
  } else {
    criticalAlert.style.display = 'none';
    document.body.classList.remove('critical-mode');
  }

  setTimeout(() => {
    renderPredictions(score, predictionData, data);
    renderSuggestions(data.suggestions);
    renderSummary(score, level, predictionData, data);
    highlightAmbulance(predictionData.ambulance);
    updateETA(predictionData.ambulance);
  }, 2200);
}

function renderPredictions(score, pred, data) {
  const section = document.getElementById('predictionSection');
  const grid = document.getElementById('predictionGrid');
  section.style.display = 'block';

  const level = getSeverityLevel(score);
  const cards = [
    { icon: '&#129302;', label: 'AI Condition', value: pred.condition, cls: level },
    { icon: '&#9888;', label: 'Severity Level', value: pred.severity, cls: level },
    { icon: '&#128200;', label: 'Emergency Score', value: score + ' / 100', cls: '' },
    { icon: '&#127919;', label: 'AI Confidence', value: pred.confidence + '%', cls: '' },
    { icon: '&#128657;', label: 'Recommended Ambulance', value: pred.ambulance, cls: '' },
    { icon: '&#127973;', label: 'Recommended Hospital', value: pred.hospital, cls: '' },
    { icon: '&#9193;', label: 'Response Priority', value: pred.priority, cls: level },
    { icon: '&#128205;', label: 'ETA (Ambulance)', value: getETAByAmbulance(pred.ambulance), cls: '' }
  ];

  grid.innerHTML = '';
  cards.forEach((card, i) => {
    const el = document.createElement('div');
    el.className = 'prediction-card';
    el.style.animationDelay = (i * 0.1) + 's';
    el.innerHTML = `
      <div class="pred-icon">${card.icon}</div>
      <div class="pred-label">${card.label}</div>
      <div class="pred-value ${card.cls}">${card.value}</div>`;
    grid.appendChild(el);
  });

  setTimeout(() => {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

function renderSuggestions(suggestions) {
  const section = document.getElementById('suggestionsSection');
  const container = document.getElementById('suggestionsContainer');
  section.style.display = 'block';
  container.innerHTML = '';

  suggestions.forEach((s, i) => {
    const item = document.createElement('div');
    item.className = 'suggestion-item';
    item.style.animationDelay = (i * 0.08) + 's';
    item.innerHTML = `
      <div class="sug-icon">${s.icon}</div>
      <div class="sug-text">${s.text}</div>`;
    container.appendChild(item);
  });
}

function renderSummary(score, level, pred, data) {
  const section = document.getElementById('summarySection');
  const grid = document.getElementById('summaryGrid');
  section.style.display = 'block';

  const items = [
    { label: 'Emergency Condition', value: pred.condition },
    { label: 'Emergency Score', value: score + '/100' },
    { label: 'Severity Level', value: pred.severity, cls: level },
    { label: 'Recommended Ambulance', value: pred.ambulance },
    { label: 'Recommended Hospital', value: pred.hospital },
    { label: 'Ambulance ETA', value: getETAByAmbulance(pred.ambulance) },
    { label: 'Priority Status', value: pred.priority, cls: level }
  ];

  grid.innerHTML = '';
  items.forEach(item => {
    const el = document.createElement('div');
    el.className = 'summary-item';
    el.innerHTML = `
      <div class="sum-label">${item.label}</div>
      <div class="sum-value ${item.cls || ''}">${item.value}</div>`;
    grid.appendChild(el);
  });

  setTimeout(() => {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 200);
}

function highlightAmbulance(ambName) {
  const map = {
    'Basic Ambulance': 'amb_basic',
    'Oxygen Ambulance': 'amb_oxygen',
    'ICU Ambulance': 'amb_icu',
    'Cardiac Ambulance': 'amb_cardiac'
  };
  document.querySelectorAll('.ambulance-card').forEach(c => c.classList.remove('recommended'));
  const targetId = map[ambName];
  if (targetId) {
    const card = document.getElementById(targetId);
    if (card) {
      card.classList.add('recommended');
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
}

function getETAByAmbulance(ambName) {
  const etaMap = {
    'Basic Ambulance': '8-12 min',
    'Oxygen Ambulance': '6-10 min',
    'ICU Ambulance': '5-8 min',
    'Cardiac Ambulance': '4-7 min'
  };
  return etaMap[ambName] || '6-10 min';
}

function updateETA(ambName) {
  const eta = getETAByAmbulance(ambName);
  document.getElementById('etaDisplay').textContent = eta;
}

function toggleChat() {
  chatOpen = !chatOpen;
  const win = document.getElementById('chatWindow');
  const bubble = document.getElementById('chatBubble');
  if (chatOpen) {
    win.classList.add('open');
    bubble.style.transform = 'scale(0.9)';
    document.getElementById('chatInput').focus();
  } else {
    win.classList.remove('open');
    bubble.style.transform = '';
  }
}

function quickChat(text) {
  document.getElementById('chatInput').value = text;
  sendChat();
}

function handleChatKey(e) {
  if (e.key === 'Enter') sendChat();
}

function sendChat() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  appendMessage(text, 'user');
  input.value = '';

  const typingEl = showTyping();

  setTimeout(() => {
    typingEl.remove();
    const response = getJuhiResponse(text);
    appendBotMessage(response);
  }, 1200 + Math.random() * 600);
}

function appendMessage(text, type) {
  const messages = document.getElementById('chatMessages');
  const msg = document.createElement('div');
  msg.className = 'msg ' + (type === 'user' ? 'user-msg' : 'bot-msg');
  msg.innerHTML = `
    <div class="msg-avatar">${type === 'user' ? '👤' : '🤖'}</div>
    <div class="msg-bubble">${text}</div>`;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

function appendBotMessage(html) {
  const messages = document.getElementById('chatMessages');
  const msg = document.createElement('div');
  msg.className = 'msg bot-msg';
  msg.innerHTML = `
    <div class="msg-avatar">🤖</div>
    <div class="msg-bubble">${html}</div>`;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

function showTyping() {
  const messages = document.getElementById('chatMessages');
  const typing = document.createElement('div');
  typing.className = 'msg bot-msg';
  typing.innerHTML = `
    <div class="msg-avatar">🤖</div>
    <div class="typing-indicator">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>`;
  messages.appendChild(typing);
  messages.scrollTop = messages.scrollHeight;
  return typing;
}

function getJuhiResponse(text) {
  const lower = text.toLowerCase();

  for (const [key, data] of Object.entries(chatResponses)) {
    if (key === 'default') continue;
    if (data.keywords && data.keywords.some(kw => lower.includes(kw))) {
      return data.response;
    }
  }

  if (lower.includes('hello') || lower.includes('hi') || lower.includes('help')) {
    return chatResponses.default.response;
  }
  if (lower.includes('ambulance')) {
    return "🚑 <strong>Ambulance Types Available:</strong><br><br>• <strong>Basic Ambulance</strong> — Minor emergencies (ETA: 8-12 min)<br>• <strong>Oxygen Ambulance</strong> — Breathing issues (ETA: 6-10 min)<br>• <strong>ICU Ambulance</strong> — Severe emergencies (ETA: 5-8 min)<br>• <strong>Cardiac Ambulance</strong> — Heart emergencies (ETA: 4-7 min)<br><br>Use the <strong>Assessment Tool</strong> above for automatic recommendation.";
  }
  if (lower.includes('hospital')) {
    return "🏥 <strong>Hospital Types in Network:</strong><br><br>• Heart & Trauma Center<br>• Trauma & Surgical Center<br>• Pulmonary ICU Center<br>• Neurology Stroke Center<br>• Burns & Trauma Center<br>• Maternity & Obstetric Unit<br>• General Emergency Hospital<br><br>All hospitals are <span style='color:#00ff88'>OPEN</span> and on standby 24/7.";
  }
  if (lower.includes('stroke')) {
    return chatResponses.breathing.response.replace('Breathing Emergency', 'Stroke Detected') + "<br><br>Remember FAST: <strong>F</strong>ace drooping, <strong>A</strong>rm weakness, <strong>S</strong>peech difficulty, <strong>T</strong>ime to call!";
  }

  return "I detected your message but need more specific symptoms to help. Could you describe:<br><br>• Your <strong>main symptom</strong> (chest pain, bleeding, etc.)<br>• <strong>How long</strong> it's been happening<br>• <strong>Severity</strong> (mild, moderate, severe)<br><br>Or use the <strong>Assessment Tool</strong> above for a full AI analysis. 🤖";
}

function voiceInput() {
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.start();
    showToast('🎤 Listening... Speak now');
    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      document.getElementById('chatInput').value = transcript;
      sendChat();
    };
    recognition.onerror = () => showToast('Voice input not available');
  } else {
    showToast('Voice input not supported in this browser');
  }
}

function bookAmbulance() {
  showToast('🚑 Dispatching ambulance... Emergency services notified!');
  setTimeout(() => showToast('✅ Ambulance booked! ETA: 6-8 minutes'), 2000);
}

function callEmergency() {
  showToast('📞 Calling Emergency Services: 112');
  setTimeout(() => { window.location.href = 'tel:112'; }, 500);
}

function shareLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const { latitude, longitude } = pos.coords;
        showToast(`📍 Location shared: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
      },
      () => showToast('📍 Location sharing requires permission')
    );
  } else {
    showToast('📍 Geolocation not available on this device');
  }
}

function contactFamily() {
  showToast('📱 Sending emergency alert to family contacts...');
  setTimeout(() => showToast('✅ Family notified via SMS & app alert'), 1800);
}

function startNavigation() {
  showToast('🗺️ Starting emergency navigation to nearest hospital...');
  setTimeout(() => window.open('https://maps.google.com/?q=nearest+hospital+emergency', '_blank'), 800);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

function animateHospitalBars() {
  const bars = document.querySelectorAll('.hstat-fill, .readiness-fill');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.style.width;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(bar => observer.observe(bar));
}

function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.priority-card, .ambulance-card, .hospital-stat-card, .workflow-step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  animateHospitalBars();
  setTimeout(initScrollAnimations, 100);

  appendBotMessage("Hello! I'm <strong>Juhi AI</strong> — your Emergency Assistant. 🚑<br><br>I'm here 24/7 to help with emergency guidance. Tell me your symptoms or tap a quick action button below. ❤️");
});
