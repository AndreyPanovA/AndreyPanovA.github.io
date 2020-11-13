import "./less/index.less";
import { Excel } from "./components/excel/Excel";
import { Header } from "./components/header/Header";
import { Toolbar } from "./components/toolbar/Toolbar";
import { Formula } from "./components/formula/Formula";
import { Table } from "./components/table/Table";

const excel = new Excel("#app", {
    components: [Header, Toolbar, Formula, Table],
});


const burger = document.querySelector(".burger")
const menu = document.querySelector(".navigation")
const tabLink =document.querySelectorAll(".tab-link")


tabLink.forEach((elem, idx)=> {
    elem.addEventListener("click", (e)=> {
        tabLink.forEach((item)=> {
            item.classList.remove("active-tab")
        })
        elem.classList.add("active-tab")
    })
})
burger.addEventListener("click",()=> {
menu.classList.toggle("nav-show")
})

