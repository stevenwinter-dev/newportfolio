// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBqAHRdDZpNKlJKQBK9EkMB85-l0Tscx7Y",
    authDomain: "portfolio-form-6b596.firebaseapp.com",
    databaseURL: "https://portfolio-form-6b596.firebaseio.com",
    projectId: "portfolio-form-6b596",
    storageBucket: "portfolio-form-6b596.appspot.com",
    messagingSenderId: "848003063752",
    appId: "1:848003063752:web:1f0c5b7bf0e2aae0df6afd",
    measurementId: "G-6ZYP2XFKJP"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const form = document.querySelector('#contact');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');


const db = firestore.collection('portfolio-contactform');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nameInput = name.value;
    const emailInput = email.value;
    const messageInput = message.value;
    const date= new Date();
    const alert = document.querySelector('.alert');
    alert.style.display = 'block';
    setTimeout(function(){
        alert.style.display = 'none';
    }, 3000);

    db.doc().set({
        date: date,
        name: nameInput,
        email: emailInput,
        message: messageInput
    }).then(function() {
        console.log('Data saved');
    }).catch(function(error) {
        console.log(error);
    })

    form.reset();
});

const checkpoint = 200;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 0;
  } else {
    opacity = 1;
  }
  document.querySelector(".mobile-nav").style.opacity = opacity;
});