const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeToggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  mobileMenuBtn.innerHTML = mobileMenu.classList.contains('open')
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

const notifBtn = document.getElementById('notifBtn');
const notifWrap = notifBtn.closest('.notif-wrap');
notifBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  notifWrap.classList.toggle('open');
});
document.addEventListener('click', () => notifWrap.classList.remove('open'));

document.querySelector('.mark-read').addEventListener('click', () => {
  document.querySelectorAll('.notif-item.unread').forEach(el => el.classList.remove('unread'));
  document.querySelector('.badge').style.display = 'none';
  showToast('All notifications marked as read', 'success');
});

function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseFloat(el.getAttribute('data-target'));
    const isFloat = target % 1 !== 0;
    let start = 0;
    const duration = 2000;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      el.textContent = isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { animateCounters(); heroObserver.disconnect(); } });
}, { threshold: .3 });
heroObserver.observe(document.querySelector('.hero-stats'));

function animateCircles() {
  document.querySelectorAll('.health-circle').forEach(el => {
    const value = parseFloat(el.getAttribute('data-value'));
    const max = parseFloat(el.getAttribute('data-max'));
    const color = el.getAttribute('data-color');
    const circumference = 326.7;
    const offset = circumference - (value / max) * circumference;
    const fill = el.querySelector('.circle-fill');
    if (fill) {
      setTimeout(() => { fill.style.strokeDashoffset = offset; fill.style.stroke = color; }, 300);
    }
  });
}
const circleObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { animateCircles(); circleObserver.disconnect(); } });
}, { threshold: .2 });
const hd = document.getElementById('healthDashboard');
if (hd) circleObserver.observe(hd);

document.querySelectorAll('.timeline-item').forEach(item => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.disconnect(); } });
  }, { threshold: .2 });
  obs.observe(item);
});

const modalData = {
  prescriptions: {
    title: 'Prescriptions',
    icon: 'fas fa-prescription-bottle-alt',
    files: [
      { name: 'Montelukast_10mg_Dec2024.pdf', date: 'Dec 15, 2024', size: '0.8 MB' },
      { name: 'Salbutamol_Inhaler_Sep2024.pdf', date: 'Sep 10, 2024', size: '1.1 MB' },
      { name: 'Vitamin_D3_Supplement_Nov2023.pdf', date: 'Nov 20, 2023', size: '0.6 MB' }
    ]
  },
  labReports: {
    title: 'Lab Reports',
    icon: 'fas fa-flask',
    files: [
      { name: 'CBC_BloodTest_Dec2024.pdf', date: 'Dec 15, 2024', size: '2.4 MB' },
      { name: 'LipidProfile_Nov2023.pdf', date: 'Nov 22, 2023', size: '1.8 MB' },
      { name: 'ThyroidFunction_Jul2024.pdf', date: 'Jul 8, 2024', size: '2.1 MB' }
    ]
  },
  xrays: {
    title: 'X-Rays',
    icon: 'fas fa-x-ray',
    files: [
      { name: 'Chest_Xray_Oct2024.jpg', date: 'Oct 22, 2024', size: '5.1 MB' },
      { name: 'Spine_Xray_Mar2023.jpg', date: 'Mar 15, 2023', size: '4.8 MB' }
    ]
  },
  insurance: {
    title: 'Insurance Documents',
    icon: 'fas fa-file-contract',
    files: [
      { name: 'Health_Policy_2024.pdf', date: 'Jan 1, 2024', size: '3.2 MB' },
      { name: 'Claim_Form_Dec2024.pdf', date: 'Dec 16, 2024', size: '1.5 MB' }
    ]
  },
  emergencyHistory: {
    title: 'Emergency History',
    icon: 'fas fa-ambulance',
    files: [
      { name: 'Asthma_Emergency_Mar2023.pdf', date: 'Mar 15, 2023', size: '2.0 MB' },
      { name: 'Discharge_Summary_Mar2023.pdf', date: 'Mar 17, 2023', size: '1.4 MB' }
    ]
  },
  vaccination: {
    title: 'Vaccination Records',
    icon: 'fas fa-syringe',
    files: [
      { name: 'COVID_Booster_Aug2024.pdf', date: 'Aug 5, 2024', size: '0.5 MB' },
      { name: 'Flu_Vaccine_Oct2024.pdf', date: 'Oct 1, 2024', size: '0.4 MB' },
      { name: 'Hepatitis_B_2022.pdf', date: 'Jun 12, 2022', size: '0.6 MB' }
    ]
  },
  mri: {
    title: 'MRI Reports',
    icon: 'fas fa-brain',
    files: [
      { name: 'Brain_MRI_Jul2024.pdf', date: 'Jul 18, 2024', size: '12.4 MB' },
      { name: 'Spine_MRI_Feb2024.pdf', date: 'Feb 10, 2024', size: '15.2 MB' }
    ]
  },
  ecg: {
    title: 'ECG Reports',
    icon: 'fas fa-heartbeat',
    files: [
      { name: 'ECG_Routine_Sep2024.pdf', date: 'Sep 18, 2024', size: '1.2 MB' },
      { name: 'ECG_Emergency_Mar2023.pdf', date: 'Mar 15, 2023', size: '0.9 MB' }
    ]
  }
};

