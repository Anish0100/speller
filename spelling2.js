const openMenu = document.querySelector('#show-menu');
const hideMenuIcon = document.querySelector('#hide-menu');
const sideMenu = document.querySelector('#nav-menu');
const menuBars = document.getElementsByClassName('menu-bars');

openMenu.addEventListener('click', function() {
  sideMenu.classList.add('active');
});

hideMenuIcon.addEventListener('click', function() {
  sideMenu.classList.remove('active');
});
document.addEventListener('click', function(event) {
  let targetElement = event.target; // Clicked element

  // Check if the clicked element is outside the navbar or its parent elements
  while (targetElement != null) {
    if (targetElement === sideMenu || targetElement === openMenu) {
      return; // Clicked element is inside the navbar, do nothing
    }
    targetElement = targetElement.parentElement;
  }

  // Clicked element is outside the navbar, remove the 'active' class
  sideMenu.classList.remove('active');
});


