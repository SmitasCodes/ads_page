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
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

const registerUser = () => {
  event.preventDefault();
  const emailInput = document.querySelector("#email").value;
  const passwordInput = document.querySelector("#password").value;

  createUserWithEmailAndPassword(auth, emailInput, passwordInput)
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
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};
document.querySelector(".button").addEventListener("click", () => {
  event.preventDefault();
});
document.querySelector("#loginSubmit").addEventListener("click", () => {
  registerUser();
});
