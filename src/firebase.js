import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBPF0BWYcm3hBXQrT1KJ_IbIMR5EMlQyY4",
  authDomain: "regal-station-187104.firebaseapp.com",
  databaseURL: "https://regal-station-187104-default-rtdb.firebaseio.com",
  projectId: "regal-station-187104",
  storageBucket: "regal-station-187104.appspot.com",
  messagingSenderId: "207271752972",
  appId: "1:207271752972:web:fef1a8b3a4c7fa14810529",
  measurementId: "G-K7J1XJ9TYJ"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
