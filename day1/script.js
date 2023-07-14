
let images = document.querySelectorAll('.cards');

images.forEach((image) => {
  image.addEventListener('click', function() {
      // Remove 'active' class from all images
      images.forEach((img) => {
          img.classList.remove('active');
      });
      
      // Add 'active' class to the clicked image
      image.classList.add('active');
  });
});