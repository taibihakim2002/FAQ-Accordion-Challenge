let icons = document.querySelectorAll(".icon img");
let content = document.querySelectorAll(".content");

let contentArray = Array.from(content);

Array.from(icons).forEach((e, ind) => {
  e.onclick = function () {
    if (contentArray[ind].classList.contains("opened")) {
        contentArray[ind].classList.remove("opened");
        e.setAttribute("src", "assets/images/icon-plus.svg");
    } else {
      contentArray[ind].classList.add("opened");
      e.setAttribute("src", "assets/images/icon-minus.svg");
    }
  };
});
