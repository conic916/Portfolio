/* hamburger */

let menu = document.querySelector('.hamburger');

menu.addEventListener('click', function () {
  this.classList.toggle('hamburger--active');
}, false);

/* modals */


(function(){ 
  //zmienna dla wszystkich otwartych modali  : 
  var modalLinks = document.querySelectorAll(".contact__show-modal");
  //zmienna dla zamykanie modala 
  var modalOverlay = document.querySelector("#modal-overlay");
  // zmienna dla przerwania propoagacji :
  var modals = document.querySelectorAll(".contact__modal");
  // zamykanie modala poprzez kliknięcie w overlay  
  var closeButtons = document.querySelectorAll(".contact__modal .contact__close");
  
   // usuwanie klasy show  i dodanie overlay
  var showModal = function(event) {
      event.preventDefault();
      modalOverlay.classList.add("contact__show");
      for (var i = 0; i < modals.length; i++) {
        modals[i].classList.remove("contact__show");
      }
      document.querySelector(this.getAttribute("href")).classList.add('contact__show');
    };
    
  // dodanie do wszystkich modali 
      for (var i = 0; i < modalLinks.length; i++) {
          modalLinks[i].addEventListener("click", showModal);
    }
    
  var hideModal = function(event) {
      event.preventDefault();
      modalOverlay.classList.remove("contact__show");
    };
  
      for (var i = 0; i < closeButtons.length; i++) {
          closeButtons[i].addEventListener("click", hideModal);
    }
          modalOverlay.addEventListener("click", hideModal);
    
  // przerwanie propagacji 
      for (var i = 0; i < modals.length; i++) {
          modals[i].addEventListener("click", function(event) {
          event.stopPropagation();
      });
    }
  })();