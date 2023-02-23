
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAQmLDroMFcizg9NR6GdfoUNb9Gle3C4B8",
    authDomain: "miniblog-796fe.firebaseapp.com",
    projectId: "miniblog-796fe",
    storageBucket: "miniblog-796fe.appspot.com",
    messagingSenderId: "124217439230",
    appId: "1:124217439230:web:74d01506d755e65c1e06af",
    measurementId: "G-VVH37F44G2"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };