// lib/firebase/firebase.admin.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	// Your Firebase configuration
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
