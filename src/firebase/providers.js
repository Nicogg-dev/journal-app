/* PROVEEDORES DE AUTENTICACION */
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";

// Config Firebase
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();


export const signInWithGoogle = async () => {

    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const {displayName, email, photoURL, uid} = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        }
    }
    catch (error) {
        console.log(error.message);

        return {
            ok: false,
            errorMessage: error.message,
        }
    }

}

export const registerUserWithEmailPassword = async ({email, password, displayName}) => {

    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;

        //Actualizar el displayName en Firebase
        await updateProfile(FirebaseAuth.currentUser, { displayName})

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        }
        
    }
    catch (error) {
        console.log(error.message);

        return {
            ok: false,
            errorMessage: error.message,
        }
    }
};

export const loginWithEmailPassword = async ({email, password}) => {

    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        
        const {uid, photoURL, displayName} = resp.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        }
        
    }
    catch (error) {
        console.log(error.message);

        return {
            ok: false,
            errorMessage: error.message,
        }
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}