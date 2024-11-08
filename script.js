// Initialize Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase App and Firestore
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to verify admin key from Firestore
async function verifyAdminKey(adminKey) {
  const adminDoc = db.collection("admins").doc(adminKey);
  const docSnap = await adminDoc.get();
  return docSnap.exists;
}

// Event listener for login button
document.getElementById('login-button').addEventListener('click', async () => {
  const adminKey = document.getElementById('admin-login-key').value;
  const loginMessage = document.getElementById('login-message');

  // Verify the admin key
  const isValid = await verifyAdminKey(adminKey);
  if (isValid) {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-ui').style.display = 'block';
  } else {
    loginMessage.textContent = "Access Denied: Invalid Admin Key";
    loginMessage.style.color = "red";
  }
});