function openModal(type) {
  const data = modalData[type];
  if (!data) return;
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalIcon').className = data.icon;
  const body = document.getElementById('modalBody');
  body.innerHTML = data.files.map(f => `
    <div class="modal-file-item">
      <i class="${f.name.endsWith('.pdf') ? 'fas fa-file-pdf' : 'fas fa-file-image'}" style="color:${f.name.endsWith('.pdf') ? 'var(--red)' : 'var(--blue)'}"></i>
      <div>
        <span>${f.name}</span>
        <small>${f.date} · ${f.size}</small>
      </div>
      <div class="modal-file-btns">
        <button onclick="showToast('Opening ${f.name}','info')"><i class="fas fa-eye"></i> View</button>
        <button onclick="showToast('Downloading ${f.name}','success')"><i class="fas fa-download"></i></button>
      </div>
    </div>
  `).join('');
  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('recordModal').classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('recordModal').classList.remove('open');
}

function triggerEmergencyMode() {
  document.getElementById('emergencyMsg').textContent = 'Sharing medical records with emergency services...';
  document.getElementById('emergencyOverlay').classList.add('active');
}

function closeEmergency() {
  document.getElementById('emergencyOverlay').classList.remove('active');
}

function callAmbulance() {
  showToast('Calling Emergency Services (108)...', 'error');
  closeEmergency();
}

function showToast(msg, type = 'info', duration = 3200) {
  const icons = { success: 'fas fa-check-circle', error: 'fas fa-exclamation-circle', info: 'fas fa-info-circle' };
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="${icons[type]}"></i><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(-20px)'; toast.style.transition = 'all .3s'; setTimeout(() => toast.remove(), 300); }, duration);
}

const uploadZone = document.getElementById('uploadZone');
const fileInput = document.getElementById('fileInput');

['dragover', 'dragenter'].forEach(e => uploadZone.addEventListener(e, ev => { ev.preventDefault(); uploadZone.classList.add('dragover'); }));
['dragleave', 'dragend'].forEach(e => uploadZone.addEventListener(e, () => uploadZone.classList.remove('dragover')));
uploadZone.addEventListener('drop', ev => {
  ev.preventDefault();
  uploadZone.classList.remove('dragover');
  Array.from(ev.dataTransfer.files).forEach(f => handleFileUpload(f));
});
fileInput.addEventListener('change', () => Array.from(fileInput.files).forEach(f => handleFileUpload(f)));

function handleFileUpload(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  const isPDF = ext === 'pdf';
  const size = (file.size / (1024 * 1024)).toFixed(1);
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  const container = document.getElementById('uploadedFiles');
  const item = document.createElement('div');
  item.className = 'file-item';
  item.innerHTML = `
    <div class="file-icon ${isPDF ? 'pdf' : 'img'}"><i class="fas fa-file-${isPDF ? 'pdf' : 'image'}"></i></div>
    <div class="file-info">
      <span class="file-name">${file.name}</span>
      <span class="file-meta">${size} MB · Uploaded ${dateStr}</span>
      <div class="upload-progress"><div class="upload-progress-bar" style="width:0%"></div></div>
    </div>
    <div class="file-actions">
      <button onclick="showToast('File preview opened','info')"><i class="fas fa-eye"></i></button>
      <button onclick="showToast('Downloading file','success')"><i class="fas fa-download"></i></button>
      <button class="delete-btn" onclick="this.closest('.file-item').remove()"><i class="fas fa-trash"></i></button>
    </div>
  `;
  container.prepend(item);
  const bar = item.querySelector('.upload-progress-bar');
  let pct = 0;
  const interval = setInterval(() => {
    pct += Math.random() * 20;
    if (pct >= 100) { pct = 100; clearInterval(interval); setTimeout(() => { bar.parentElement.remove(); showToast(`${file.name} uploaded successfully`, 'success'); addActivityLog(file.name); }, 400); }
    bar.style.width = pct + '%';
  }, 200);
}

