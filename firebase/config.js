import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBZXbGOrFPSY5SpuVN-YLB4cq42-vXTJGk",
  authDomain: "matt-blog-a3556.firebaseapp.com",
  projectId: "matt-blog-a3556",
  storageBucket: "matt-blog-a3556.appspot.com",
  messagingSenderId: "199808060097",
  appId: "1:199808060097:web:10b6fc6a9883df8e336240"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}
