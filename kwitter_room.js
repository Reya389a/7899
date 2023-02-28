
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyCNt6SE99UM83IeSTvdlEHxU9rA-ElROfs",
      authDomain: "el-chatsito.firebaseapp.com",
      databaseURL: "https://el-chatsito-default-rtdb.firebaseio.com",
      projectId: "el-chatsito",
      storageBucket: "el-chatsito.appspot.com",
      messagingSenderId: "458129361967",
      appId: "1:458129361967:web:c25a6a0413555ae2f30ada"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();
