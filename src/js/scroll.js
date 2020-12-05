function Scroll (event) {
    const arr =document.querySelectorAll('.spans').forEach((x) => {
    if (pageYOffset > 1800) {
      x.classList.add("changeColor")
    }
    else {
      x.classList.remove("changeColor")
    }
  });
  }
export default Scroll