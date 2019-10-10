/*
***** Links to put in the HTML document *****

  <!-- jQuery -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  <!-- Bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

  <!-- Firebase References -->
  <script src="https://www.gstatic.com/firebasejs/6.0.4/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/6.0.4/firebase-database.js"></script>

  <!-- Moment.js Reference -->
  <script src="https://cdn.jsdelivr.net/momentjs/2.12.0/moment.min.js"></script>
*/

// Go to firebase console, click the cog next to Project Overview and go to project settings

// Configuration object that will be passed to connect to firebase
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "api-key",
    authDomain: "tutor-session-728.firebaseapp.com",
    databaseURL: "https://tutor-session-728.firebaseio.com",
    projectId: "tutor-session-728",
    storageBucket: "tutor-session-728.appspot.com",
    messagingSenderId: "313087598282",
    appId: "1:313087598282:web:833dd1f699cc708b"
  };
  // Initialize Firebase
  // (Give firebase the needed information to start)
  firebase.initializeApp(firebaseConfig);

  // set the data to a variable for easy refrence 
  var database = firebase.database();

  // .ref() is the location in the database. empty is the base
  // .on when there is a change to the database
  database.ref().on("value", function(snapshot){
      // snapshot is data in the database
      // .child is a child with the name passed to it
    if (snapshot.child("name").exists()){
        // set the local variable to the value from the database
        var childValue = snapshot.val().name;
    }
  })

  // set the data in the database to be equal to the passed object
  // this replaces the old data with new data
  database.ref().set({
      key: "value"
  })

  // push new data to database
  // this adds the new data without changing the old data
  database.ref().push({
      key: "value"
  })