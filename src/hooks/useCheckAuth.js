import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth/authSlice";
import { useEffect } from "react";
import { FirebaseAuth } from "../firebase/config";

export const useCheckAuth = () => {

    const { status } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    // Firebase nos ofrece una forma de estar pendiente de los cambios que el usuario va a tener:
    useEffect(() => {

        onAuthStateChanged(FirebaseAuth, (user) => {
            if (!user) return dispatch(logout({}));
            
            const { uid, email, displayName, photoURL } = user;
            dispatch(login({ uid, email, displayName, photoURL }));
        });

    }, []);

    return status;
}