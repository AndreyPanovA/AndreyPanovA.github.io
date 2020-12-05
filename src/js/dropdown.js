import {servMenu, drop} from "../module"

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
    servMenu, drop
}