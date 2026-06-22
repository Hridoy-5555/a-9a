import { createContext, useState, useEffect } from 'react';
import { 
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, 
  signOut, signInWithPopup, GoogleAuthProvider, updateProfile, onAuthStateChanged 
} from 'firebase/auth';
import app from '../firebase/firebase.config'; // Standard web modular web SDK config
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    setLoading(true);
    localStorage.removeItem('docappoint-token');
    return signOut(auth);
  };

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL })
      .then(() => setUser({ ...auth.currentUser }));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) {
        const loggedUser = { email: currentUser.email };
        const res = await axios.post('http://localhost:5000/api/jwt', loggedUser);
        localStorage.setItem('docappoint-token', res.data.token);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, createUser, loginUser, logoutUser, loginWithGoogle, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
}