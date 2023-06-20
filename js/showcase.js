const hero = document.querySelector('#hero');
const heroItems = {
  menuToggle: hero.querySelector('#menu-toggle'),
  nav: hero.querySelector('.links-wrapper'),
  dropdown: hero.querySelector('.list1')
}

function addActiveDropdown(elem) {
  const closest = elem.closest('section');
  closest.classList.toggle('active');
}



export { hero ,heroItems, addActiveDropdown }