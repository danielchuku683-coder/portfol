// Mobile Menu
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Typing Effect
const typing = document.querySelector(".typing");
const words = ["Web Developer", "Creative Designer", "Frontend Specialist"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  
  if (!isDeleting) {
    typing.textContent = currentWord.slice(0, j++);
    if (j > currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    typing.textContent = currentWord.slice(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }
  setTimeout(type, 100);
}

type();
