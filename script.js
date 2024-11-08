// Commenting out Firebase parts
/*
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
*/

// Static admin key
const ADMIN_KEY = "KAY";

// Login button event listener
document.getElementById('login-button').addEventListener('click', () => {
  const adminKey = document.getElementById('admin-login-key').value;
  const loginMessage = document.getElementById('login-message');

  if (adminKey === ADMIN_KEY) {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-ui').style.display = 'block';
  } else {
    loginMessage.textContent = "Access Denied: Invalid Admin Key";
    loginMessage.style.color = "red";
  }
});

// Event listener for Save Changes button
document.getElementById('save-button').addEventListener('click', () => {
  const updateCountdown = document.getElementById('update-countdown').value;
  const spawnTime1 = document.getElementById('merchant-spawn-time-1').value;
  
  // Get checked day for spawn-day-1
  const spawnDay1 = document.querySelector('input[name="spawn-day-1"]:checked');
  const selectedSpawnDay1 = spawnDay1 ? spawnDay1.value : null;

  const data = {
    updateCountdown: updateCountdown,
    merchantSpawn1: { time: spawnTime1, day: selectedSpawnDay1 },
  };

  console.log("Saving data:", data);
  alert("Changes saved successfully!");
});
