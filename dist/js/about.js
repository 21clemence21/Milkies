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


function toggleDayAbout() {
    console.log('is it working');
    bodyAbout.classList.toggle('about-day');
    boxAbout.forEach(val => {
        val.classList.toggle('about-day');
    })
}