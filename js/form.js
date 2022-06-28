import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAuth, signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";  
  const firebaseConfig = {
    apiKey: "AIzaSyCpWwXbUWdxkOo0T130uamM3TnNubDyDg0",
    authDomain: "formlogin-19d79.firebaseapp.com",
    projectId: "formlogin-19d79",
    storageBucket: "formlogin-19d79.appspot.com",
    messagingSenderId: "723798231789",
    appId: "1:723798231789:web:4006b788c11475cfd29ae4"
  };

 
  const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);

//button js starts
  document.getElementById("reg-btn").addEventListener('click', function(){
   document.getElementById("register-div").style.display="inline";
   document.getElementById("login-div").style.display="none";
});

document.getElementById("log-btn").addEventListener('click', function(){
 document.getElementById("register-div").style.display="none";
 document.getElementById("login-div").style.display="inline";

});
//button js ends

  document.getElementById("login-btn").addEventListener('click', function(){
   const loginEmail= document.getElementById("login-email").value;
   const loginPassword =document.getElementById("login-password").value;

   signInWithEmailAndPassword(auth, loginEmail, loginPassword).then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("login-div").style.display="none";
     //document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";
     window. location. href = "adminpage.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("login-div").style.display="none";
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  });
});

//registration btn starts
  document.getElementById("register-btn").addEventListener('click', function(){

   const registerEmail= document.getElementById("register-email").value;
   const registerPassword =document.getElementById("register-password").value;

   createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("register-div").style.display="none";
     document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+" was Registered Successfully";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("register-div").style.display="none";
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  });
});

//logout btn starts
document.getElementById("log-out-btn").addEventListener('click', function(){
  signOut(auth).then(() => {
       document.getElementById("result-box").style.display="none";
       document.getElementById("login-div").style.display="inline";
  }).catch((error) => {
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
  });

});
