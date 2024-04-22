const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("#nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const slides = document.querySelectorAll(".mySlides");
const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("enlarge-image");
const modalImage = document.getElementById("modal-image");
const galleryImages = document.querySelectorAll("#gallery-image");

let slideIndex = 0;

function mobileMenu() {
    navMenu.classList.toggle("display");
}

function closeMenu() {
    navMenu.classList.remove("display");
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000);
}

showSlides();

hamburger.onclick = mobileMenu;
navLink.forEach(n => n.addEventListener("click", closeMenu));

slides.forEach(slide => {
    slide.addEventListener("click", (e) => {
        modalOverlay.style.display = "block";
        modalImage.src = e.target.src;
        modal.showModal();
    });
});

modalOverlay.addEventListener("click", () => {
    modal.close();
    modalOverlay.style.display = "none";
});

// Get all gallery images
// Add click event listener to each gallery image

galleryImages.forEach(image => {
    image.addEventListener("click", (e) => {
        modalOverlay.style.display = "block";
        modalImage.src = e.target.src;
        modal.showModal();
    });
});