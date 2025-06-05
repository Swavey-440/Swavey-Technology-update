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