const firebaseConfig = {
    apiKey: "AIzaSyBJO2XT1H0KqQ1j_n1fylywUzwaxDSlF0M",
    authDomain: "first-1eff1.firebaseapp.com",
    databaseURL: "https://first-1eff1-default-rtdb.firebaseio.com",
    projectId: "first-1eff1",
    storageBucket: "first-1eff1.appspot.com",
    messagingSenderId: "394511513082",
    appId: "1:394511513082:web:4ce77bd5baf4f3ded86043"
  };
// initialize firebase
firebase.initializeApp(firebaseConfig);
  
// reference your database
var contactFormDB = firebase.database().ref("contactForm");
  
document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var msgContent = getElementVal('msgContent');

    console.log(name,emailid,msgContent);
    saveMessages(name,emailid,msgContent);
}

const saveMessages = (name,emailid,msgContent) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name:name,
        emailid:emailid,
        msgContent:msgContent,    
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value; 
}