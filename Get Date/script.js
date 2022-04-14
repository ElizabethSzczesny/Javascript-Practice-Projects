let daynameindex = document.querySelector('.day-name');
let monthindex = document.querySelector('.month');
let dayindex = document.querySelector('.day');
let yearindex = document.querySelector('.year');

let button = document.querySelector('.click');

button.addEventListener('click',getDate);

function getDate(){
    let date = new Date();

    let dayname = date.getDay();
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();
    let months = ['January','February','March','April','May',
    'June','July','August','September','October','November','December'];
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday',
    'Saturday'];

    daynameindex.innerHTML = days[dayname] + ',';
    monthindex.innerHTML = months[month];
    dayindex.innerHTML = day + ',';
    yearindex.innerHTML = year;

}
