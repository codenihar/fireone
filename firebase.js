const firebaseConfig = {
    apiKey: "AIzaSyBJO2XT1H0KqQ1j_n1fylywUzwaxDSlF",
    authDomain: "first-1eff1.firebaseapp.com",
    databaseURL: "https://first-1eff1-default-rtdb.firebaseio.com",
    projectId: "first-1eff1",
    storageBucket: "first-1eff1.appspot.com",
    messagingSenderId: "394511513082",
    appId: "1:394511513082:web:4ce77bd5baf4f3ded86043"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Add waste details to Firestore database
function addWasteDetails(type, amount, date) {
  db.collection("wasteDetails").add({
    type: type,
    amount: amount,
    date: date
  })
  .then((docRef) => {
    console.log("Waste details added with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding waste details: ", error);
  });
}

// Event listener for form submission
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const type = document.getElementById("waste-type").value;
  const amount = document.getElementById("waste-amount").value;
  const date = document.getElementById("waste-date").value;
  addWasteDetails(type, amount, date);
});
