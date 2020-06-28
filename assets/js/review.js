// alert("cool");
let review_body = document.querySelector(".scrollview");
const url = "https://larsonv.ru/mobile.php";
const data = { c: "Review", m: "getMore", from: "0" };
async function getReviews() {
  const res = await fetch("https://larsonv.ru/mobile.php", {
    method: "POST",
    body: JSON.stringify({ c: "Review", m: "getMore" }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await res.json();
}

getReviews().then((res) => {
  let fioArr = [];
  let componentAll = ``;
  res.forEach((elem, idx) => {
    let fio = `${elem.f} ${elem.i} ${elem.o}`;
    console.log(res);
    // arr.push(fio);
    // if (elem.review == "") {
    let component = `
    <div class="shad__reviw">
    Оценка: ${elem.rating}
    — ${elem.f} ${elem.i} ${elem.o}
     
    </div>
    `;
    // <div class="little">Отзыв: ${elem.review}<div/>
    // }
    // else {
    // let component = `
    //       <div class="shad__reviw">
    //       Оценка: ${elem.rating}
    //       — ${elem.f} ${elem.i} ${elem.o}
    //       </div>

    //       `;
    //   }

    componentAll += component;
    review_body.innerHTML = componentAll;
  });
});
