import {tabLink, worktype, edutype, sitetype} from "../module"
tabLink.forEach((elem)=> {
    elem.addEventListener("click", (e)=> {
        tabLink.forEach((item)=> {
            item.classList.remove("active-tab")
        })

        if (elem.dataset.id == 1) {
          sitetype = 0; 
          [...worktype].forEach((item) => {
            item.classList.remove("off");
          });
          [...edutype].forEach((item) => {
            item.classList.add("off");
          })
        } else if (elem.dataset.id == 2) {
          sitetype = 1; 
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
    tabLink, worktype, edutype, sitetype
}