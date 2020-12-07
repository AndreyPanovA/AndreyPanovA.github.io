import {dropdown,dropdownItem} from "../module"
const modalShow = (idx, type)=> {
   type ? dropdownItem[idx].classList.remove("offItem") :  dropdownItem[idx].classList.add("offItem")
}
dropdown.forEach((el,idx)=> {
    el.addEventListener("mouseover", modalShow.bind(this, idx, true))
    dropdownItem[idx].addEventListener("mouseover",modalShow.bind(this, idx, true))
    dropdownItem[idx].addEventListener("mouseout",modalShow.bind(this, idx, false))
    el.addEventListener("mouseout",modalShow.bind(this, idx, false))
})


export {
    dropdown,dropdownItem
}