// Set admin key for access validation
const ADMIN_KEY = "KAY";

// Function to validate admin key
document.getElementById('admin-key').addEventListener('blur', () => {
  const apiKey = document.getElementById('admin-key').value;
  if (apiKey !== ADMIN_KEY) {
    alert("Invalid Admin Key!");
    document.getElementById('admin-key').value = '';
  }
});

// Restrict day selection to one checkbox per group
document.querySelectorAll('.day-select').forEach(daySelect => {
  daySelect.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        daySelect.querySelectorAll('input[type="checkbox"]').forEach(cb => {
          if (cb !== checkbox) cb.checked = false;
        });
      }
    });
  });
});

// Save button click handler
document.querySelector('.save-button').addEventListener('click', () => {
  const updateCountdown = document.getElementById('update-countdown').value;
  const spawnTime1 = document.getElementById('merchant-spawn-time-1').value;
  const despawnTime1 = document.getElementById('merchant-despawn-time-1').value;

  // Get checked values for spawn and despawn days
  const spawnDay1 = getCheckedDay('#spawn-day-1');
  const despawnDay1 = getCheckedDay('#despawn-day-1');

  // Check if fields are filled
  if (!updateCountdown || !spawnTime1 || !despawnTime1) {
    alert("All fields must be filled out.");
    return;
  }

  // Prepare the data to be saved
  const data = {
    updateCountdown,
    merchantSpawn1: { time: spawnTime1, day: spawnDay1 },
    merchantDespawn1: { time: despawnTime1, day: despawnDay1 },
  };

  console.log("Saving data:", data);
  alert("Data saved successfully!");
});

// Helper function to get the selected day for a section
function getCheckedDay(daySectionId) {
  const checkedCheckbox = document.querySelector(`${daySectionId} .day-select input[type="checkbox"]:checked`);
  return checkedCheckbox ? checkedCheckbox.value : null;
}
