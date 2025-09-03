import { auth } from "../config/firbase.config";  // import the initialized auth
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const firebaseSignUp = async (email, password, displayName) => {
    try {
        const photoURL = process.env.REACT_APP_userDefaultImg
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(userCredential.user, { displayName, photoURL })
        console.log('updated')
        return auth.currentUser;
    } catch (error) {
        throw error;
    }
}

const firebaseSignIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return userCredential.user
    } catch (error) {
        throw error;
    }
}

const firebaseSignOut = async () => {
    try {
        await signOut(auth)
    } catch (error) {
        throw error;
    }
}

export {
    firebaseSignUp,
    firebaseSignOut,
    firebaseSignIn
}