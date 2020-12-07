import {servMenu, drop, hamMenu} from "../module"

servMenu.addEventListener('mouseover',(e) => {
  drop[1].classList.add('on');
})
drop[1].addEventListener('mouseover',(e) => {
  drop[1].classList.add('on');
})
drop[1].addEventListener('mouseout',(e) => {
  drop[1].classList.remove('on');
})

hamMenu[1].addEventListener('mouseover',(e) => {
    drop[0].classList.add('on');
})
hamMenu[1].addEventListener('mouseout',(e) => {
    drop[0].classList.remove('on');
})
drop[0].addEventListener('mouseover',(e) => {
    drop[0].classList.add('on');
})


export {
    servMenu, drop, hamMenu
}