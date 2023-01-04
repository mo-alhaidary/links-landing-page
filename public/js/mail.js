const firebaseConfig = {
    apiKey: "AIzaSyBpxKJ2Kml5PJHNCi1hvbQDplmdSRnn0Ak",
    authDomain: "linx-80b52.firebaseapp.com",
    databaseURL: "https://linx-80b52-default-rtdb.firebaseio.com",
    projectId: "linx-80b52",
    storageBucket: "linx-80b52.appspot.com",
    messagingSenderId: "396431094072",
    appId: "1:396431094072:web:ca04d532b6bc510e40d1cd",
    measurementId: "G-4CC8TKDLD3"
  };

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("wrapped").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault()
    var firstname = getElementVal("firstname");
    var email = getElementVal("email");

    saveMessages(firstname, email);

    document.getElementById("wrapped").reset();
    // $("#loader_form").fadeout();
};


const saveMessages = (firstname, email) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({ 
        firstname: firstname, 
        email: email,
    })
};

const getElementVal = (id) => { 
    return document.getElementById(id).value 
};