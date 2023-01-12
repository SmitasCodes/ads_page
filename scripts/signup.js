import { firebaseConfig } from "./firebase.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

function signup() {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("New user created!");
      const timestamp = new Date();
      set(ref(database, "users/" + user.uid), {
        email: emailInput,
        role: "simple_user",
        timestamp: timestamp,
      });
    })
    .catch(function (error) {
      // show an error message
      let errorCode = error.code;
      let errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
}

document.querySelector("#signup").addEventListener("click", () => {
  signup();
});
