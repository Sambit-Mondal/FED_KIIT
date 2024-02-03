var signInBtn = document.querySelector('.sign-in-btn');
var btn = document.querySelector('.btn');
var signIn = document.querySelector('.sign-in');
var close = document.querySelector('.close');
var submit = document.querySelector('span.submit');
var slideImages = document.querySelectorAll('.img');
var dots = document.querySelectorAll('.dot');
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var landingPage = document.querySelector('.landing-page');




//Login Authenticaton

const form = document.querySelector("form");

submit.addEventListener("click", () => {

    const username = form.username.value;
    const password = form.password.value;

    const authenticated = authentication(username, password);

    if (authenticated) {
        window.location.href = "login-page.html";
    } else {
        alert("Please check your login credentials!")
    }
})




//Function for checking username and password

function authentication(username, password) {
    if (username === "Sambit" && password === "FED-KIIT") {
        return true
    } else {
        return false
    }
}




//Carousel

var counter = 0;



//Next button functionality (display: none)

next.addEventListener('click', slideNext);
function slideNext() {
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if (counter >= slideImages.length - 1) {
        counter = 0;
    }
    else {
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}



//Prev button functionality (display: none)

prev.addEventListener('click', slidePrev);
function slidePrev() {
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if (counter == 0) {
        counter = slideImages.length - 1;
    }
    else {
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
}



//Autosliding functionality

function autoSliding() {
    deletInterval = setInterval(timer, 2500);
    function timer() {
        slideNext();
        indicators();

    }
}
autoSliding();



//Function indicators

function indicators() {
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}


//Button functionality

signInBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signIn.classList.add('active');
    landingPage.classList.add('blur');
})

btn.addEventListener('click', (e) => {
    e.preventDefault();
    signIn.classList.add('active');
    landingPage.classList.add('blur');
})

close.addEventListener('click', (e) => {
    e.preventDefault();
    signIn.classList.remove('active');
    landingPage.classList.remove('blur');
})