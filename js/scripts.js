(function () {
  let btn = document.querySelector(".section__link"),
      form = document.querySelector(".section__form"),
      ank = btn.getAttribute("href");
      offset =  50;
  btn.onclick = function (e) {
    e.preventDefault();
    document.setAnimations({
      scrollTop: ank.offsetTop - offset}, 1000)
  }
})()