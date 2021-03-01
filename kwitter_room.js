
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDV7A8MBC0A8w_CN6ZQ-p4aOP2IgPyZdPU",
    authDomain: "kwitter-bea51.firebaseapp.com",
    projectId: "kwitter-bea51",
    storageBucket: "kwitter-bea51.appspot.com",
    messagingSenderId: "1020339142265",
    appId: "1:1020339142265:web:13130cad03ed27e2955ea8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("Room_name");
    window.location="index.html";
} 
function add_Room(){
    Room_name=document.getElementById("room_name").value;
    localStorage.setItem("Room_name",Room_name);
    window.location="kwitter_page.html"
}