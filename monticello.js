function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7128, lng: -74.0060},
    zoom: 12 
  });
  var marker = new google.maps.Marker({
    position: {lat: 40.734794, lng: -73.937625}, 
    map: map,
    icon: 'https://maps.google.com/mapfiles/ms/micons/red-dot.png' 
  });
}


function scrollToSection(section1, section2, section3, section4, section5) {
  const section = document.getElementById(section1, section2, section3, section4, section5);
  if (section) {
      window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
      });
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.navbar-list a');
  menuItems.forEach(item => {
      item.addEventListener('click', event => {
          event.preventDefault();
          const targetId = item.getAttribute('href').substring(1);
          scrollToSection(targetId);
      });
  });
}); 
const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    myForm.submit();
});




/*

AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    
    var welcomeSection = document.querySelector('.welcome');
    if (welcomeSection) {
        welcomeSection.setAttribute('data-aos', 'fade-right');
    }
});
*/      
