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

// Selecting input fields
const title = document.querySelector("#title");
const category = document.querySelector("#category");
const description = document.querySelector("#description");
const price = document.querySelector("#price");
const images = document.querySelector("#title");

// Selecting buttons
const insert = document.querySelector("#insert");
const update = document.querySelector("#update");
const del = document.querySelector("#delete");

// Insert data
function insertData() {
  event.preventDefault();
  if (
    title === null ||
    category == null ||
    description == null ||
    price == null ||
    images == null
  ) {
    alert("Data required!");
    // return;
  } else {
    set(ref(database, "Products/" + number.value), {
      Title: title.value,
      Category: category.value,
      Description: description.value,
      Price: price.value,
      Images: images.value,
    })
      .then(() => {
        alert("Data added succesfully");
      })
      .catch((error) => {
        alert(error);
      });
  }
}

function signout() {
  signOut(auth)
    .then(() => {
      console.log("OK");
      location.href = "index.html";
    })
    .catch(() => {
      alert(error);
    });
}

document.querySelector("#signout").addEventListener("click", () => {
  signout();
});

insert.addEventListener("click", () => {
  insertData();
});
