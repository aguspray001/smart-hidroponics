import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDyCcAzZL1m98ERMUmbBnThqGAs8TqzOQw',
  authDomain: 'hidroponics-6bd7f.firebaseapp.com',
  databaseURL:
    'https://hidroponics-6bd7f-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'hidroponics-6bd7f',
  storageBucket: 'hidroponics-6bd7f.appspot.com',
  messagingSenderId: '735174362800',
  appId: '1:735174362800:web:053522e46323d4b1085d75',
  measurementId: 'G-W6FQHPE1QS',
};

const FIREBASE = firebase.initializeApp(firebaseConfig);

export default FIREBASE;
