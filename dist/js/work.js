const bodyWork = document.querySelector('.work-night');
const boxWork = document.querySelectorAll('.box-work-night');
console.log(bodyWork);
console.log(boxWork);
const sun = document.querySelector('.fa-sun');
console.log(sun)


function toggleDayWork() {
    console.log('is it working');
    bodyWork.classList.toggle('work-day');
    boxWork.forEach(val => {
        val.classList.toggle('work-day');
    });
    
    var e = document.getElementById('sun');
if (e.classList.contains('fa-sun')) {
  e.classList.toggle('fa-moon');
} else {
  e.classList.add('fa-sun');
}
}



let sunAppear = false;
const txtsecondary = document.querySelectorAll('text-secondary');
console.log(txtsecondary);

sun.addEventListener(onclick, toggleDayWork)

function toggleDayWork() {

    if(!sunAppear) {
        
      bodyWork.classList.add('work-day');
      boxWork.forEach(val => {
          val.classList.add('work-day');
      });

      txtsecondary.forEach(val => {
        val.classList.add('text-secondary-day');
      });
        sun.setAttribute("class","fas fa-moon fa-2x");
        sunAppear = true;
    } else {
      bodyWork.classList.remove('work-day');
      boxWork.forEach(val => {
          val.classList.remove('work-day');
      });
      txtsecondary.forEach(val => {
        val.classList.remove('text-secondary-day');
      });
      sun.setAttribute("class","fas fa-sun fa-2x");
      sunAppear = false;
    }

}