const texts = [
  "We design elegant solutions.",
  "Tech. Design. Innovation.",
  "Your trusted partner in Web Development",
  "Your trusted partner in Graphics Design",
  "Your trusted partner in CCTV Installation & more.",
  "Book us now, let’s build something great!"
];

const speed = 100;
const eraseSpeed = 30;
const delayBetween = 1500;

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

const typewriter = document.getElementById("typewriter");

function type() {
  currentText = texts[i];

  if (isDeleting) {
    typewriter.textContent = currentText.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  } else {
    typewriter.textContent = currentText.substring(0, j++);
    if (j > currentText.length) {
      isDeleting = true;
      setTimeout(type, delayBetween);
      return;
    }
  }

  setTimeout(type, isDeleting ? eraseSpeed : speed);
}
type();


const menuToggle = document.getElementById('menu-toggle');
const closeIcon = document.getElementById('close-icon');
const hamburgerIcon = document.getElementById('hamburger-icon');
const navDrawer = document.getElementById('nav-drawer');
const navLinks = document.querySelectorAll('#nav-links');
const navBackground = document.querySelector('.nav-background');

// Initial state
hamburgerIcon.classList.add('active');

menuToggle.addEventListener('click', () => {
  const isOpen = hamburgerIcon.classList.contains('active');

  if (isOpen) {
    // Open the menu
    hamburgerIcon.classList.remove('active');
    closeIcon.classList.add('active');
    navDrawer.classList.add('show');
    navBackground.style.display = 'block';
  } else {
    // Close the menu
    closeIcon.classList.remove('active');
    hamburgerIcon.classList.add('active');
    navDrawer.classList.remove('show');
    navBackground.style.display = 'none';
  }
});

// Close when nav item is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeIcon.classList.remove('active');
    hamburgerIcon.classList.add('active');
    navDrawer.classList.remove('show');
    navBackground.style.display = 'none';
  });
});

navBackground.addEventListener('click', () => {
  closeIcon.classList.remove('active');
  hamburgerIcon.classList.add('active');
  navDrawer.classList.remove('show');
  navBackground.style.display = 'none';
})

document.querySelector('.submit').addEventListener('click', () => {
  document.querySelector('.name').value = "";
  document.querySelector('.email').value = "";
  document.querySelector('.tel').value = "";
  document.querySelector('.subject').value = "";
})