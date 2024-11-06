
//home page starts

$(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
  });

//3rd part
  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".img-thumbnail");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target); // Trigger animation only once
        }
      });
    });
  
    images.forEach((img) => observer.observe(img));
  });

  //4th part
  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".animate-on-scroll");
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in"); // Add animation class
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    });
  
    images.forEach(img => observer.observe(img));
  });
//home page ends  
  