import { workList, eduList, nextMenu, sitetype, circle, headCont, head } from "../module"; 

nextMenu.addEventListener('click', (e) => {
    let list = ""; 
    this.circle++; 

     if (sitetype == 0) {
        if (circle > 6) {
            circle = 0; 
        }

        head.textContent = workList[circle][0]; 

        workList[circle][1].forEach((item) => {
            list += "<p>"+item+"</p>";
        });

        headCont.innerHTML = list; 
    } else {
        if (circle > 5) {
            circle = 0; 
        }

        head.textContent = eduList[circle]; 
     }
});

export {
    workList, eduList, nextMenu, sitetype, circle, headCont, head
}