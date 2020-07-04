const express = require('express')
const app = express()
const cors = require('cors')

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
      apiKey: "AIzaSyBwBZ1tSMu5HFKlezAd-7r9ni58deVOtIk",
      authDomain: "sophrosyne-82958.firebaseapp.com",
      databaseURL: "https://sophrosyne-82958.firebaseio.com",
      projectId: "sophrosyne-82958",
      storageBucket: "sophrosyne-82958.appspot.com",
      messagingSenderId: "477256142051",
      appId: "1:477256142051:web:1e228539b2ecfdd9cf09d6",
      measurementId: "G-C38CEKB1ER"
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const port = 8080;

app.use(express.json());
app.use(cors());

app.post('/createUser', (req, res) => {
    console.log(req.body);
    firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
        .then(data=>res.send('user created!'))
        .catch();
});

app.get('/healthCheck', (req, res) => res.send('hello world'));
app.listen(port);
