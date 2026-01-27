function openWhatsApp(){
  window.open(
    "https://wa.me/919962799568?text=Hi%20GA%20Tech%20Innovators%2C%20I%20need%20more%20details",
    "_blank"
  );
}

const images = [
  {src:"Assets/gallery/img1.jpeg", caption:"Game Development Hands-on Workshop On Sona College of Arts and Science Salem"},
  {src:"Assets/gallery/img2.jpg", caption:"Game Development Hands-on Workshop On Sona College of Arts and Science Salem"},
  {src:"Assets/gallery/img3.jpg", caption:"Game Development Hands-on Workshop On Sona College of Arts and Science Salem"},
  {src:"Assets/gallery/img4.jpeg", caption:"Game Development Hands-on Workshop On Sona College of Arts and Science Salem"},
  {src:"Assets/gallery/img5.jpeg", caption:"Cybersecurity & AI Awareness Webinar On K.S.Rangasamy College of Technology Tiruchengode"},
  {src:"Assets/gallery/img6.png", caption:"Cybersecurity & AI Awareness Webinar On K.S.Rangasamy College of Technology Tiruchengode"},
  {src:"Assets/gallery/img7.jpeg", caption:"Cybersecurity & AI Awareness Webinar On K.S.Rangasamy College of Technology Tiruchengode"},
  {src:"Assets/gallery/img8.jpeg", caption:"Cybersecurity & AI Awareness Webinar On K.S.Rangasamy College of Technology Tiruchengode"}
];

let currentIndex = 0;

function openLightbox(index){
  currentIndex = index;
  document.getElementById("lightbox").style.display = "flex";
  updateLightbox();
}

function closeLightbox(){
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(step){
  currentIndex += step;
  if(currentIndex < 0) currentIndex = images.length - 1;
  if(currentIndex >= images.length) currentIndex = 0;
  updateLightbox();
}

function updateLightbox(){
  document.getElementById("lightbox-img").src = images[currentIndex].src;
  document.getElementById("lightbox-caption").innerText = images[currentIndex].caption;
}
