console.log('hello');

// Select DOM items for about
const who = document.querySelector('.who-we-are');
console.log(who)
const engagement = document.querySelector('.engagement');
console.log(engagement);
const partners = document.querySelector('.our-partners');
console.log(partners);
const descriptionAbout = document.querySelector('.description-about');
console.log(descriptionAbout)

// configure le changement d'environnement pour le toggle day
const bodyAbout = document.querySelector('.about-night');
const boxAbout = document.querySelectorAll('.box-about-night');
console.log(bodyAbout);
console.log(boxAbout);

const sun = document.querySelector('#sun');

let sunAppear = false;

sun.addEventListener(onclick, toggleDayAbout)

function toggleDayAbout() {

    if(!sunAppear) {
        console.log('is it working');
        bodyAbout.classList.add('about-day');
        boxAbout.forEach(val => {
            val.classList.add('about-day');
        });
        sun.setAttribute("class","fas fa-moon fa-2x");
        sunAppear = true;
    } else {
        bodyAbout.classList.remove('about-day');
        boxAbout.forEach(val => {
            val.classList.remove('about-day');
        });
        sun.setAttribute("class","fas fa-sun fa-2x");
        sunAppear = false;
    }

}