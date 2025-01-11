
// Find all nav links
var navLinks = document.querySelectorAll('.navbar-collapse a');

// Add a click action to each link
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    // Find the navbar
    var navbar = document.querySelector('.navbar-collapse');
    // Remove the "show" class to hide the menu
    navbar.classList.remove('show');
  });
});
