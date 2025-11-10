// Firebase initialization (compat libraries)
/* Copiado do console do seu Firebase */
const firebaseConfig = {
  apiKey: "AIzaSyCh68Rf7F3lgXCNPQBDqdfNtNA3e_GhyeQ",
  authDomain: "pesquisaambientaldigital.firebaseapp.com",
  projectId: "pesquisaambientaldigital",
  storageBucket: "pesquisaambientaldigital.firebasestorage.app",
  messagingSenderId: "573972941254",
  appId: "1:573972941254:web:d2062eec6365d339688ac7",
  measurementId: "G-2NDNHCLWH1"
};

// Using compat libraries via CDN in the HTML files — this script just initializes Firestore for use.
if (typeof firebase !== 'undefined') {
  try {
    firebase.initializeApp(firebaseConfig);
    window.db = firebase.firestore();
    console.log('Firebase inicializado (compat).');
  } catch (e) {
    console.warn('Firebase init error (maybe already initialized):', e);
    if (!window.db && firebase.apps && firebase.apps.length) {
      window.db = firebase.firestore();
    }
  }
} else {
  console.warn('Firebase não detectado — certifique-se de incluir os scripts do Firebase antes deste arquivo.');
}