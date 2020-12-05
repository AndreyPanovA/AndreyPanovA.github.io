import {dropdown,dropdownItem} from "../module"

const servMenu = document.getElementsByClassName('frame__tagline')[2];
const drop = document.getElementsByClassName('dropdown')[0];

servMenu.addEventListener('mouseover',(e) => {
  drop.classList.add('on');
})
drop.addEventListener('mouseover',(e) => {
  drop.classList.add('on');
})
drop.addEventListener('mouseout',(e) => {
  drop.classList.remove('on');
})

export {
    dropdown,dropdownItem
}