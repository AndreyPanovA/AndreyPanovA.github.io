import {tabLink, worktype, edutype, moduleText,next,chengeModule, workList,eduList, } from "../module"; 

let sitetype = 0; 

tabLink.forEach((elem)=> {
    elem.addEventListener("click", (e)=> {
        tabLink.forEach((item)=> {
            item.classList.remove("active-tab")
        })
        if (elem.dataset.id == 1) {
          moduleText.innerHTML= workList.index[0]
         
          sitetype = 0; 
          [...worktype].forEach((item) => {
            item.classList.remove("off");
          });
          [...edutype].forEach((item) => {
            item.classList.add("off");
          })
        } else if (elem.dataset.id == 2) {
          moduleText.innerHTML= eduList[0]
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

const changeText =({target, target:{ dataset:{id}}}, el=id)=> {
  let textArr = workList.index; 
  if (sitetype == 1) textArr = eduList; 
  el++
  if (el>textArr.length-1) el=0
  target.setAttribute("data-id", el)
  moduleText.innerHTML= textArr[el]
}
next.addEventListener("click",changeText)
export {
    tabLink, worktype, edutype, sitetype, next
}