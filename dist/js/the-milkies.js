console.log("hellomilki");
const imgMilkies = document.querySelector(".img-milkies");

const titleMilkies = document.querySelector(".title-milkies");
console.log(titleMilkies);

imgMilkies.addEventListener("click", appearTitle);
imgMilkies.addEventListener("click", disappearTitle);

let showTitle = false;
function appearTitle() {
  if (!showTitle) {
    titleMilkies.classList.add("opacity");
    console.log("ca march");
    showTitle = true;
  } else {
    titleMilkies.classList.remove("opacity");
    console.log("ca ne marche pas");
    showTitle = false;
  }
  console.log(showTitle);
}

console.log(showTitle);

function disappearTitle() {
  console.log("function appear");
  titleMilkies.classList.remove("opacity");
}
