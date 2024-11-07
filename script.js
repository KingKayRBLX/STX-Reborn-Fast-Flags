document.querySelectorAll('.day-select').forEach(daySelect => {
    daySelect.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        // Uncheck all other checkboxes in the same group to allow only one selection
        if (checkbox.checked) {
          daySelect.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            if (cb !== checkbox) cb.checked = false;
          });
        }
      });
    });
  });
  
  document.querySelector('.save-button').addEventListener('click', () => {
    const apiKey = document.getElementById('admin-key').value;
    const updateCountdown = document.getElementById('update-countdown').value;
    const spawnTime1 = document.getElementById('merchant-spawn-time-1').value;
    const spawnTime2 = document.getElementById('merchant-spawn-time-2').value;
    const despawnTime1 = document.getElementById('merchant-despawn-time-1').value;
    const despawnTime2 = document.getElementById('merchant-despawn-time-2').value;
  
    // Get the checked value for each spawn and despawn day section (only one per section)
    const spawnDay1 = getCheckedDay('#spawn-day-1');
    const spawnDay2 = getCheckedDay('#spawn-day-2');
    const despawnDay1 = getCheckedDay('#despawn-day-1');
    const despawnDay2 = getCheckedDay('#despawn-day-2');
  
    // Check if the Admin Key is present
    if (!apiKey) {
      alert("Admin Key is required!");
      return;
    }
  
    // Prepare the data to be saved
    const data = {
      updateCountdown: updateCountdown,
      merchantSpawn1: { time: spawnTime1, day: spawnDay1 },
      merchantSpawn2: { time: spawnTime2, day: spawnDay2 },
      merchantDespawn1: { time: despawnTime1, day: despawnDay1 },
      merchantDespawn2: { time: despawnTime2, day: despawnDay2 }
    };
  
    console.log("Saving data:", data);
  });
  
  // Helper function to get the checked day value (only one checked day per section)
  function getCheckedDay(daySectionId) {
    const checkedCheckbox = document.querySelector(`${daySectionId} .day-select input[type="checkbox"]:checked`);
    return checkedCheckbox ? checkedCheckbox.value : null;
  }
  