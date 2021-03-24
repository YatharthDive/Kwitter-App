//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDV7A8MBC0A8w_CN6ZQ-p4aOP2IgPyZdPU",
    authDomain: "kwitter-bea51.firebaseapp.com",
    databaseURL: "https://kwitter-bea51-default-rtdb.firebaseio.com",
    projectId: "kwitter-bea51",
    storageBucket: "kwitter-bea51.appspot.com",
    messagingSenderId: "1020339142265",
    appId: "1:1020339142265:web:e2436e4fccff4345955ea8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
console.log(user_name);
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name :" + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("Room_name");
    window.location = "index.html";
}

function add_Room() {
    Room_name = document.getElementById("room_name").value;
    localStorage.setItem("Room_name", Room_name);
    firebase.database().ref("/").child(Room_name).update({
        purpose: "Adding Room Name"
    });


    window.location="kwitter_page.html";
}
