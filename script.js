const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDVL3CJxDYIFEEkSUboBU0I5mrTyaRp9Gc",
  authDomain: "learning-firebase-with-jawad.firebaseapp.com",
  projectId: "learning-firebase-with-jawad",
  storageBucket: "learning-firebase-with-jawad.appspot.com",
  messagingSenderId: "729993256048",
  appId: "1:729993256048:web:a8cc0b32972dc66da268b5",
  measurementId: "G-XDJH6YB19M",
});

const auth = firebaseApp.auth();
const dataBase = firebaseApp.firestore();

// Initialize Firebase

function signUpCall() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  console.log("email ", email);
  console.log("password", password);

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
        alert('SignedUp Success');
      console.log(res);
    })
    .catch((error) => {
      alert(error.message);
      console.log(error);
    });
}

function signInCall() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log("email ", email);
    console.log("password", password);

    auth.signInWithEmailAndPassword(email, password)
    .then((res)=>{
        alert(res);
        console.log('signIn Success');
    })
    .catch((error) => {
        alert(error);
        console.log(error);
    })
}

function createData() {
  let email = document.getElementById('email').value;
  let fullName = document.getElementById('fullName').value;
  let password = document.getElementById('password').value;
  console.log("email ", email);
  console.log("full Name ", fullName);
  console.log("password", password);

  dataBase.collection('users')
  .add({
    fullName: fullName,
    email: email,
    password: password
  })
  .then((res)=>{
    alert(res);
    console.log(res.id)
  })
  .catch((error)=>{
    alert(error);
    console.log(error);
  });
}

function readData() {
  dataBase.collection('users')
  .get()
  .then((res)=>{
    alert(res);
    console.log(res.docs)
    console.log(res.docs.map((item)=>{
      return {...item.data() , id : item.id}
    }))
  })
.catch((error)=>{
  alert(error);
  console.log(error)
})
}

function deleteData() {
  dataBase.collection('users')
  .doc('OOs5EtlhkK5kgc0ouBoX')
  .delete() 
  .then((res)=>{
    alert('Delete data');
    console.log(res)
  })
  .catch((error)=>{
    console.log(error)
    alert(error);
  })
}

function updateData() {
  let email = document.getElementById('email').value;
  let fullName = document.getElementById('fullName').value;
  let password = document.getElementById('password').value;

  dataBase.collection('users')
  .doc('OOs5EtlhkK5kgc0ouBoX')
  .update({
    fullName : fullName,
    email :email,
    password : password
  }) 
  .then((res)=>{
    alert('update data');
    console.log(res)
  })
  .catch((error)=>{
    console.log(error)
    alert(error);
  })
}