// alert("cool");
const url = "https://larsonv.ru/mobile.php";
const data = { c: "Review", m: "getMore", from: "0" };

fetch("https://larsonv.ru/mobile.php", {
  method: "POST",
  body: JSON.stringify({ c: "Review", m: "getMore", from: "0" }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// getResourse("https://larsonv.ru/mobile.php").then((response) => {
//   let actMass = [];
//   response.forEach((element, i) => {
//     console.log(element);
//   });
// });

// const test = getResourse(data);
// test.then((elem) => {
//   console.log(elem);
// });

// class Service {
//   _apiBase = "https://larsonv.ru/review?c=Review&m=getMore&from=0";
//   async getResourse(url) {
//     const res = await fetch(url);
//     const body = await res.json();
//     return body;
//   }
//   async getResourses(data) {
//     const res = await fetch(this._apiBase, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//     const response = await res.json();
//     return response;
//   }
//   async getAllStoks() {
//     const res = await this.getResourses({
//       ...Chanels.stoks,
//       ...Chanels.connection,
//     });
//     return res;
//   }
//   getHistory = async () => {
//     const res = await this.getResourses({
//       ...Chanels.history,
//       ...Chanels.connection,
//     });
//     return res;
//   };
// }

// const review = new Service();
// alert(review.getResourse(review._apiBase));
