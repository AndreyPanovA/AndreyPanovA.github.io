import {servMenu, drop, hamMenu} from "../module";

const itemsMenu = document.querySelectorAll('.navig>.frame__tagline');
const navig = document.querySelector('.navig');

const itemsMenuHam = document.querySelectorAll('.modal-menu>.menuitem');
const navigHam = document.querySelector('.modal-menu');

let i = 0; 
let u = 0;

itemsMenu.forEach((item) => {
  if (item.classList.contains('withdrop')) {
    let drops = navig.getElementsByClassName('dropdown')[i];
    item.addEventListener('mouseover',(e) => {
      drops.classList.add('on');
    })
    drops.addEventListener('mouseover',(e) => {
      drops.classList.add('on');
    })
    drops.addEventListener('mouseout',(e) => {
      drops.classList.remove('on');
    })
    i++; 
  }
}); 

itemsMenuHam.forEach((item) => {
  if (item.classList.contains('withdrop')) {
    console.log(item);
    let drops = navigHam.getElementsByClassName('dropdown')[u];
    console.log(drops);
    item.addEventListener('mouseover',(e) => {
      drops.classList.add('on');
    })
    drops.addEventListener('mouseover',(e) => {
      drops.classList.add('on');
    })
    drops.addEventListener('mouseout',(e) => {
      drops.classList.remove('on');
    })
    u++; 
  }
}); 


export {
    servMenu, drop, hamMenu
}