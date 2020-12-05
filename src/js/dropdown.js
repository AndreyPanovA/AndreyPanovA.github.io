import {dropdown,dropdownItem} from "../module"
dropdown.forEach((el,idx)=> {
    el.addEventListener("click", ()=> {
        dropdownItem[idx].classList.toggle("offItem")
      })
})

export {
    dropdown,dropdownItem
}