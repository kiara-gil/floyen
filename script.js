document.addEventListener("DOMContentLoaded", function() {
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.getElementById("lightbox-content");
  const closeBtn = document.getElementById("close-lightbox");

  // Select all images that trigger the lightbox when clicked
  const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');

  lightboxTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default anchor click action
      const imageSrc = this.querySelector('img').src; // Get the image source
      lightbox.style.display = "flex"; // Show the lightbox
      lightboxContent.src = imageSrc; // Set the lightbox image to the clicked image
    });
  });

  // Close the lightbox when the close button is clicked
  closeBtn.addEventListener('click', function() {
    lightbox.style.display = "none"; // Hide the lightbox
  });

  // Close the lightbox if the user clicks outside the image
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none"; // Hide the lightbox
    }
  });
});

