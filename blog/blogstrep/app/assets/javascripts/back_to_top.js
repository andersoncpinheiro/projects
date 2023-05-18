document.addEventListener("DOMContentLoaded", function() {
    const backToTopLink = document.getElementById('back-to-top-link');
    backToTopLink.addEventListener("click", function(event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });