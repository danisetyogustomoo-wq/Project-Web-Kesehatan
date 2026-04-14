const foodData = {
  nasi: { calories: 204, protein: 4.2, carbs: 44.4, fat: 0.4 },
  ayam: { calories: 239, protein: 27.3, carbs: 0, fat: 13.6 },
  telur: { calories: 155, protein: 13, carbs: 1.1, fat: 11 },
  alpukat: { calories: 160, protein: 2, carbs: 8.5, fat: 14.7 },
  pisang: { calories: 89, protein: 1.1, carbs: 22.8, fat: 0.3 },
  kentang: { calories: 77, protein: 2, carbs: 17, fat: 0.1 },
  sarden: { calories: 208, protein: 25, carbs: 0, fat: 11.5 },
  sayur: { calories: 35, protein: 2.1, carbs: 7.2, fat: 0.4 },
  salmon: { calories: 208, protein: 20, carbs: 0, fat: 13 },
  oats: { calories: 389, protein: 16.9, carbs: 66.3, fat: 6.9 },
  apel: { calories: 52, protein: 0.3, carbs: 14, fat: 0.2 },
  brokoli: { calories: 55, protein: 3.7, carbs: 11.1, fat: 0.6 },
  tempe: { calories: 193, protein: 19, carbs: 9.4, fat: 11.4 },
  tahu: { calories: 76, protein: 8, carbs: 1.9, fat: 4.8 },
  yogurt: { calories: 59, protein: 10, carbs: 3.6, fat: 0.4 },
  daging: { calories: 271, protein: 26, carbs: 0, fat: 17.6 },
  ikan: { calories: 124, protein: 24, carbs: 0, fat: 2.7 },
  susu: { calories: 61, protein: 3.2, carbs: 4.8, fat: 3.3 },
  keju: { calories: 402, protein: 25, carbs: 1.3, fat: 33.3 },
  roti: { calories: 265, protein: 9, carbs: 49, fat: 3.3 },
  mie: { calories: 138, protein: 3.7, carbs: 28.1, fat: 0.3 },
  pasta: { calories: 131, protein: 5, carbs: 25, fat: 1.1 },
  buah: { calories: 60, protein: 0.6, carbs: 15, fat: 0.2 },
  sayuran: { calories: 25, protein: 1.9, carbs: 5.2, fat: 0.2 },
  coklat: { calories: 546, protein: 12, carbs: 61, fat: 31 },
  kopi: { calories: 2, protein: 0.3, carbs: 0, fat: 0 },
  teh: { calories: 1, protein: 0, carbs: 0, fat: 0 },
  minyak: { calories: 884, protein: 0, carbs: 0, fat: 100 },
  gula: { calories: 387, protein: 0, carbs: 100, fat: 0 },
  garam: { calories: 0, protein: 0, carbs: 0, fat: 0 },
  kacang: { calories: 567, protein: 25.8, carbs: 20, fat: 49.2 },
  lentil: { calories: 116, protein: 9, carbs: 20, fat: 0.4 },
  jagung: { calories: 86, protein: 3.3, carbs: 19, fat: 1.2 },
  beras: { calories: 130, protein: 2.7, carbs: 28, fat: 0.3 },
  gandum: { calories: 340, protein: 13.7, carbs: 72.6, fat: 2.4 }
};

const foodAliases = {
  'nasi putih': 'nasi',
  'nasi goreng': 'nasi',
  'ayam panggang': 'ayam',
  'ayam goreng': 'ayam',
  'telur ayam': 'telur',
  avocado: 'alpukat',
  avokad: 'alpukat',
  bananas: 'pisang',
  'kentang goreng': 'kentang',
  'brokoli kukus': 'brokoli',
  'tempe goreng': 'tempe',
  'tahu goreng': 'tahu',
  'coklat panas': 'coklat',
  'cokelat': 'coklat',
  chocolate: 'coklat'
};

function generateNutritionData(foodName) {
  const categories = {
    fruit: { baseCalories: 60, protein: 0.6, carbs: 15, fat: 0.2 },
    vegetable: { baseCalories: 25, protein: 1.9, carbs: 5.2, fat: 0.2 },
    protein: { baseCalories: 200, protein: 25, carbs: 0, fat: 10 },
    grain: { baseCalories: 150, protein: 5, carbs: 30, fat: 0.5 },
    dairy: { baseCalories: 80, protein: 8, carbs: 5, fat: 5 },
    beverage: { baseCalories: 50, protein: 0.2, carbs: 12, fat: 0 },
    snack: { baseCalories: 200, protein: 5, carbs: 25, fat: 10 }
  };

  const fruitKeywords = ['buah', 'apple', 'orange', 'mango', 'strawberry', 'grape', 'melon', 'watermelon', 'pineapple'];
  const vegKeywords = ['sayur', 'vegetable', 'spinach', 'carrot', 'cabbage', 'lettuce', 'onion', 'garlic', 'tomato', 'cucumber'];
  const proteinKeywords = ['daging', 'daging ayam', 'daging sapi', 'ikan', 'udang', 'cumi', 'telur', 'tahu', 'tempe', 'kacang'];
  const grainKeywords = ['nasi', 'roti', 'mie', 'pasta', 'beras', 'gandum', 'oat', 'sereal', 'tepung'];
  const dairyKeywords = ['susu', 'yogurt', 'keju', 'mentega', 'krim', 'butter'];
  const beverageKeywords = ['kopi', 'teh', 'air', 'juice', 'jus', 'smoothie', 'minuman'];
  const snackKeywords = ['coklat', 'kue', 'cake', 'cookies', 'chips', 'popcorn', 'permen', 'candy'];

  let category = 'snack';
  if (fruitKeywords.some(k => foodName.includes(k))) category = 'fruit';
  else if (vegKeywords.some(k => foodName.includes(k))) category = 'vegetable';
  else if (proteinKeywords.some(k => foodName.includes(k))) category = 'protein';
  else if (grainKeywords.some(k => foodName.includes(k))) category = 'grain';
  else if (dairyKeywords.some(k => foodName.includes(k))) category = 'dairy';
  else if (beverageKeywords.some(k => foodName.includes(k))) category = 'beverage';

  const base = categories[category];
  const variation = 0.8 + Math.random() * 0.4;

  return {
    calories: Math.round(base.baseCalories * variation),
    protein: Math.round(base.protein * variation * 10) / 10,
    carbs: Math.round(base.carbs * variation * 10) / 10,
    fat: Math.round(base.fat * variation * 10) / 10
  };
}

const searchInput = document.getElementById('food-search');
const searchButton = document.getElementById('search-btn');
const nutritionResult = document.getElementById('nutrition-result');
const moodResult = document.getElementById('mood-result');
const startCameraBtn = document.getElementById('start-camera');
const detectMoodBtn = document.getElementById('detect-mood');
const stopCameraBtn = document.getElementById('stop-camera');
const video = document.getElementById('mood-video');
const cameraOverlay = document.querySelector('.camera-overlay');
const chips = document.querySelectorAll('.food-suggestions .chip');

function formatKey(key) {
  return key.charAt(0).toUpperCase() + key.slice(1);
}

function renderNutrition(foodName) {
  const inputKey = foodName.trim().toLowerCase();
  const key = foodAliases[inputKey] || inputKey;
  let data = foodData[key];
  
  if (!data) {
    data = generateNutritionData(inputKey);
  }

  nutritionResult.innerHTML = `
    <h3>Hasil Nutrisi</h3>
    <div class="nutrition-list"></div>
  `;

  const values = [
    ['Kalori', `${data.calories} kcal`],
    ['Protein', `${data.protein} g`],
    ['Karbohidrat', `${data.carbs} g`],
    ['Lemak', `${data.fat} g`]
  ];

  const list = nutritionResult.querySelector('.nutrition-list');
  const title = document.createElement('p');
  title.className = 'nutrition-title';
  title.textContent = `Informasi nutrisi ${formatKey(key)} per 100g`;
  list.prepend(title);

  const isEstimate = !foodData[key];
  if (isEstimate) {
    const disclaimer = document.createElement('p');
    disclaimer.className = 'nutrition-disclaimer';
    disclaimer.textContent = '(Estimasi berdasarkan jenis makanan)';
    list.appendChild(disclaimer);
  }

  values.forEach(([label, value]) => {
    const item = document.createElement('div');
    item.className = 'nutrition-item';
    item.innerHTML = `
      <div>
        <strong>${label}</strong>
        <p class="nutrition-key">${label === 'Kalori' ? 'Umumnya per porsi' : 'Per 100g'}</p>
      </div>
      <div>${value}</div>`;
    list.appendChild(item);
  });
}

