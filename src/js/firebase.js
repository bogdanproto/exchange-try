import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCiXMzfM6sGC7JIhwb6dEEMC4enpw-63b8',
  authDomain: 'exchange-try.firebaseapp.com',
  projectId: 'exchange-try',
  storageBucket: 'exchange-try.appspot.com',
  messagingSenderId: '193175234432',
  appId: '1:193175234432:web:1b1d8b93987dbf58380365',
  measurementId: 'G-GX65J7E1M8',
};

class AuthFirebase {
  constructor(config) {
    this.config = config;
    this.auth = null;
  }

  initializeAuth() {
    const app = initializeApp(this.config);
    this.auth = getAuth(app);
  }

  async logIn(email, password) {
    const isTrue = await signInWithEmailAndPassword(this.auth, email, password);
    return isTrue.user.uid;

    //     const user = userCredential.user;
  }
}

const userAuth = new AuthFirebase(firebaseConfig);

export { userAuth };
