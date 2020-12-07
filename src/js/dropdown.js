import {servMenu, drop, hamMenu} from "../module";

const itemsMenu = document.querySelectorAll('.navig>.frame__tagline');
const navig = document.querySelector('.navig');
let i = 0; 

hamMenu[1].addEventListener('mouseover',(e) => {
    drop[0].classList.add('on');
})
hamMenu[1].addEventListener('mouseout',(e) => {
    drop[0].classList.remove('on');
})
drop[0].addEventListener('mouseover',(e) => {
    drop[0].classList.add('on');
})

itemsMenu.forEach((item) => {
  if (item.classList.contains('withdrop')) {
    console.log(item);
    let drops = navig.getElementsByClassName('dropdown')[i];
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
    i++; 
  }
}); 


export {
    servMenu, drop, hamMenu
}