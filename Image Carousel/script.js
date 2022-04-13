var images = document.getElementsByClassName('image');

var dots = document.getElementsByClassName('dot');


for (let i=0; i < dots.length; i++){
dots[i].addEventListener('click', (e) => imgChoose(e));
}
    
function imgChoose(e) {

    console.log(e.currentTarget.className);
    console.log(e);
    

    for (let i=0; i < dots.length; i++){
        if (dots[i].className === e.currentTarget.className){
            dots[i].classList.add('active'); 
            images[i].style.display = 'block';
        }
        if (dots[i].className !== e.currentTarget.className){
            dots[i].classList.remove('active');
            images[i].style.display = 'none';
        } 
    }

}




