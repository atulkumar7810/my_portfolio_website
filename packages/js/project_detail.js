// JavaScript to handle image click and change the main image in the dashboard preview
function showPreview(imgElement) {
    // Get the main image element
    const mainImage = document.getElementById('mainImage');

    // Change the source of the main image to the clicked image source
    mainImage.src = imgElement.src;

    // Add some custom styles or a class for additional visual effects (optional)
    mainImage.style.transition = "transform 0.3s ease-in-out";
    mainImage.style.transform = "scale(1.05)";
    setTimeout(() => {
        mainImage.style.transform = "scale(1)";
    }, 300);
}

// Optional: Scroll Up Button Visibility Toggle
const scrollup = document.getElementById('scrollup');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollup.classList.add('show-scroll');
    } else {
        scrollup.classList.remove('show-scroll');
    }
});

scrollup.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});





// Function to make iframe responsive
function makeIframeResponsive() {
    const iframe = document.querySelector("iframe");
    if (iframe) {
        const containerWidth = iframe.parentElement.offsetWidth;
        iframe.style.width = containerWidth + "px";
        iframe.style.height = (containerWidth * 9) / 16 + "px"; // Maintain 16:9 aspect ratio
    }
}

// Call the function initially
makeIframeResponsive();

// Update iframe dimensions on window resize
window.addEventListener("resize", makeIframeResponsive);
