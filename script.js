const signInBtn = document.querySelector('.sign-in-btn');
const btn = document.querySelector('.btn');
const signIn = document.querySelector('.sign-in');
const close = document.querySelector('.close');
let slideImages = document.querySelectorAll('.img');
let dots = document.querySelectorAll('.dot');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
const landingPage = document.querySelector('.landing-page');




//Login Authenticaton

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username, password)

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
    deletInterval = setInterval(timer, 3000);
    function timer() {
        slideNext();
        indicators();
    }
}
autoSliding();



//Mouseover functionality

const container = document.querySelector('.left-component');
container.addEventListener('mouseover', function () {
    clearInterval(deletInterval);
});



//Mouseout functionality

container.addEventListener('mouseout', autoSliding);


//Function indicators

function indicators() {
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}


//Function switchimage

function switchImage(currentImage) {
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if (imageId > counter) {
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if (imageId == counter) {
        return;
    }
    else {
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators();
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