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

// Define your kitten examples
const kittenExamples = [
  {
    image: "img/kitten1.jpeg",
    caption: "This is enough time for a kitten to grow into a grown cat!",
  },
  {
    image: "img/kitten2.jpg",
    caption: "A kitten could learn to pounce in this journey!",
  },
  {
    image: "img/kitten3.jpg",
    caption: "Plenty of days for a kitten to chase its tail!",
  },
  {
    image: "img/kitten4.jpg",
    caption: "Enough time for a kitten to nap in the sun!",
  },
  {
    image: "img/kitten5.jpg",
    caption: "This is sufficient for a kitten to become a wise grown cat!",
  },
];
let currentKittenIndex = 0;

function flipKitten(event) {
  event.stopPropagation(); // Prevents the click from reaching the parent
  const container = document.getElementById("kittenContainer");
  container.classList.add("flipped");
  setTimeout(() => {
    currentKittenIndex = (currentKittenIndex + 1) % kittenExamples.length;
    document.getElementById("kittenImage").src =
      kittenExamples[currentKittenIndex].image;
    document.getElementById("kittenCaption").textContent =
      kittenExamples[currentKittenIndex].caption;
    container.classList.remove("flipped");
  }, 600);
}
