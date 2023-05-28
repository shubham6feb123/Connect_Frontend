import auth from "./firebase";
import { GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged,GithubAuthProvider } from "firebase/auth";

export const signWithGoogle = async() => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result; 
    } catch (error) {
       return error 
    }
}

export const signWithGithub = async () => {
    try {
        const provider = new GithubAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result;
    } catch (error) {
        return error
    }
}

export const SignOut = async() => {
    try {
        await signOut(auth);
        return "success"
    } catch (error) {
        return error
    }
}

export const authStateChange = async () => {
    try {
        
    } catch (error) {
        
    }
}