function addActivityLog(name) {
  const list = document.getElementById('recentUploads');
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const item = document.createElement('div');
  item.className = 'act-item';
  item.innerHTML = `<div class="act-dot blue"></div><div><p>${name} uploaded</p><span>Today, ${timeStr}</span></div>`;
  list.prepend(item);
}

function simulateScan() {
  showToast('Camera initializing for document scan...', 'info');
  setTimeout(() => showToast('Document scanned and processed successfully', 'success'), 2000);
}

function shareWithHospital() {
  showToast('Generating secure share link for hospital...', 'info');
  setTimeout(() => showToast('Share link created — valid for 24 hours', 'success'), 1500);
}

function previewFile(btn) {
  showToast('Opening document preview...', 'info');
}

function generateQR() {
  showToast('Generating new emergency QR code...', 'info');
  setTimeout(() => showToast('New QR code generated — valid for 2 hours', 'success'), 1500);
}

function emergencyShare() {
  showToast('Sharing records with emergency contacts...', 'error');
  setTimeout(() => showToast('Records shared successfully with 3 contacts', 'success'), 2000);
}

function grantHospitalAccess() {
  showToast('Granting temporary hospital access...', 'info');
  setTimeout(() => showToast('Hospital access granted — expires in 4 hours', 'success'), 1500);
}

const lockToggle = document.getElementById('lockToggle');
let isLocked = false;
function toggleLock() {
  isLocked = !isLocked;
  lockToggle.innerHTML = isLocked
    ? '<i class="fas fa-lock"></i><span>Emergency Lock</span>'
    : '<i class="fas fa-lock-open"></i><span>Emergency Unlock</span>';
  lockToggle.style.background = isLocked ? 'rgba(239,68,68,.15)' : '';
  lockToggle.style.color = isLocked ? 'var(--red)' : '';
  showToast(isLocked ? 'Emergency mode locked' : 'Emergency unlock activated', isLocked ? 'info' : 'success');
}

function triggerSOS() {
  document.getElementById('emergencyMsg').textContent = 'SOS Alert sent to emergency contacts. Ambulance being dispatched...';
  document.getElementById('emergencyOverlay').classList.add('active');
}

let breathingActive = false;
let breathingInterval = null;
let breathPhase = 0;
const phases = [
  { text: 'Inhale', duration: 4, class: 'breathing-inhale' },
  { text: 'Hold', duration: 4, class: '' },
  { text: 'Exhale', duration: 4, class: 'breathing-exhale' }
];

function startBreathing() {
  document.getElementById('breathingSection').style.display = 'block';
  document.getElementById('breathingSection').scrollIntoView({ behavior: 'smooth', block: 'center' });
  if (breathingActive) return;
  breathingActive = true;
  document.getElementById('breathStart').innerHTML = '<i class="fas fa-pause"></i> Running...';
  runBreathPhase();
}

function runBreathPhase() {
  if (!breathingActive) return;
  const circle = document.getElementById('breathingCircle');
  const timerEl = document.getElementById('breathTimer');
  const phaseEl = document.getElementById('breathPhase');
  const phase = phases[breathPhase % 3];
  circle.textContent = phase.text;
  phaseEl.textContent = phase.text + (breathPhase % 3 === 0 ? ' slowly and deeply...' : breathPhase % 3 === 1 ? '...' : ' slowly...');
  circle.className = 'breathing-circle ' + phase.class;
  let seconds = phase.duration;
  timerEl.textContent = seconds + 's';
  const countInterval = setInterval(() => {
    seconds--;
    timerEl.textContent = seconds + 's';
    if (seconds <= 0) {
      clearInterval(countInterval);
      breathPhase++;
      if (breathingActive) runBreathPhase();
    }
  }, 1000);
  breathingInterval = countInterval;
}

function stopBreathing() {
  breathingActive = false;
  clearInterval(breathingInterval);
  document.getElementById('breathingCircle').textContent = 'Press Start';
  document.getElementById('breathingCircle').className = 'breathing-circle';
  document.getElementById('breathTimer').textContent = '0s';
  document.getElementById('breathPhase').textContent = 'Session ended. Feel calmer?';
  document.getElementById('breathStart').innerHTML = '<i class="fas fa-play"></i> Start Session';
  breathPhase = 0;
}

