// Navbar Section

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar.classList.contains('show')) {
            new bootstrap.Collapse(navbar).toggle();
        }
    });
});

// Animation Control Section
AOS.init({
    duration: 1000,   // animation speed
    once: true,       // animate only once
    offset: 120       // trigger point
});

// Photo Gallery Section

function showImage(element) {

    // Change main preview image
    let mainImage = document.getElementById("mainPreview");
    mainImage.src = element.src;

    // Remove active class from all thumbnails
    let thumbnails = document.querySelectorAll(".thumb");
    thumbnails.forEach(img => img.classList.remove("active"));

    // Add active class to clicked thumbnail
    element.classList.add("active");
}