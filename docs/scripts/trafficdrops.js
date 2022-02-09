var firebaseConfig = {
    apiKey: "AIzaSyBdwvtb76lL32XheYST35eWiS6p9XSpqV4",
    authDomain: "trafficdrops.firebaseapp.com",
    projectId: "trafficdrops",
    storageBucket: "trafficdrops.appspot.com",
    messagingSenderId: "812918052966",
    appId: "1:812918052966:web:d083cefc61e34b916375a7"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebaseConfig = window.btoa(firebaseConfig);

const db = firebase.firestore();

// paste all of that, DO NOT change anything. Keep that code handy in case you mess it up in here or something. I've done that before, be careful


// to add anything to the database, you first need to create a collection. I sent a message on how to do that but I can demonstrate it here I THINK
function addingStuffToDbDemo(){
    // here, I need you to create a collection called posts. I'll show you how
    // the same way I created that collection, I need you to create a collection called posts
    db.collection("posts").add({
        informationToAdd: "you can add as many things inside here as you want",
        id: ""
    }).then(function (docRef) {
        console.log("Document created:", docRef.id);
        getPosts();
    });
}