let tipIndex = 0;
const totalTips = 6;
const visibleTips = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
const dotsContainer = document.getElementById('tipsDots');
const maxIndex = totalTips - visibleTips;

function buildDots() {
  dotsContainer.innerHTML = '';
  for (let i = 0; i <= maxIndex; i++) {
    const d = document.createElement('div');
    d.className = 'tip-dot' + (i === 0 ? ' active' : '');
    d.onclick = () => { tipIndex = i; updateSlider(); };
    dotsContainer.appendChild(d);
  }
}
buildDots();

function updateSlider() {
  const slider = document.getElementById('tipsSlider');
  const cardWidth = slider.querySelector('.tip-card').offsetWidth + 20;
  slider.style.transform = `translateX(-${tipIndex * cardWidth}px)`;
  document.querySelectorAll('.tip-dot').forEach((d, i) => d.classList.toggle('active', i === tipIndex));
}

function slideTips(dir) {
  tipIndex = Math.max(0, Math.min(maxIndex, tipIndex + dir));
  updateSlider();
}

let autoSlideInterval = setInterval(() => { tipIndex = tipIndex >= maxIndex ? 0 : tipIndex + 1; updateSlider(); }, 4000);
document.getElementById('tipsSlider').addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
document.getElementById('tipsSlider').addEventListener('mouseleave', () => { autoSlideInterval = setInterval(() => { tipIndex = tipIndex >= maxIndex ? 0 : tipIndex + 1; updateSlider(); }, 4000); });

const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
let chatOpen = false;

function toggleChatbot() {
  chatOpen = !chatOpen;
  document.getElementById('chatbotWindow').classList.toggle('open', chatOpen);
  if (chatOpen) {
    document.getElementById('fabBadge').style.display = 'none';
    if (chatMessages.children.length === 0) {
      setTimeout(() => addBotMessage("Hello! I'm <strong>JUHI</strong>, your personal healthcare assistant 🩺<br>How can I help you today? You can ask me about symptoms, medications, or use the quick buttons below."), 500);
    }
    chatInput.focus();
  }
}

