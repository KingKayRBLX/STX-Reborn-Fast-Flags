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
  
  document.querySelector('.save-button').addEventListener('click', () => {
    const apiKey = document.getElementById('admin-key').value;
    const updateCountdown = document.getElementById('update-countdown').value;
    const spawnTime1 = document.getElementById('merchant-spawn-time-1').value;
    const spawnTime2 = document.getElementById('merchant-spawn-time-2').value;
    const despawnTime1 = document.getElementById('merchant-despawn-time-1').value;
    const despawnTime2 = document.getElementById('merchant-despawn-time-2').value;

    const spawnDays1 = Array.from(document.querySelectorAll('#spawn-day-1 .day-select input[type="checkbox"]:checked'))
                  .map(checkbox => checkbox.value);
const spawnDays2 = Array.from(document.querySelectorAll('#spawn-day-2 .day-select input[type="checkbox"]:checked'))
                  .map(checkbox => checkbox.value);

const despawnDays1 = Array.from(document.querySelectorAll('#despawn-day-1 .day-select input[type="checkbox"]:checked'))
                  .map(checkbox => checkbox.value);
const despawnDays2 = Array.from(document.querySelectorAll('#despawn-day-2 .day-select input[type="checkbox"]:checked'))
                  .map(checkbox => checkbox.value);

    if (!apiKey) {
      alert("Admin Key is required!");
      return;
    }

    const data = {
      updateCountdown: updateCountdown,
      merchantSpawn1: { time: spawnTime1, days: spawnDays1 },
      merchantSpawn2: { time: spawnTime2, days: spawnDays2 },
      merchantDespawn1: { time: despawnTime1, days: despawnDays1 },
      merchantDespawn2: { time: despawnTime2, days: despawnDays2 }
    };

    console.log("Saving data:", data);
  });