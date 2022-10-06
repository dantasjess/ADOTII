import { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateEmail,
    updatePassword,
    resetPassword,
    deleteUser,
    updateProfile
} from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    async function signup(email, password) {
        const userAuth = await createUserWithEmailAndPassword(auth, email, password);
        return userAuth;
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth);
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    // function editEmail(email) {
    //     set(ref(database, 'users/' + currentUser.uid + '/email'), email);
    //     return updateEmail(currentUser, email);
    // }

    // function editPassword(password) {
    //     return updatePassword(currentUser, password);
    // }

    function deleteAccount(user) {
        return auth.deleteUser(user.uid);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        userRTDB,
        signup,
        login,
        logout,
        resetPassword,
        // editEmail,
        // editPassword,
        deleteAccount
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}