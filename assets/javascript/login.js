// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjjvXoTOCU4WNzQnYzXWUQBw1qXUikfSs",
  authDomain: "creative-fortune.firebaseapp.com",
  projectId: "creative-fortune",
  storageBucket: "creative-fortune.firebasestorage.app",
  messagingSenderId: "1094409358313",
  appId: "1:1094409358313:web:e2272ce4a1ed9264ee1978",
  measurementId: "G-YW8EBRRKZS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Form handling
const loginForm = document.getElementById("login_form");
const MainErrorMessage = document.querySelector(".error_message");
const preloaderAnimation = document.querySelector(".preloader_animation");


loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const emailInput = document.querySelector("#email_input").value;
  const passwordInput = document.querySelector("#password_input").value;

  MainErrorMessage.style.display = "block";
  MainErrorMessage.style.opacity = "1";

  if (emailInput === "") {
    MainErrorMessage.textContent = "Email is required";
    return;
  } else if (passwordInput === "") {
    MainErrorMessage.textContent = "Password is required";
    return;

  } else {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailInput, passwordInput);
      console.log("Signed in successfully:", userCredential.user);
      const user = userCredential.user;

      // Save UID to sessionStorage
      // sessionStorage.setItem("userUID", user.uid);
      sessionStorage.setItem("userUID", user.uid);
  
      preloaderAnimation.classList.add("show_preloader");
      setTimeout(() => {
        preloaderAnimation.classList.remove("show_preloader");
        window.location.href = "/assets/user/dashboard.html";
      }, 9000);
    } catch (error) {
      const errorCode = error.code;
  
      if (errorCode === "auth/user-not-found") {
        MainErrorMessage.textContent = "Email not found";
      } else if (errorCode === "auth/wrong-password") {
        MainErrorMessage.textContent = "Incorrect password";
      } else {
        MainErrorMessage.style.display = "none";
        // MainErrorMessage.textContent = `Error: ${error.message}`;
      }
    }
  
  }

});
