let currentPage = 1;

function toggleClass(e, toggleClassName) {
  if (e.className.includes(toggleClassName)) {
    e.className = e.className.replace(" " + toggleClassName, "");
  } else {
    e.className += " " + toggleClassName;
  }
}

function movePage(e, page) {
  if (page == currentPage) {
    currentPage += 2;
    toggleClass(e, "left-side");
    toggleClass(e.nextElementSibling, "left-side");
  } else if (page == currentPage - 1) {
    currentPage -= 2;
    toggleClass(e, "left-side");
    toggleClass(e.previousElementSibling, "left-side");
  }
  if (currentPage === 3) {
    animateValue("daysTogether", 0, calculateDaysTogether(), 2000);
  } else if (currentPage === 5) {
    animateValue("nicknameCount", 0, 99, 2000);
    animateValue("restaurantsCount", 0, 99, 2000);
  }

  //   console.log(currentPage);
}

// Set your anniversary date (adjust as needed)
const anniversaryDate = new Date("2023-10-02");

// Calculate the number of days together
function calculateDaysTogether() {
  const now = new Date();
  const diffTime = now - anniversaryDate; // difference in milliseconds
  return Math.floor(diffTime / (1000 * 60 * 60 * 24)); // convert ms to days
}

// Animate a numeric value from start to end over the given duration (in ms)
function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  let startTimestamp = null;
  function step(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}