searchButton.addEventListener('click', () => {
  const value = searchInput.value.trim();
  if (!value) {
    alert('Masukkan nama makanan untuk mencari nutrisi.');
    return;
  }
  renderNutrition(value);
});

searchInput.addEventListener('keyup', event => {
  if (event.key === 'Enter') searchButton.click();
});

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    searchInput.value = chip.textContent;
    renderNutrition(chip.textContent);
  });
});

async function startCamera() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    moodResult.innerHTML = '<p>Browser Anda tidak mendukung akses kamera.</p>';
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 } });
    video.srcObject = stream;
    video.play();
    cameraOverlay.classList.add('hidden');
    moodResult.innerHTML = '<p>Kamera aktif. Tekan tombol Deteksi Mood untuk memulai.</p>';
  } catch (error) {
    moodResult.innerHTML = `<p>Gagal mengakses kamera: ${error.message}</p>`;
  }
}

function stopCamera() {
  const stream = video.srcObject;
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    video.srcObject = null;
    cameraOverlay.classList.remove('hidden');
    moodResult.innerHTML = '<p>Kamera dihentikan. Tekan Mulai Kamera untuk mengaktifkan lagi.</p>';
  }
}

function getMoodAnalysis() {
  const moods = [
    { emoji: '😊', label: 'Bahagia', detail: 'Wajah memberi sinyal mood positif.', advice: 'Pertahankan kebiasaan baik hari ini dan lanjutkan aktivitas sehat.' },
    { emoji: '😌', label: 'Tenang', detail: 'Suasana hati stabil dan rileks.', advice: 'Lanjutkan dengan napas dalam dan tetap terhidrasi.' },
    { emoji: '🔥', label: 'Termotivasi', detail: 'Wajah terlihat energik dan siap beraksi.', advice: 'Buat daftar tugas dan mulai pekerjaan dengan fokus.' },
    { emoji: '🌿', label: 'Relax', detail: 'Tampak santai, cocok untuk rehat sejenak.', advice: 'Coba peregangan ringan atau dengarkan musik tenang.' },
    { emoji: '😟', label: 'Stres', detail: 'Wajah terlihat tegang atau lelah.', advice: 'Istirahat sebentar, minum air, dan tarik napas dalam.' },
    { emoji: '😔', label: 'Lelah', detail: 'Nampak kurang berenergi, mungkin butuh jeda.', advice: 'Coba tidur singkat, jalan kaki, atau senam ringan untuk menyegarkan.' }
  ];
  return moods[Math.floor(Math.random() * moods.length)];
}

function showMoodResult(mood) {
  moodResult.innerHTML = `
    <h3>${mood.emoji} Mood: ${mood.label}</h3>
    <p>${mood.detail}</p>
    <p class="mood-advice">Saran: ${mood.advice}</p>
  `;
}

async function detectMood() {
  if (!video.srcObject) {
    moodResult.innerHTML = '<p>Silakan aktifkan kamera terlebih dahulu.</p>';
    return;
  }
  moodResult.innerHTML = '<p>Memindai wajah... Mohon tunggu sebentar.</p>';
  if ('FaceDetector' in window) {
    try {
      const detector = new FaceDetector();
      const faces = await detector.detect(video);
      if (!faces.length) {
        moodResult.innerHTML = '<p>Wajah tidak terdeteksi. Arahkan wajah ke kamera dan coba lagi.</p>';
        return;
      }
    } catch (error) {
      console.warn('FaceDetector tidak tersedia atau terjadi error:', error);
    }
  }
  const mood = getMoodAnalysis();
  setTimeout(() => showMoodResult(mood), 1200);
}

startCameraBtn.addEventListener('click', startCamera);
detectMoodBtn.addEventListener('click', detectMood);
stopCameraBtn.addEventListener('click', stopCamera);

window.addEventListener('beforeunload', stopCamera);
