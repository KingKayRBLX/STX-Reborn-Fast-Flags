document.addEventListener("DOMContentLoaded", function () {
  // Set admin key for access validation
  const ADMIN_KEY = "KAY";

  // Function to check admin key and display the correct screen
  function checkAdminKey() {
    const apiKey = document.getElementById("admin-key").value;
    const accessDeniedMessage = document.getElementById("access-denied");

    if (apiKey === ADMIN_KEY) {
      document.getElementById("login-screen").classList.remove("active");
      document.getElementById("main-screen").classList.add("active");
    } else {
      accessDeniedMessage.style.display = "block";
    }
  }

  // Expose checkAdminKey function to global scope for the onclick attribute
  window.checkAdminKey = checkAdminKey;

  // Restrict day selection to one checkbox per group
  document.querySelectorAll(".day-select").forEach((daySelect) => {
    daySelect.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          daySelect.querySelectorAll("input[type='checkbox']").forEach((cb) => {
            if (cb !== checkbox) cb.checked = false;
          });
        }
      });
    });
  });

  // Save button click handler
  function saveChanges() {
    const updateCountdown = document.getElementById("update-countdown").value;
    const spawnTime1 = document.getElementById("merchant-spawn-time-1").value;
    const spawnTime2 = document.getElementById("merchant-spawn-time-2").value;
    const despawnTime1 = document.getElementById("merchant-despawn-time-1").value;
    const despawnTime2 = document.getElementById("merchant-despawn-time-2").value;

    // Get checked values for spawn and despawn days
    const spawnDay1 = getCheckedDay("spawn-day-1");
    const spawnDay2 = getCheckedDay("spawn-day-2");
    const despawnDay1 = getCheckedDay("despawn-day-1");
    const despawnDay2 = getCheckedDay("despawn-day-2");

    const data = {
      updateCountdown,
      merchantSpawn1: { time: spawnTime1, day: spawnDay1 },
      merchantSpawn2: { time: spawnTime2, day: spawnDay2 },
      merchantDespawn1: { time: despawnTime1, day: despawnDay1 },
      merchantDespawn2: { time: despawnTime2, day: despawnDay2 },
    };

    console.log("Saved Data:", data);
    alert("Data saved successfully!");
  }

  // Helper function to get the checked day
  function getCheckedDay(name) {
    const checkedCheckbox = document.querySelector(
      `input[name="${name}"]:checked`
    );
    return checkedCheckbox ? checkedCheckbox.value : null;
  }

  // Expose saveChanges function to global scope for the onclick attribute
  window.saveChanges = saveChanges;
});
