import { hero, heroItems,addActiveDropdown } from './showcase.js';

const body = document.querySelector('body');

heroItems.menuToggle.addEventListener('click', e => {

  const {menuToggle,nav,dropdown} = heroItems;
  const children = Array.from(dropdown.children); 

  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');

  if (nav.classList.contains('active')) {
    body.style.overflowY = 'hidden'
    body.style.paddingRight = '15px'
  } else {
    body.style.overflowY = 'scroll';
    body.style.paddingRight = '0';
  }
  
  children.forEach(elem => {
    elem.addEventListener('click', e => {
      let target = e.target;
  
      if (target.matches('button')) {
        addActiveDropdown(target);
      }
    })


  })
})