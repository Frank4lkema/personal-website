
// import Typed from 'typed.js';


document.addEventListener('DOMContentLoaded', function(event){
  function loadDynamicBannerText() {
    new Typed('.test', {
      strings: ["Ruby on Rails", "JavaScript","HTML","CSS","SQL"],
      typeSpeed: 70,
      loop: true,
      showCursor: false
    });
  }
  loadDynamicBannerText();
})
