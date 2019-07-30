const bodyWork = document.querySelector('.work-night');
const boxWork = document.querySelectorAll('.box-work-night');
console.log(bodyWork);
console.log(boxWork);


function toggleDayWork() {
    console.log('is it working');
    bodyWork.classList.toggle('work-day');
    boxWork.forEach(val => {
        val.classList.toggle('work-day');
    })
}