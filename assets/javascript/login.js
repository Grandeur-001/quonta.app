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

// Validation Regex
const emailRegex = /(gmail.com|yahoo.com|onmail.com|outlook.com|yahoo.co.uk)/i;
const lengthRegex = /^.{12,}$/;
const uppercaseRegex = /[A-Z]/;
const lowercaseRegex = /[a-z]/;
const numberRegex = /\d/;
const specialCharRegex = /[\W_]/;
const forbiddenSequencesRegex = /(123|abc|password)/i;

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const emailInput = document.querySelector("#email_input").value;
  const passwordInput = document.querySelector("#password_input").value;

  // Reset error message
  MainErrorMessage.style.display = "block";
  MainErrorMessage.style.opacity = "1";

  // Form validation
  if (emailInput === "") {
    MainErrorMessage.textContent = "Email is required";
    return;
  } else if (!emailRegex.test(emailInput)) {
    MainErrorMessage.textContent = "Invalid Email format!";
    return;
  } else if (passwordInput === "") {
    MainErrorMessage.textContent = "Password is required";
    return;
  } else if (!lengthRegex.test(passwordInput)) {
    MainErrorMessage.textContent = "Password must be at least 12 characters long.";
    return;
  } else if (!uppercaseRegex.test(passwordInput)) {
    MainErrorMessage.textContent = "Password must contain at least one uppercase letter.";
    return;
  } else if (!lowercaseRegex.test(passwordInput)) {
    MainErrorMessage.textContent = "Password must contain at least one lowercase letter.";
    return;
  } else if (!numberRegex.test(passwordInput)) {
    MainErrorMessage.textContent = "Password must contain at least one number.";
    return;
  } else if (!specialCharRegex.test(passwordInput)) {
    MainErrorMessage.textContent = "Password must contain at least one special character.";
    return;
  } else if (forbiddenSequencesRegex.test(passwordInput)) {
    MainErrorMessage.textContent = 'Password cannot contain common sequences like "123", "abc", "password", etc.';
    return;
  }

  // Firebase Sign-In
  try {
    const userCredential = await signInWithEmailAndPassword(auth, emailInput, passwordInput);
    console.log("Signed in successfully:", userCredential.user);

    // Show preloader animation and redirect
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
      MainErrorMessage.textContent = `Error: ${error.message}`;
    }
  }
});
