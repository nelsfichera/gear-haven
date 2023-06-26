// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  updateDoc,
} from "firebase/firestore/lite";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPQU3apGzS-WESFtzKRG_NLOP4IomNknQ",
  authDomain: "bikerental-a6976.firebaseapp.com",
  projectId: "bikerental-a6976",
  storageBucket: "bikerental-a6976.appspot.com",
  messagingSenderId: "27709411238",
  appId: "1:27709411238:web:83372d6cfdd32e0a764967",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//Auth init
export const auth = getAuth();

const colRef = collection(db, "main");
// Get all documents in a collectio

//All
export async function getFire() {
  const querySnapshot = await getDocs(colRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  // console.log(dataArr);

  return dataArr;
}

// One
export async function getOne(collection, id) {
  const docRef = doc(db, collection, id);
  const oneSnapshot = await getDoc(docRef);
  return {
    ...oneSnapshot.data(),
    id: oneSnapshot.id,
  };
}

// Query
export async function getSelected() {
  const q = query(colRef, where("price.current_retail", ">", 300));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function fbLogin(user, pwd) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, user, pwd);
    // console.log(userCredential);
    return userCredential;
  } catch (err) {
    // console.log("moj", err);
    // throw new Error("Thrown from ");
    throw err;
  }
}
export async function fbLogout() {
  try {
    await signOut(auth);
    console.log("Logged out");
  } catch (error) {
    console.log(error);
  }
}

export async function fbSignup(user, pwd) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      user,
      pwd
    );
    // console.log(userCredential);

    //ALSO write data to user table
    await setDoc(doc(db, "users", userCredential.user.uid), {
      bikes: [],
      admin: false,
    });
    return userCredential.user;
  } catch (error) {
    throw error;
    // console.log(error);
  }
}

// EDIT FUNCTION
export async function editBike(editedBike) {
  try {
    const bikeRef = doc(colRef, editedBike.tcin);
    updateDoc(bikeRef, editedBike);
  } catch (error) {
    console.error(error);
  }
}
export async function editUser(editedUser) {
  try {
    const colRef = collection(db, "users");
    const userRef = doc(colRef, editedUser.id);
    updateDoc(userRef, editedUser);
  } catch (error) {
    console.error(error);
  }
}