
// ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKcxv7wXuQSutiASLPRZZJ4A3MfQHMSSE",
  authDomain: "chat-app-be82a.firebaseapp.com",
  databaseURL: "https://chat-app-be82a-default-rtdb.firebaseio.com",
  projectId: "chat-app-be82a",
  storageBucket: "chat-app-be82a.appspot.com",
  messagingSenderId: "851052739698",
  appId: "1:851052739698:web:a728832fb08e2bb65616eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


