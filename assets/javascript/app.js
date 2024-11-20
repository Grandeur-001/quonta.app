// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBjjvXoTOCU4WNzQnYzXWUQBw1qXUikfSs",
    authDomain: "creative-fortune.firebaseapp.com",
    projectId: "creative-fortune",
    storageBucket: "creative-fortune.firebasestorage.app",
    messagingSenderId: "1094409358313",
    appId: "1:1094409358313:web:e2272ce4a1ed9264ee1978",
    measurementId: "G-YW8EBRRKZS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app); // Firestore instance



const signUpform = document.getElementById(`signup_form`);
let termsAndConditions_Label;
let mainCheckboxDesign;
let hiddenCheckbox;

    termsAndConditions_Label = document.querySelector(`#terms-conditions_label`);
    mainCheckboxDesign = document.querySelector(`#cbx-15`);
    hiddenCheckbox = document.querySelector(`#hidden_cbx`);

termsAndConditions_Label.addEventListener(`click`, () => {
    hiddenCheckbox.checked = !hiddenCheckbox.checked;
});
hiddenCheckbox.addEventListener(`click`, () => {
    mainCheckboxDesign.checked = !mainCheckboxDesign.checked;

});

signUpform.addEventListener(`submit`, async (form_event) => {
    const lengthRegex = /^.{12,}$/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const forbiddenSequencesRegex = /(123|abc|password|qwerty|letmein)/i;
    // //////////
    const emailRegex = /(gmail.com|yahoo.com|onmail.com|outlook.com|yahoo.co.uk)/i
    // /////////
    const MainErrorMessage = document.querySelector(`.error_message`);
    const firstNameInput = document.querySelector(`#email_input`).value;
    const lastNameInput = document.querySelector(`#email_input`).value;
    const emailInput = document.querySelector(`#email_input`).value;
    // const phoneInput = Number(document.querySelector(`#phone_input`).value);
    const passwordInput = document.querySelector(`#password_input`).value;
    const conformPasswordInput = document.querySelector(`#confirm_password_input`).value;
    // //////////
    hiddenCheckbox = document.querySelector(`#hidden_cbx`);
    // //////////
    const preloaderAnimation = document.querySelector(`.preloader_animation`)





    MainErrorMessage.style.setProperty(
        `display`,
        `block`
    )
    MainErrorMessage.style.opacity = `1`;

    // if(uppercaseRegex.test(phoneInput) || lowercaseRegex.test(phoneInput)){
    //     MainErrorMessage.textContent = `Phone Number is Invalid`;
    //     form_event.preventDefault();
    // }
    if(firstNameInput === ``){
        MainErrorMessage.textContent = `Enter is First Name`;
        form_event.preventDefault();
    }

    if(lastNameInput === ``){
        MainErrorMessage.textContent = `Enter is Last Name`;
        form_event.preventDefault();
    }
    if(emailInput === ``){
        MainErrorMessage.textContent = `Email is required`;
        form_event.preventDefault();
    }
    else if(!emailRegex.test(emailInput)) {
        MainErrorMessage.textContent = `Invalid Email format!`;
        form_event.preventDefault();
    }
    else if (passwordInput === ``) {
        MainErrorMessage.textContent = `Password is required`;
        form_event.preventDefault();
    }
    else if(!lengthRegex.test(passwordInput)) {
        MainErrorMessage.textContent = `Password must be at least 12 characters long.`;
        form_event.preventDefault();
    }
    else if(!uppercaseRegex.test(passwordInput)) {
        MainErrorMessage.textContent = `Password must contain at least one uppercase letter.`;
        form_event.preventDefault();
    }
    else if(!lowercaseRegex.test(passwordInput)) {
        MainErrorMessage.textContent = `Password must contain at least one lowercase letter.`;
        form_event.preventDefault();
    }

    else if(!numberRegex.test(passwordInput)) {
        MainErrorMessage.textContent = `Password must contain at least one number.`;
        form_event.preventDefault();
    }
    else if(!specialCharRegex.test(passwordInput)) {
        MainErrorMessage.textContent = `Password must contain at least one special character.`;
        form_event.preventDefault();
    }
    else if(forbiddenSequencesRegex.test(passwordInput)) {
        MainErrorMessage.textContent = `Password cannot contain common sequences like "123", "abc", "password", etc.`;
        form_event.preventDefault();
    }
    else if(conformPasswordInput === ``) {
        MainErrorMessage.textContent = `Re-enter your password`;
        form_event.preventDefault();
    }
    else if(conformPasswordInput !== passwordInput) {
        MainErrorMessage.textContent = `Passwords do not match`;
        form_event.preventDefault();
    }
    else if (!hiddenCheckbox.checked){
        MainErrorMessage.textContent = `You must agree to the terms and conditions`;
        form_event.preventDefault();
    }
    else {
        form_event.preventDefault();

        try {
            // Create user with Firebase Auth
            const userCredential = await createUserWithEmailAndPassword(auth, emailInput, passwordInput);
            const user = userCredential.user;
            console.log("User created successfully:", user);
        
            // Store additional user info in Firestore
            await setDoc(doc(db, "users", user.uid), {
              firstName: firstNameInput,
              lastName: lastNameInput,
              email: emailInput,
              createdAt: new Date().toISOString(),
            });

        }catch(error)  {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(`Error (${errorCode}): ${errorMessage}`);

                if (errorCode === "auth/email-already-in-use") {
                    MainErrorMessage.textContent = "Email is already registered.";
                    form_event.preventDefault();

                  } else {
                    MainErrorMessage.textContent = `Error: ${error.message}`;
                                
                    preloaderAnimation.classList.add(`show_preloader`);

                    setTimeout(() => {
                        preloaderAnimation.classList.remove(`show_preloader`);
                        window.location.href = "login.html";
                    },9000);
                    // form_event.preventDefault();

                  }
        }
    }
});


        

        // form_event.preventDefault();



    




