import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from './../firebase/firebase.init';

export  const AuthContext = createContext()
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
const UserContext = ({children}) => {
     
    const [user, setUser] = useState(null)
    const [loading, setLoading]  = useState(true)

    const createUser = (email, password) =>{
       setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const signWithPopUp = () =>{
        return signInWithPopup(auth, provider)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            console.log('current user is', currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return () => unSubscribe;
    } , [])
    
    const authInfo = {user, createUser,signIn,logOut, loading,signWithPopUp};


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;