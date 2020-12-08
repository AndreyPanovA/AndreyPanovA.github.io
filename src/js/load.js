
import { moduleText,next,chengeModule, workList,eduList} from "../module";
// import "../js/libs/mo.min.js";
import "./libs/mo.min.js";
import Circle from "./menu-circle"
const start =window.addEventListener("load", ()=> {
    moduleText.innerHTML= workList[0]
    Circle(e)
})
export {
    start
}
