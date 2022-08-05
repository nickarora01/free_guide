
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBdnLLuSfMkx7VA3DX2hogrn2IQc10Ygg4",
  authDomain: "freeguides-prod.firebaseapp.com",
  databaseURL: "https://freeguides-prod.firebaseio.com",
  projectId: "freeguides-prod",
  storageBucket: "freeguides-prod.appspot.com",
  messagingSenderId: "964919675481",
  appId: "1:964919675481:web:f0e7f584ff21ea96dfbf48",
  measurementId: "G-G0F5D84MP8"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
