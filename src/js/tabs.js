import {tabLink} from "../module"
tabLink.forEach((elem)=> {
    elem.addEventListener("click", (e)=> {
        tabLink.forEach((item)=> {
            item.classList.remove("active-tab")
        })
        const edutype = document.getElementsByClassName('edu-type');
        const worktype = document.getElementsByClassName('work-type');
        if (elem.dataset.id == 1) {
          [...worktype].forEach((item) => {
            item.classList.remove("off");
          });
          [...edutype].forEach((item) => {
            item.classList.add("off");
          })
        } else if (elem.dataset.id == 2) {
          [...worktype].forEach((item) => {
            item.classList.add("off");
          });
          [...edutype].forEach((item) => {
            item.classList.remove("off");
          })
        }
        elem.classList.add("active-tab")
    })
})
export {
    tabLink
}