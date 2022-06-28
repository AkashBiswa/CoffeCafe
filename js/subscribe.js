import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";  
  const firebaseConfig = {
    apiKey: "AIzaSyCpWwXbUWdxkOo0T130uamM3TnNubDyDg0",
    authDomain: "formlogin-19d79.firebaseapp.com",
    projectId: "formlogin-19d79",
    storageBucket: "formlogin-19d79.appspot.com",
    messagingSenderId: "723798231789",
    appId: "1:723798231789:web:4006b788c11475cfd29ae4"
  };
  const app = initializeApp(firebaseConfig);

  const database=getDatabase(app);

 saveData.addEventListener('click',(e)=>{

    var username= document.getElementById('fname').value;
    var email= document.getElementById('emailid').value;
    var password= document.getElementById('lname').value;

    set(ref(database, 'users/' + username), {
        username: username,
        password:password,
        email: email
       
      });

      alert('saved');
 });