function addBotMessage(text, isEmergency = false) {
  const now = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const wrap = document.createElement('div');
  wrap.className = 'msg-wrap bot';
  const typing = document.createElement('div');
  typing.className = 'typing-indicator';
  typing.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
  wrap.appendChild(typing);
  chatMessages.appendChild(wrap);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  setTimeout(() => {
    wrap.innerHTML = `
      <div class="msg-bubble${isEmergency ? ' emergency-msg' : ''}">${text}</div>
      <span class="msg-time">${now}</span>
    `;
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 900 + Math.random() * 400);
}

function addUserMessage(text) {
  const now = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const wrap = document.createElement('div');
  wrap.className = 'msg-wrap user';
  wrap.innerHTML = `<div class="msg-bubble">${text}</div><span class="msg-time">${now}</span>`;
  chatMessages.appendChild(wrap);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;
  addUserMessage(text);
  chatInput.value = '';
  processMessage(text.toLowerCase());
}

function sendQuickReply(text) {
  addUserMessage(text);
  processMessage(text.toLowerCase());
}

function processMessage(msg) {
  const keywords = {
    emergency: ['heart attack', 'unconscious', 'severe bleeding', 'accident', 'cannot breathe', 'cant breathe', "can't breathe"],
    breathing: ['breathing', 'breathless', 'chest pain', 'breath', 'breathlessness', 'breathing problem'],
    fever: ['fever', 'temperature', 'body hot', 'high fever', 'body heat', 'feverish'],
    headache: ['headache', 'migraine', 'head pain', 'head ache', 'head hurts'],
    cough: ['cough', 'sore throat', 'throat pain', 'throat', 'cold'],
    stomach: ['stomach pain', 'stomach ache', 'nausea', 'vomiting', 'stomach', 'abdominal'],
    anxiety: ['anxiety', 'panic', 'stress', 'scared', 'anxious', 'worried', 'calm me down', 'calm'],
    notwell: ['not feeling well', 'not well', 'unwell', 'feeling sick', 'sick'],
    upload: ['upload report', 'upload'],
    sos: ['emergency sos', 'sos'],
    ambulance: ['book ambulance', 'ambulance'],
    fever2: ['fever help']
  };

  const match = (list) => list.some(k => msg.includes(k));

  if (match(keywords.emergency)) {
    addBotMessage(`<span style="color:var(--red);font-weight:700"><i class="fas fa-exclamation-triangle"></i> EMERGENCY ALERT</span><br>This sounds like a medical emergency! Please call <strong>108</strong> immediately or have someone call for you.`, true);
    setTimeout(() => {
      document.getElementById('emergencyMsg').textContent = 'Emergency keyword detected! Please seek immediate medical attention.';
      document.getElementById('emergencyOverlay').classList.add('active');
    }, 1200);
  } else if (match(keywords.breathing)) {
    addBotMessage(`⚠️ <strong>Breathing difficulty is serious!</strong><br><br>Please remain calm and try to sit upright. If this is severe, call <strong>108</strong> immediately.<br><br><strong>Immediate steps:</strong><br>• Sit upright, don't lie flat<br>• Loosen tight clothing<br>• Try pursed lip breathing<br>• Use your inhaler if prescribed<br><br>If symptoms don't improve in 5 minutes, seek emergency care immediately.`, true);
    setTimeout(() => triggerSOS(), 2000);
  } else if (match(keywords.fever) || match(keywords.fever2)) {
    addBotMessage(`🌡️ <strong>Fever Management</strong><br><br>I understand you have a fever. Here's what I recommend:<br><br>✅ <strong>Immediate steps:</strong><br>• Rest and stay hydrated (8+ glasses of water)<br>• Eat light, easily digestible foods<br>• Monitor your temperature every 2–3 hours<br>• Apply cool wet cloth on forehead<br><br><div class="medicine-box"><strong>💊 Common Medicines:</strong><br>• <strong>Paracetamol</strong> (500–1000mg) — Adults: every 4–6 hours<br>• <strong>Acetaminophen</strong> — Follow package instructions<br>⚠️ Do not exceed 4g/day. Avoid alcohol.</div><div class="disclaimer-box">⚕️ This is for informational purposes only. Consult a doctor if fever lasts more than 2 days or exceeds 103°F (39.4°C).</div>`);
  } else if (match(keywords.headache)) {
    addBotMessage(`🤕 <strong>Headache Relief</strong><br><br>Here's how to manage your headache:<br><br>✅ <strong>Helpful steps:</strong><br>• Drink 2–3 glasses of water immediately<br>• Rest in a quiet, dark room<br>• Reduce screen time and bright lights<br>• Apply cold/warm compress on temples<br>• Practice gentle neck stretches<br><br><div class="medicine-box"><strong>💊 Suggested Medicines:</strong><br>• <strong>Paracetamol</strong> 500mg — mild headache<br>• <strong>Ibuprofen</strong> 400mg — stronger relief (take with food)<br>⚠️ Avoid overuse. Max 3 doses/day.</div><div class="disclaimer-box">⚕️ Seek medical attention if headache is sudden, severe, or accompanied by vision changes.</div>`);
  } else if (match(keywords.cough)) {
    addBotMessage(`😷 <strong>Cough & Sore Throat Relief</strong><br><br>For cough and throat discomfort:<br><br>✅ <strong>Home remedies:</strong><br>• Drink warm water with honey and lemon<br>• Steam inhalation (10 min, twice daily)<br>• Gargle with warm salt water<br>• Avoid cold drinks and ice cream<br>• Rest your voice<br><br><div class="medicine-box"><strong>💊 OTC Options:</strong><br>• <strong>Throat lozenges</strong> — for sore throat<br>• <strong>Cough syrup</strong> (Dextromethorphan) — for dry cough<br>• <strong>Expectorant syrup</strong> — for wet cough</div><div class="disclaimer-box">⚕️ If cough persists more than 2 weeks or has blood, see a doctor.</div>`);
  } else if (match(keywords.stomach)) {
    addBotMessage(`🤢 <strong>Stomach Pain / Nausea</strong><br><br>For stomach discomfort:<br><br>✅ <strong>What to do:</strong><br>• Stay hydrated with small sips of water<br>• Avoid spicy, oily, or heavy food<br>• Try plain rice, bananas, or toast<br>• Rest in a comfortable position<br>• Drink ginger tea for nausea<br><br><div class="medicine-box"><strong>💊 Common remedies:</strong><br>• <strong>ORS</strong> — for dehydration<br>• <strong>Antacids</strong> — for acidity/heartburn<br>• <strong>Domperidone</strong> — for nausea (consult pharmacist)</div><div class="disclaimer-box">⚕️ ⚠️ Seek immediate medical care if pain is severe, sudden, or accompanied by fever and vomiting blood.</div>`);
  } else if (match(keywords.anxiety)) {
    addBotMessage(`🧘 <strong>I'm here for you.</strong><br><br>It's okay to feel anxious or overwhelmed. Let's work through this together.<br><br>💙 <strong>Right now:</strong><br>• You are safe<br>• Focus on your breathing<br>• Place your feet flat on the floor<br><br>I'm activating a <strong>breathing exercise</strong> to help you calm down. Follow the animated guide — it takes just 2 minutes and will help regulate your nervous system.<br><br>Remember: this feeling will pass. You've got through tough times before. 💪`);
    setTimeout(() => startBreathing(), 1500);
  } else if (match(keywords.notwell)) {
    addBotMessage(`I'm sorry to hear that you're not feeling well 😔<br><br>Can you tell me more about your symptoms? For example:<br><br>🌡️ Fever · 🤕 Headache · 😷 Cough<br>🤢 Stomach pain · 😮‍💨 Breathing difficulty<br>😴 Weakness · 💔 Chest pain<br><br>The more you share, the better I can guide you!`);
  } else if (match(keywords.upload)) {
    addBotMessage(`📄 <strong>Upload Medical Records</strong><br><br>You can upload your documents using the upload section on this page.<br><br>✅ Supported formats: PDF, JPG, PNG<br>📁 Max file size: 50MB per file<br>🔒 All uploads are encrypted and secure<br><br>Scroll up to the <strong>"Document Upload"</strong> section or click the Upload button in the hero area.`);
    document.getElementById('uploadSection').scrollIntoView({ behavior: 'smooth' });
  } else if (match(keywords.sos)) {
    addBotMessage(`🆘 <strong>SOS Emergency Alert</strong><br><br>Triggering emergency alert system now...`, true);
    setTimeout(() => triggerSOS(), 1000);
  } else if (match(keywords.ambulance)) {
    addBotMessage(`🚑 <strong>Booking Ambulance</strong><br><br>Connecting to nearest ambulance service...<br><br>📞 Emergency number: <strong>108</strong><br>📞 Alternative: <strong>102</strong> (Free ambulance service)<br>📍 Your location has been detected<br><br>Please stay on the line and keep your front door unlocked.`, true);
    showToast('Ambulance request sent — ETA: 8 minutes', 'error');
  } else if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
    addBotMessage(`Hello! 👋 Great to see you! I'm JUHI, your healthcare assistant.<br><br>I can help you with:<br>• 🩺 Symptom guidance<br>• 💊 Medication info<br>• 📄 Record management<br>• 🆘 Emergency assistance<br>• 🧘 Stress & breathing exercises<br><br>What can I help you with today?`);
  } else if (msg.includes('thank') || msg.includes('thanks')) {
    addBotMessage(`You're very welcome! 💙 I'm always here whenever you need health guidance or support. Take care of yourself!`);
  } else if (msg.includes('bye') || msg.includes('goodbye')) {
    addBotMessage(`Take care and stay healthy! 🌟 Remember, your health is your greatest wealth. I'll be here whenever you need me. Goodbye! 👋`);
  } else {
    addBotMessage(`I understand you're looking for help. Could you be more specific about your symptoms or what you need?<br><br>You can ask me about:<br>🌡️ Fever · 🤕 Headache · 😷 Cough · 🤢 Stomach pain<br>😮‍💨 Breathing issues · 😰 Anxiety · 🆘 Emergency<br><br>Or use the quick reply buttons below for instant guidance!`);
  }
}

let voiceActive = false;
let recognition = null;
function toggleVoice() {
  const btn = document.getElementById('voiceBtn');
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    showToast('Voice input not supported in this browser', 'error');
    return;
  }
  if (voiceActive) {
    recognition && recognition.stop();
    voiceActive = false;
    btn.classList.remove('active');
    return;
  }
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = 'en-IN';
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.onresult = (e) => {
    chatInput.value = e.results[0][0].transcript;
    sendMessage();
    voiceActive = false;
    btn.classList.remove('active');
  };
  recognition.onerror = () => { voiceActive = false; btn.classList.remove('active'); showToast('Voice input error. Try again.', 'error'); };
  recognition.onend = () => { voiceActive = false; btn.classList.remove('active'); };
  recognition.start();
  voiceActive = true;
  btn.classList.add('active');
  showToast('Listening... speak now', 'info');
}

document.querySelectorAll('.file-actions .delete-btn').forEach(btn => {
  btn.addEventListener('click', () => btn.closest('.file-item').remove());
});

window.addEventListener('resize', () => { buildDots(); updateSlider(); });
