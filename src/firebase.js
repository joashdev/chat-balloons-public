// firebase SDK
import firebase from "firebase/compat/app";
// import { getAnalytics } from "firebase/analytics";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// vue reactivity
import { ref, onUnmounted, computed } from "vue";

// .env.local firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const analytics = firebase.getAnalytics(app);

// AUTHENTICATION
const auth = firebase.auth();

export function useAuth() {
  const user = ref(null);

  const unsubscribe = auth.onAuthStateChanged(
    (fireUser) => (user.value = fireUser)
  );
  onUnmounted(unsubscribe); // unsub when closing app

  const isLogin = computed(() => user.value !== null);

  // signin with google popup
  const signIn = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(googleProvider);
  };
  const signOut = () => auth.signOut();

  return { user, isLogin, signIn, signOut };
}

// CHAT MESSAGES
const firestore = firebase.firestore();
const publicMessagesCollection = firestore.collection("publicmessages");
const messageQuery = publicMessagesCollection
  .orderBy("createdAt", "desc")
  .limit(100);

export function useChat() {
  const messages = ref([]);

  const unsubscribe = messageQuery.onSnapshot((snapshot) => {
    messages.value = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .reverse();
  });
  onUnmounted(unsubscribe);

  const { user, isLogin } = useAuth();
  const sendMessage = (text) => {
    if (!isLogin.value) return;
    const { photoURL, uid, displayName } = user.value;
    publicMessagesCollection.add({
      userName: displayName,
      userId: uid,
      userPhotoURL: photoURL,
      text: text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return { messages, sendMessage };
}

// CHAT ROOMS
// to be implemented
// export function useRooms() {
//   return { rooms, activeRoom }
// }
