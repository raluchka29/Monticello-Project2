$(function() {
  AOS.init();
});
document.getElementById("myForm").submit();

AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    
    var welcomeSection = document.querySelector('.welcome');
    if (welcomeSection) {
        welcomeSection.setAttribute('data-aos', 'fade-right');
    }
});


