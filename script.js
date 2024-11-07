document.querySelectorAll('.day-select').forEach(daySelect => {
    daySelect.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          // Uncheck all other checkboxes in the same group
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
  
    // For spawn days and despawn days, find the checked checkboxes
    const spawnDay1Checked = document.querySelector('#spawn-day-1 .day-select input[type="checkbox"]:checked');
    const spawnDay2Checked = document.querySelector('#spawn-day-2 .day-select input[type="checkbox"]:checked');
    const despawnDay1Checked = document.querySelector('#despawn-day-1 .day-select input[type="checkbox"]:checked');
    const despawnDay2Checked = document.querySelector('#despawn-day-2 .day-select input[type="checkbox"]:checked');
  
    // Get the value of the selected checked checkbox, or null if none is checked
    const spawnDay1 = spawnDay1Checked ? spawnDay1Checked.value : null;
    const spawnDay2 = spawnDay2Checked ? spawnDay2Checked.value : null;
    const despawnDay1 = despawnDay1Checked ? despawnDay1Checked.value : null;
    const despawnDay2 = despawnDay2Checked ? despawnDay2Checked.value : null;
  
    if (!apiKey) {
      alert("Admin Key is required!");
      return;
    }
  
    // Create the data object
    const data = {
      updateCountdown: updateCountdown,
      merchantSpawn1: { time: spawnTime1, day: spawnDay1 },
      merchantSpawn2: { time: spawnTime2, day: spawnDay2 },
      merchantDespawn1: { time: despawnTime1, day: despawnDay1 },
      merchantDespawn2: { time: despawnTime2, day: despawnDay2 }
    };
  
    console.log("Saving data:", data);
  });
  