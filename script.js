const nightModeSwitch = document.querySelector('#night-mode-switch');
const body = document.querySelector('body');

nightModeSwitch.addEventListener('click', function() {
  nightModeSwitch.classList.toggle('clicked');
  body.classList.toggle('night-mode');
});



function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}


function toggleDetails() {
  var details = document.querySelector("#skills-details");
  var toggleButton = document.querySelector(".toggle-details");
  if (details.style.display === "none") {
    details.style.display = "block";
    toggleButton.textContent = "-";
  } else {
    details.style.display = "none";
    toggleButton.textContent = "+";
  }
}






const scrollToTopBtn = document.querySelector('#scroll-to-top');

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});



const container = document.getElementById("dots-container");
for (let i = 0; i < 1000; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  container.appendChild(dot);
}
