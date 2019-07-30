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


const bodyMilkies = document.querySelector('.milkies-night');
const boxMilkies = document.querySelectorAll('.txt-box-team');
const NameMilkies = document.querySelectorAll('.name');
console.log(bodyMilkies);



function toggleDayMilkies() {
    console.log('is it working');
    bodyMilkies.classList.toggle('milkies-day');
   boxMilkies.forEach (val => {
      val.classList.toggle('milkies-day');
    })
    NameMilkies.forEach (val => {
      val.classList.toggle('milkies-day');
  })

}

let sunAppear = false;

sun.addEventListener(onclick, toggleDayMilkies)

function toggleDayMilkies() {

    if(!sunAppear) {
      bodyMilkies.classList.toggle('milkies-day');
      boxMilkies.forEach (val => {
         val.classList.add('milkies-day');
       })
       NameMilkies.forEach (val => {
         val.classList.add('milkies-day');
     })
        sun.setAttribute("class","fas fa-moon fa-1x");
        sunAppear = true;
    } else {
      bodyMilkies.classList.toggle('milkies-day');
      boxMilkies.forEach (val => {
         val.classList.remove('milkies-day');
       })
       NameMilkies.forEach (val => {
         val.classList.remove('milkies-day');
     })
      sun.setAttribute("class","fas fa-sun fa-1x");
      sunAppear = false;
    }

}