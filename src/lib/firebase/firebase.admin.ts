// lib/firebase/firebase.admin.ts
import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';

/**
 * Your firebase client SDK config goes here
 */
const config = {
	apiKey: import.meta.env.VITE_FB_API_KEY,
	authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FB_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FB_STORAGEB,
	messagingSenderId: import.meta.env.VITE_FB_MESSAGESEND_ID,
	appId: import.meta.env.VITE_FB_APP_ID,
	measurementId: import.meta.env.VITE_FB_MEASURE_ID
};

let firebaseApp: FirebaseApp | undefined;
let firebaseAuth: Auth;

// create singleton of firebase client app
if (!getApps().length) {
	firebaseApp = initializeApp(config);
} else {
	firebaseApp = getApps()[0];
}

// eslint-disable-next-line prefer-const
firebaseAuth = getAuth(firebaseApp);

export { firebaseApp, firebaseAuth };
