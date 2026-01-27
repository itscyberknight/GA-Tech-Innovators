const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


// WhatsApp Robo
function openWhatsApp(){
  window.open(
    "https://wa.me/919962799568?text=Hi%20GA%20Tech%20Innovators%2C%20I%20need%20more%20details",
    "_blank"
  );
}
