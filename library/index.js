let burgerButton = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burger-menu');
let line1 = document.querySelector('.burger-line1');
let line2 = document.querySelector('.burger-line2');
let line3 = document.querySelector('.burger-line3');
let burgerCheck = false;

burgerButton.addEventListener('click', function() {
    if (menuCheck === true) {
        menuNoAuth.classList.add('fade-out-animation');
        setTimeout(function() {
            menuNoAuth.style = 'display: none';
            menuCheck = false;
        }, 1000);
    }
    burgerMenu.classList.toggle('active');
    line1.classList.toggle('active');
    line2.classList.toggle('active');
    line3.classList.toggle('active');
    burgerCheck = !burgerCheck;
})

let storage = window.localStorage;
let profileButton = document.querySelector('.icon-button');
let menuNoAuth = document.querySelector('.menu-no-auth');
let menuWithAuth = document.querySelector('.menu-with-auth');
let menuCheck = false;

const carousel = document.querySelector('.carousel');

let circleCount = 1;

let circle1 = document.querySelector('.circle1');
let circle2 = document.querySelector('.circle2');
let circle3 = document.querySelector('.circle3');
let circle4 = document.querySelector('.circle4');
let circle5 = document.querySelector('.circle5');

let circleButton1 = document.querySelector('.about-button-1');
let circleButton2 = document.querySelector('.about-button-2');
let circleButton3 = document.querySelector('.about-button-3');
let circleButton4 = document.querySelector('.about-button-4');
let circleButton5 = document.querySelector('.about-button-5');

let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');

let a = 450 + 25;

let circle1Active = () => {
    circle1.classList.remove("circle-not-active");
    circle1.classList.add("circle-active");
    circle2.classList.remove("circle-active");
    circle2.classList.add("circle-not-active");
    circle3.classList.remove("circle-active");
    circle3.classList.add("circle-not-active");
    circle4.classList.remove("circle-active");
    circle4.classList.add("circle-not-active");
    circle5.classList.remove("circle-active");
    circle5.classList.add("circle-not-active");
}

let circle2Active = () => {
    circle1.classList.remove("circle-active");
    circle1.classList.add("circle-not-active");
    circle2.classList.remove("circle-not-active");
    circle2.classList.add("circle-active");
    circle3.classList.remove("circle-active");
    circle3.classList.add("circle-not-active");
    circle4.classList.remove("circle-active");
    circle4.classList.add("circle-not-active");
    circle5.classList.remove("circle-active");
    circle5.classList.add("circle-not-active");
}

let circle3Active = () => {
    circle1.classList.remove("circle-active");
    circle1.classList.add("circle-not-active");
    circle2.classList.remove("circle-active");
    circle2.classList.add("circle-not-active");
    circle3.classList.remove("circle-not-active");
    circle3.classList.add("circle-active");
    circle4.classList.remove("circle-active");
    circle4.classList.add("circle-not-active");
    circle5.classList.remove("circle-active");
    circle5.classList.add("circle-not-active");
}

let circle4Active = () => {
    circle1.classList.remove("circle-active");
    circle1.classList.add("circle-not-active");
    circle2.classList.remove("circle-active");
    circle2.classList.add("circle-not-active");
    circle3.classList.remove("circle-active");
    circle3.classList.add("circle-not-active");
    circle4.classList.remove("circle-not-active");
    circle4.classList.add("circle-active");
    circle5.classList.remove("circle-active");
    circle5.classList.add("circle-not-active");
}

let circle5Active = () => {
    circle1.classList.remove("circle-active");
    circle1.classList.add("circle-not-active");
    circle2.classList.remove("circle-active");
    circle2.classList.add("circle-not-active");
    circle3.classList.remove("circle-active");
    circle3.classList.add("circle-not-active");
    circle4.classList.remove("circle-active");
    circle4.classList.add("circle-not-active");
    circle5.classList.remove("circle-not-active");
    circle5.classList.add("circle-active");
}

circleButton1.addEventListener('click', function() {
    carousel.scrollLeft = 0;
    circle1Active();
    circleCount = 1;
});

circleButton2.addEventListener('click', function() {
    carousel.scrollLeft = a;
    circle2Active();
    circleCount = 2;
});

circleButton3.addEventListener('click', function() {
    carousel.scrollLeft = a * 2;
    circle3Active();
    circleCount = 3;
});

circleButton4.addEventListener('click', function() {
    carousel.scrollLeft = a * 3;
    circle4Active();
    circleCount = 4;
});

circleButton5.addEventListener('click', function() {
    carousel.scrollLeft = a * 4;
    circle5Active();
    circleCount = 5;
});

let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

arrowLeft.addEventListener('click', function() {
    carousel.scrollLeft -= a;
    setTimeout(() => hideArrows(), 50);
    circleCount--;
    if (circleCount < 1) {
        circleCount = 1;
    }
    
    if (circleCount > 5) {
        circleCount = 5;
    }
    
    if (circleCount === 1) {
        circle1Active();
        arrowLeft.classList.add('arrow-transparent');
        arrowRight.classList.remove('arrow-transparent');
    }
    
    if (circleCount === 2) {
        circle2Active();
        arrowLeft.classList.remove('arrow-transparent');
        arrowRight.classList.remove('arrow-transparent');
    }
    
    if (circleCount === 3) {
        circle3Active();
        arrowLeft.classList.remove('arrow-transparent');
        arrowRight.classList.remove('arrow-transparent');
    }
    
    if (circleCount === 4) {
        circle4Active();
        arrowLeft.classList.remove('arrow-transparent');
        arrowRight.classList.remove('arrow-transparent');
    }
    
    if (circleCount === 5) {
        circle5Active();
        arrowLeft.classList.remove('arrow-transparent');
        arrowRight.classList.add('arrow-transparent');
    }
});


arrowRight.addEventListener('click', function() {
    carousel.scrollLeft += a;
    setTimeout(() => hideArrows(), 50);
    circleCount++;
    if (circleCount < 1) {
        circleCount = 1;
    }
    
    if (circleCount > 5) {
        circleCount = 5;
    }
    
    if (circleCount === 1) {
        circle1Active();
        arrowLeft.classList.add('arrow-transparent');
        arrowRight.classList.remove('arrow-transparent');
    }
    
    if (circleCount === 2) {
        circle2Active();
        arrowLeft.classList.remove('arrow-transparent');
        arrowRight.classList.remove('arrow-transparent');
    }
    
    if (circleCount === 3) {
        circle3Active();
        arrowLeft.classList.remove('arrow-transparent');
        arrowRight.classList.remove('arrow-transparent');
    }
    
    if (circleCount === 4) {
        circle4Active();
        arrowLeft.classList.remove('arrow-transparent');
        arrowRight.classList.remove('arrow-transparent');
    }
    
    if (circleCount === 5) {
        circle5Active();
        arrowLeft.classList.remove('arrow-transparent');
        arrowRight.classList.add('arrow-transparent');
    }
});

let winterButton = document.querySelector('.season-choice-button-winter');
let springButton = document.querySelector('.season-choice-button-spring');
let summerButton = document.querySelector('.season-choice-button-summer');
let autumnButton = document.querySelector('.season-choice-button-autumn');

let winterText = document.querySelector('.season-text-winter');
let springText = document.querySelector('.season-text-spring');
let summerText = document.querySelector('.season-text-summer');
let autumnText = document.querySelector('.season-text-autumn');

let winterCheck = document.getElementById('winter');
let springCheck = document.getElementById('spring');
let summerCheck = document.getElementById('summer');
let autumnCheck = document.getElementById('autumn');

let winterBooks = document.querySelector('.season-books-winter');
let springBooks = document.querySelector('.season-books-spring');
let summerBooks = document.querySelector('.season-books-summer');
let autumnBooks = document.querySelector('.season-books-autumn');

winterButton.addEventListener('click', function (el) {
    winterText.classList.add('season-bold');
    springText.classList.remove('season-bold');
    summerText.classList.remove('season-bold');
    autumnText.classList.remove('season-bold');
    winterCheck.classList.add('small-circle-checked');
    springCheck.classList.remove('small-circle-checked');
    summerCheck.classList.remove('small-circle-checked');
    autumnCheck.classList.remove('small-circle-checked');

    springBooks.classList.remove('season-fade-in');
    summerBooks.classList.remove('season-fade-in');
    autumnBooks.classList.remove('season-fade-in');
    springBooks.classList.add('season-fade-out');
    summerBooks.classList.add('season-fade-out');
    autumnBooks.classList.add('season-fade-out');
    springBooks.classList.add('season-books-disable');
    summerBooks.classList.add('season-books-disable');
    autumnBooks.classList.add('season-books-disable');
    winterBooks.classList.remove('season-fade-out');
    winterBooks.classList.add('season-fade-in');
    winterBooks.classList.remove('season-books-disable');
});

springButton.addEventListener('click', function () {
    winterText.classList.remove('season-bold');
    springText.classList.add('season-bold');
    summerText.classList.remove('season-bold');
    autumnText.classList.remove('season-bold');
    winterCheck.classList.remove('small-circle-checked');
    springCheck.classList.add('small-circle-checked');
    summerCheck.classList.remove('small-circle-checked');
    autumnCheck.classList.remove('small-circle-checked');

    winterBooks.classList.remove('season-fade-in');
    summerBooks.classList.remove('season-fade-in');
    autumnBooks.classList.remove('season-fade-in');
    winterBooks.classList.add('season-fade-out');
    summerBooks.classList.add('season-fade-out');
    autumnBooks.classList.add('season-fade-out');
    winterBooks.classList.add('season-books-disable');
    summerBooks.classList.add('season-books-disable');
    autumnBooks.classList.add('season-books-disable');
    springBooks.classList.remove('season-fade-out');
    springBooks.classList.add('season-fade-in');
    springBooks.classList.remove('season-books-disable');
});
summerButton.addEventListener('click', function () {
    winterText.classList.remove('season-bold');
    springText.classList.remove('season-bold');
    summerText.classList.add('season-bold');
    autumnText.classList.remove('season-bold');
    winterCheck.classList.remove('small-circle-checked');
    springCheck.classList.remove('small-circle-checked');
    summerCheck.classList.add('small-circle-checked');
    autumnCheck.classList.remove('small-circle-checked');

    winterBooks.classList.remove('season-fade-in');
    springBooks.classList.remove('season-fade-in');
    autumnBooks.classList.remove('season-fade-in');
    winterBooks.classList.add('season-fade-out');
    springBooks.classList.add('season-fade-out');
    autumnBooks.classList.add('season-fade-out');
    winterBooks.classList.add('season-books-disable');
    springBooks.classList.add('season-books-disable');
    autumnBooks.classList.add('season-books-disable');
    summerBooks.classList.remove('season-fade-out');
    summerBooks.classList.add('season-fade-in');
    summerBooks.classList.remove('season-books-disable');
});
autumnButton.addEventListener('click', function () {
    winterText.classList.remove('season-bold');
    springText.classList.remove('season-bold');
    summerText.classList.remove('season-bold');
    autumnText.classList.add('season-bold');
    winterCheck.classList.remove('small-circle-checked');
    springCheck.classList.remove('small-circle-checked');
    summerCheck.classList.remove('small-circle-checked');
    autumnCheck.classList.add('small-circle-checked');

    winterBooks.classList.remove('season-fade-in');
    springBooks.classList.remove('season-fade-in');
    summerBooks.classList.remove('season-fade-in');
    winterBooks.classList.add('season-fade-out');
    springBooks.classList.add('season-fade-out');
    summerBooks.classList.add('season-fade-out');
    winterBooks.classList.add('season-books-disable');
    springBooks.classList.add('season-books-disable');
    summerBooks.classList.add('season-books-disable');
    autumnBooks.classList.remove('season-fade-out');
    autumnBooks.classList.add('season-fade-in');
    autumnBooks.classList.remove('season-books-disable');
});

profileButton.addEventListener('click', function () {
    if (JSON.parse(localStorage.getItem('usersAga')) === null) {
        var isUserAuthorized = false;
    }
    else {
        var isUserAuthorized = JSON.parse(localStorage.getItem('usersAga')).isAuthorized;
    }
    if (!isUserAuthorized) {
        if (burgerCheck === true) {
            burgerMenu.classList.remove('active');
            line1.classList.remove('active');
            line2.classList.remove('active');
            line3.classList.remove('active');
            burgerCheck = false;
        }
        if (menuCheck === false) {
            menuNoAuth.classList.remove('fade-out-animation');
            menuNoAuth.classList.add('fade-in-animation');
            menuNoAuth.style = 'display: flex';
            menuCheck = true;
        }
        else if (menuCheck === true) {
            menuNoAuth.classList.add('fade-out-animation');
            menuNoAuth.classList.remove('fade-in-animation');
            setTimeout(function () {
                menuNoAuth.style = 'display: none';
                menuCheck = false;
            }, 1000);
            
        }
        document.addEventListener('click', (e) => {
            const withinBoundaries = e.composedPath().includes(profileButton);
            if (!withinBoundaries) {
                menuNoAuth.classList.add('fade-out-animation');
                menuNoAuth.classList.remove('fade-in-animation');
                setTimeout(function () {
                    menuNoAuth.style = 'display: none';
                    menuCheck = false;
                }, 1000);
            }
        })
    }
    if (isUserAuthorized) {
        if (burgerCheck === true) {
            burgerMenu.classList.remove('active');
            line1.classList.remove('active');
            line2.classList.remove('active');
            line3.classList.remove('active');
            burgerCheck = false;
        }
        if (menuCheck === false) {
            menuWithAuth.classList.remove('fade-out-animation');
            menuWithAuth.classList.add('fade-in-animation');
            menuWithAuth.style = 'display: flex';
            menuCheck = true;
        }
        else if (menuCheck === true) {
            menuWithAuth.classList.add('fade-out-animation');
            menuWithAuth.classList.remove('fade-in-animation');
            setTimeout(function () {
                menuWithAuth.style = 'display: none';
                menuCheck = false;
            }, 1000);
            
        }
        document.addEventListener('click', (e) => {
            const withinBoundaries = e.composedPath().includes(profileButton);
            if (!withinBoundaries) {
                menuWithAuth.classList.add('fade-out-animation');
                menuWithAuth.classList.remove('fade-in-animation');
                setTimeout(function () {
                    menuWithAuth.style = 'display: none';
                    menuCheck = false;
                }, 1000);
            }
        })
    }
})

let logInButton = document.querySelector('.login-button');
let registerButton = document.querySelector('.register-button');
let myProfileButton = document.querySelector('.my-profile-button');
let myProfileWindowWrapper = document.querySelector('.my-profile-window-wrapper');
let myProfileWindow = document.querySelector('.my-profile-window');
let logOutButton = document.querySelector('.log-out-button');
let body = document.querySelector('.body');
let registerWindowWrapper = document.querySelector('.register-window-wrapper');
let loginWindowWrapper = document.querySelector('.login-window-wrapper');
let registerWindow = document.querySelector('.register-window');
let loginWindow = document.querySelector('.login-window');
let ifRegisterWindowOpen = false;
let ifLoginWindowOpen = false;
let libraryCardSignUp = document.querySelector('.librarycard-sign-up');
let libraryCardLogIn = document.querySelector('.library-card-log-in');
let registerWindowCloseButton = document.querySelector('.register-window-close-button');
let loginWindowCloseButton = document.querySelector('.login-window-close-button');
let commonIcon = document.querySelector('.icon');
let letterIcon = document.querySelector('.icon-letters');
let letterIconText = document.querySelector('.icon-letters-text');
let ifMyProfileWindowOpen = false;
let visitsNumberCardInfoField = document.querySelector('.number-of-visits-card-info');
let myProfileCloseButton = document.querySelector('.my-profile-window-close-button');
let myProfileAvatar = document.querySelector('.my-profile-white-square-text');
let myProfileName = document.querySelector('.my-profile-name-text');
let myProfileCardNumber = document.querySelector('.my-profile-card-number');
let myProfileVisitsNumber = document.querySelector('.my-profile-number-of-visits-card-info');
let cardNumberCopyButton = document.querySelector('.my-profile-card-number-copy');
let loginFromRegister = document.querySelector('.register-window-login-button');
let registerFromLogin = document.querySelector('.login-window-register-button')
let profileTextWithAuth = document.querySelector('.profile-text-with-auth');
let buyCardWindowWrapper = document.querySelector('.buy-card-window-wrapper');
let buyCardWindow = document.querySelector('.buy-card-window');
let isBuyCardWindowOpen = false;
let buyCardWindowCloseButton = document.querySelector('.buy-card-window-close-button');
let buyCardButton = document.querySelector('#buy-card-button');

if (JSON.parse(localStorage.getItem('usersAga')) !== null) {
    if (JSON.parse(localStorage.getItem('usersAga')).isAuthorized) {
        profileTextWithAuth.textContent = JSON.parse(localStorage.getItem('usersAga')).cardNumber;
    }
}

if (JSON.parse(localStorage.getItem('usersAga')) !== null) {
    if (JSON.parse(localStorage.getItem('usersAga')).isAuthorized) {
        let firstLetter = JSON.parse(localStorage.getItem('usersAga')).firstName[0];
        let secondLetter = JSON.parse(localStorage.getItem('usersAga')).lastName[0];
        let initials = firstLetter + secondLetter;
        initials = initials.toUpperCase();
        commonIcon.style = 'display: none';
        letterIcon.style = 'display: block';
        letterIconText.textContent = initials;
        letterIcon.title = JSON.parse(localStorage.getItem('usersAga')).firstName + ' ' + JSON.parse(localStorage.getItem('usersAga')).lastName;
        myProfileAvatar.textContent = initials;
        myProfileName.textContent = JSON.parse(localStorage.getItem('usersAga')).firstName + ' ' + JSON.parse(localStorage.getItem('usersAga')).lastName;
        myProfileCardNumber.textContent = JSON.parse(localStorage.getItem('usersAga')).cardNumber;
        myProfileVisitsNumber.textContent = JSON.parse(localStorage.getItem('usersAga')).visitsNumber;
        visitsNumberCardInfoField.textContent = JSON.parse(localStorage.getItem('usersAga')).visitsNumber;
    }
}



registerButton.addEventListener('click', function () {
    menuNoAuth.style = 'display: none';
    ifRegisterWindowOpen = true;
    body.classList.add('body-no-scroll');
    registerWindowWrapper.style = 'display: flex';
    setTimeout(function () {
        registerWindowWrapper.style.opacity = 1;
        registerWindow.style.opacity = 1;
    }, 30);
    document.onclick = function (e) {
        if ((e.target.className === 'register-window-wrapper') && (e.target.className !== 'register-window-inside') && (window.getComputedStyle(registerWindow).opacity === '1')) {
            registerWindowWrapper.style.opacity = 0;
            registerWindow.style.opacity = 0;
            ifRegisterWindowOpen = false;
            setTimeout(function () {
                body.classList.remove('body-no-scroll');
                registerWindowWrapper.style = 'display: none';
            }, 1000);
        }
    }
});

loginFromRegister.addEventListener('click', function () {
    registerWindowWrapper.style.opacity = 0;
        registerWindow.style.opacity = 0;
        ifRegisterWindowOpen = false;
        setTimeout(function () {
            registerWindowWrapper.style = 'display: none';
        }, 1000);
    setTimeout(function () {
        ifLoginWindowOpen = true;
        loginWindowWrapper.style = 'display: flex';
        loginWindowWrapper.style.opacity = 1;
        loginWindow.style.opacity = 1;
    }, 30); 
})

registerFromLogin.addEventListener('click', function () {
    loginWindowWrapper.style.opacity = 0;
        loginWindow.style.opacity = 0;
        ifLoginWindowOpen = false;
        setTimeout(function () {
            loginWindowWrapper.style = 'display: none';
        }, 1000);
    setTimeout(function () {
        ifRegisterWindowOpen = true;
        registerWindowWrapper.style = 'display: flex';
        registerWindowWrapper.style.opacity = 1;
        registerWindow.style.opacity = 1;
    }, 30); 
})

myProfileButton.addEventListener('click', function () {
    menuWithAuth.style = 'display: none';
    ifMyProfileWindowOpen = true;
    body.classList.add('body-no-scroll');
    myProfileWindowWrapper.style = 'display: flex';
    setTimeout(function () {
        myProfileWindowWrapper.style.opacity = 1;
        myProfileWindow.style.opacity = 1;
    }, 30);
    document.onclick = function (e) {
        if ((e.target.className === 'my-profile-window-wrapper') && (e.target.className !== 'my-profile-window-inside') && (window.getComputedStyle(myProfileWindow).opacity === '1')) {
            myProfileWindowWrapper.style.opacity = 0;
            myProfileWindow.style.opacity = 0;
            ifMyProfileWindowOpen = false;
            setTimeout(function () {
                body.classList.remove('body-no-scroll');
                myProfileWindowWrapper.style = 'display: none';
            }, 1000);
        }
    }
});

document.onclick = function (e) {
    if ((e.target.className === 'my-profile-window-wrapper') && (e.target.className !== 'my-profile-window-inside') && (window.getComputedStyle(myProfileWindow).opacity === '1')) {
        myProfileWindowWrapper.style.opacity = 0;
        myProfileWindow.style.opacity = 0;
        ifMyProfileWindowOpen = false;
        setTimeout(function () {
            body.classList.remove('body-no-scroll');
            myProfileWindowWrapper.style = 'display: none';
        }, 1000);
    }
}

libraryCardSignUp.addEventListener('click', function () {
    ifRegisterWindowOpen = true;
    body.classList.add('body-no-scroll');
    registerWindowWrapper.style = 'display: flex';
    setTimeout(function () {
        registerWindowWrapper.style.opacity = 1;
        registerWindow.style.opacity = 1;
    }, 30);   
    document.onclick = function (e) {
        if ((e.target.className === 'register-window-wrapper') && (e.target.className !== 'register-window-inside') && (window.getComputedStyle(registerWindow).opacity === '1')) {
            registerWindowWrapper.style.opacity = 0;
            registerWindow.style.opacity = 0;
            ifRegisterWindowOpen = false;
            setTimeout(function () {
                body.classList.remove('body-no-scroll');
                registerWindowWrapper.style = 'display: none';
            }, 1000);
        }
    } 
});

libraryCardLogIn.addEventListener('click', function () {
    ifLoginWindowOpen = true;
    body.classList.add('body-no-scroll');
    loginWindowWrapper.style = 'display: flex';
    setTimeout(function () {
        loginWindowWrapper.style.opacity = 1;
        loginWindow.style.opacity = 1;
    }, 30); 
    document.onclick = function (e) {
        if ((e.target.className === 'login-window-wrapper') && (e.target.className !== 'login-window-inside') && (window.getComputedStyle(loginWindow).opacity === '1')) {
            loginWindowWrapper.style.opacity = 0;
            loginWindow.style.opacity = 0;
            ifLoginWindowOpen = false;
            setTimeout(function () {
                body.classList.remove('body-no-scroll');
                loginWindowWrapper.style = 'display: none';
            }, 1000);
        }
    }   
});

document.onclick = function (e) {
    if ((e.target.className === 'register-window-wrapper') && (e.target.className !== 'register-window-inside') && (window.getComputedStyle(registerWindow).opacity === '1')) {
        registerWindowWrapper.style.opacity = 0;
        registerWindow.style.opacity = 0;
        ifRegisterWindowOpen = false;
        setTimeout(function () {
            body.classList.remove('body-no-scroll');
            registerWindowWrapper.style = 'display: none';
        }, 1000);
    }
}

registerWindowCloseButton.addEventListener('click', function () {
    registerWindowWrapper.style.opacity = 0;
        registerWindow.style.opacity = 0;
        ifRegisterWindowOpen = false;
        setTimeout(function () {
            body.classList.remove('body-no-scroll');
            registerWindowWrapper.style = 'display: none';
        }, 1000);
});

buyCardWindowCloseButton.addEventListener('click', function () {
    buyCardWindowWrapper.style.opacity = 0;
        buyCardWindow.style.opacity = 0;
        isBuyCardWindowOpen = false;
        setTimeout(function () {
            body.classList.remove('body-no-scroll');
            buyCardWindowWrapper.style = 'display: none';
        }, 1000);
});

loginWindowCloseButton.addEventListener('click', function () {
    loginWindowWrapper.style.opacity = 0;
        loginWindow.style.opacity = 0;
        ifLoginWindowOpen = false;
        setTimeout(function () {
            body.classList.remove('body-no-scroll');
            loginWindowWrapper.style = 'display: none';
        }, 1000);
});

myProfileCloseButton.addEventListener('click', function () {
    myProfileWindowWrapper.style.opacity = 0;
    myProfileWindow.style.opacity = 0;
    ifMyProfileWindowOpen = false;
    setTimeout(function () {
        body.classList.remove('body-no-scroll');
        myProfileWindowWrapper.style = 'display: none';
    }, 1000);
});

function copyFunction () {
    navigator.clipboard.writeText(JSON.parse(localStorage.getItem('usersAga')).cardNumber);
    myProfileCardNumber.style = 'background-color: #BB945F';
    setTimeout(function () {
        myProfileCardNumber.style = 'background-color: transparent'
    }, 300);
}

document.querySelector('.register-window-form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (ifRegisterWindowOpen){
        let form = document.querySelector('.register-window-form');
        const formData = new FormData(form);
        let cardNumber = '';
        let hexadecimal = '0123456789ABCDEF';
        let visitsNumber = 1;
        for (let i = 0; i < 9; i++) {
            cardNumber = cardNumber + hexadecimal[Math.floor(Math.random() * 16)];
        }
        if ((formData.get('firstName') === '') || (formData.get('lastName') === '') || (formData.get('email') === '') || (formData.get('password') === '')) {
            alert('All inputs must be filled!');
        }
        if (formData.get('password').length < 8) {
            alert('Password must be at least 8 characters long!');
        }
        let isUserAuthorized = true;
        let User = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            password: formData.get('password'),
            cardNumber: cardNumber,
            isAuthorized: isUserAuthorized,
            visitsNumber: visitsNumber,
            ownedBooks: 0,
            subscription: false
        };
        let rentedBooks = {
            book11: false,
            book12: false,
            book13: false,
            book14: false,
            book21: false,
            book22: false,
            book23: false,
            book24: false,
            book31: false,
            book32: false,
            book33: false,
            book34: false,
            book41: false,
            book42: false,
            book43: false,
            book44: false,
        }
        localStorage.setItem('usersAga', JSON.stringify(User));
        location.reload();
    }
});



logOutButton.addEventListener('click', function () {
    User = JSON.parse(localStorage.getItem('usersAga'));
    isUserAuthorized = false;
    User.isAuthorized = isUserAuthorized;
    localStorage.setItem('usersAga', JSON.stringify(User));
    commonIcon.style = 'display: block';
    letterIcon.style = 'display: none';
    location.reload();
});

let cardFormButton = document.querySelector('.form-button');
let cardInfo = document.querySelector('.card-info');

document.querySelector('.card-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let cardForm = document.querySelector('.card-form');
    const cardFormData = new FormData(cardForm);
    let fullName = JSON.parse(localStorage.getItem('usersAga')).firstName + ' ' + JSON.parse(localStorage.getItem('usersAga')).lastName;
    if ((cardFormData.get('readerName') === fullName) && (cardFormData.get('cardNumber') === JSON.parse(localStorage.getItem('usersAga')).cardNumber)) {
        cardFormButton.style = 'display: none';
        cardInfo.style = 'display: flex';
        setTimeout(function () {
            cardInfo.style = 'display: none';
            cardFormButton.style = 'display: block';
            cardForm.reset();
        }, 10000)
    }
});

logInButton.addEventListener('click', function () {
    menuNoAuth.style = 'display: none';
    ifLoginWindowOpen = true;
    body.classList.add('body-no-scroll');
    loginWindowWrapper.style = 'display: flex';
    setTimeout(function () {
        loginWindowWrapper.style.opacity = 1;
        loginWindow.style.opacity = 1;
    }, 30); 
});

document.onclick = function (e) {
    if ((e.target.className === 'login-window-wrapper') && (e.target.className !== 'login-window-inside') && (window.getComputedStyle(loginWindow).opacity === '1')) {
        loginWindowWrapper.style.opacity = 0;
        loginWindow.style.opacity = 0;
        ifLoginWindowOpen = false;
        setTimeout(function () {
            body.classList.remove('body-no-scroll');
            loginWindowWrapper.style = 'display: none';
        }, 1000);
    }
}

document.querySelector('.login-window-form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (ifLoginWindowOpen){
        let form = document.querySelector('.login-window-form');
        const formLoginData = new FormData(form);
        if ((formLoginData.get('emailORcard') === '') || (formLoginData.get('password') === '')) {
            alert('All inputs must be filled!');
        }
        if (formLoginData.get('password').length < 8) {
            alert('Password must be at least 8 characters long!');
        }
        let isUserAuthorized = true;
        if (JSON.parse(localStorage.getItem('usersAga')) !== null) {
            if ((((formLoginData.get('emailORcard') === JSON.parse(localStorage.getItem('usersAga')).email)) || (formLoginData.get('emailORcard') === JSON.parse(localStorage.getItem('usersAga')).cardNumber)) && (formLoginData.get('password') === JSON.parse(localStorage.getItem('usersAga')).password)) {
                isUserAuthorized = true;
                User = JSON.parse(localStorage.getItem('usersAga'));
                User.isAuthorized = isUserAuthorized;
                User.visitsNumber = User.visitsNumber + 1;
                localStorage.setItem('usersAga', JSON.stringify(User));
                location.reload();
            }
        }
    }
});

if (JSON.parse(localStorage.getItem('usersAga')) !== null) {
    if (JSON.parse(localStorage.getItem('usersAga')).isAuthorized) {
        cardFormButton.style = 'display: none';
        cardInfo.style = 'display: flex';
    }
}

let buyBookButtonWinter1 = document.querySelector('#buy-button-winter1');
let buyBookButtonWinter2 = document.querySelector('#buy-button-winter2');
let buyBookButtonWinter3 = document.querySelector('#buy-button-winter3');
let buyBookButtonWinter4 = document.querySelector('#buy-button-winter4');

let buyBookButtonSpring1 = document.querySelector('#buy-button-spring1');
let buyBookButtonSpring2 = document.querySelector('#buy-button-spring2');
let buyBookButtonSpring3 = document.querySelector('#buy-button-spring3');
let buyBookButtonSpring4 = document.querySelector('#buy-button-spring4');

let buyBookButtonSummer1 = document.querySelector('#buy-button-summer1');
let buyBookButtonSummer2 = document.querySelector('#buy-button-summer2');
let buyBookButtonSummer3 = document.querySelector('#buy-button-summer3');
let buyBookButtonSummer4 = document.querySelector('#buy-button-summer4');

let buyBookButtonAutumn1 = document.querySelector('#buy-button-autumn1');
let buyBookButtonAutumn2 = document.querySelector('#buy-button-autumn2');
let buyBookButtonAutumn3 = document.querySelector('#buy-button-autumn3');
let buyBookButtonAutumn4 = document.querySelector('#buy-button-autumn4');

if (((JSON.parse(localStorage.getItem('usersAga')) !== null) && (JSON.parse(localStorage.getItem('usersAga')).isAuthorized === false)) || (JSON.parse(localStorage.getItem('usersAga')) === null)) {
    buyBookButtonWinter1.addEventListener('click', function () {
        ifLoginWindowOpen = true;
        body.classList.add('body-no-scroll');
        loginWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            loginWindowWrapper.style.opacity = 1;
            loginWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonWinter2.addEventListener('click', function () {
        ifLoginWindowOpen = true;
        body.classList.add('body-no-scroll');
        loginWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            loginWindowWrapper.style.opacity = 1;
            loginWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonWinter3.addEventListener('click', function () {
        ifLoginWindowOpen = true;
        body.classList.add('body-no-scroll');
        loginWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            loginWindowWrapper.style.opacity = 1;
            loginWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonWinter4.addEventListener('click', function () {
        ifLoginWindowOpen = true;
        body.classList.add('body-no-scroll');
        loginWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            loginWindowWrapper.style.opacity = 1;
            loginWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonSpring1.addEventListener('click', function () {
        ifLoginWindowOpen = true;
        body.classList.add('body-no-scroll');
        loginWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            loginWindowWrapper.style.opacity = 1;
            loginWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonSpring2.addEventListener('click', function () {
        ifLoginWindowOpen = true;
        body.classList.add('body-no-scroll');
        loginWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            loginWindowWrapper.style.opacity = 1;
            loginWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonSpring3.addEventListener('click', function () {
        ifLoginWindowOpen = true;
        body.classList.add('body-no-scroll');
        loginWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            loginWindowWrapper.style.opacity = 1;
            loginWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonSpring4.addEventListener('click', function () {
        ifLoginWindowOpen = true;
        body.classList.add('body-no-scroll');
        loginWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            loginWindowWrapper.style.opacity = 1;
            loginWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonSummer1.addEventListener('click', function () {
        ifLoginWindowOpen = true;
        body.classList.add('body-no-scroll');
        loginWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            loginWindowWrapper.style.opacity = 1;
            loginWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonSummer2.addEventListener('click', function () {
        ifLoginWindowOpen = true;
        body.classList.add('body-no-scroll');
        loginWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            loginWindowWrapper.style.opacity = 1;
            loginWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonSummer3.addEventListener('click', function () {
        ifLoginWindowOpen = true;
        body.classList.add('body-no-scroll');
        loginWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            loginWindowWrapper.style.opacity = 1;
            loginWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonSummer4.addEventListener('click', function () {
        ifLoginWindowOpen = true;
        body.classList.add('body-no-scroll');
        loginWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            loginWindowWrapper.style.opacity = 1;
            loginWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonAutumn1.addEventListener('click', function () {
        ifLoginWindowOpen = true;
        body.classList.add('body-no-scroll');
        loginWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            loginWindowWrapper.style.opacity = 1;
            loginWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonAutumn2.addEventListener('click', function () {
        ifLoginWindowOpen = true;
        body.classList.add('body-no-scroll');
        loginWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            loginWindowWrapper.style.opacity = 1;
            loginWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonAutumn3.addEventListener('click', function () {
        ifLoginWindowOpen = true;
        body.classList.add('body-no-scroll');
        loginWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            loginWindowWrapper.style.opacity = 1;
            loginWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonAutumn4.addEventListener('click', function () {
        ifLoginWindowOpen = true;
        body.classList.add('body-no-scroll');
        loginWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            loginWindowWrapper.style.opacity = 1;
            loginWindow.style.opacity = 1;
        }, 30); 
    })
}

if (((JSON.parse(localStorage.getItem('usersAga')) !== null) && (JSON.parse(localStorage.getItem('usersAga')).subscription === false))) {
    buyBookButtonWinter1.addEventListener('click', function () {
        isBuyCardWindowOpen = true;
        body.classList.add('body-no-scroll');
        buyCardWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            buyCardWindowWrapper.style.opacity = 1;
            buyCardWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonWinter2.addEventListener('click', function () {
        isBuyCardWindowOpen = true;
        body.classList.add('body-no-scroll');
        buyCardWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            buyCardWindowWrapper.style.opacity = 1;
            buyCardWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonWinter3.addEventListener('click', function () {
        isBuyCardWindowOpen = true;
        body.classList.add('body-no-scroll');
        buyCardWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            buyCardWindowWrapper.style.opacity = 1;
            buyCardWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonWinter4.addEventListener('click', function () {
        isBuyCardWindowOpen = true;
        body.classList.add('body-no-scroll');
        buyCardWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            buyCardWindowWrapper.style.opacity = 1;
            buyCardWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonSpring1.addEventListener('click', function () {
        isBuyCardWindowOpen = true;
        body.classList.add('body-no-scroll');
        buyCardWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            buyCardWindowWrapper.style.opacity = 1;
            buyCardWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonSpring2.addEventListener('click', function () {
        isBuyCardWindowOpen = true;
        body.classList.add('body-no-scroll');
        buyCardWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            buyCardWindowWrapper.style.opacity = 1;
            buyCardWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonSpring3.addEventListener('click', function () {
        isBuyCardWindowOpen = true;
        body.classList.add('body-no-scroll');
        buyCardWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            buyCardWindowWrapper.style.opacity = 1;
            buyCardWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonSpring4.addEventListener('click', function () {
        isBuyCardWindowOpen = true;
        body.classList.add('body-no-scroll');
        buyCardWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            buyCardWindowWrapper.style.opacity = 1;
            buyCardWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonSummer1.addEventListener('click', function () {
        isBuyCardWindowOpen = true;
        body.classList.add('body-no-scroll');
        buyCardWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            buyCardWindowWrapper.style.opacity = 1;
            buyCardWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonSummer2.addEventListener('click', function () {
        isBuyCardWindowOpen = true;
        body.classList.add('body-no-scroll');
        buyCardWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            buyCardWindowWrapper.style.opacity = 1;
            buyCardWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonSummer3.addEventListener('click', function () {
        isBuyCardWindowOpen = true;
        body.classList.add('body-no-scroll');
        buyCardWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            buyCardWindowWrapper.style.opacity = 1;
            buyCardWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonSummer4.addEventListener('click', function () {
        isBuyCardWindowOpen = true;
        body.classList.add('body-no-scroll');
        buyCardWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            buyCardWindowWrapper.style.opacity = 1;
            buyCardWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonAutumn1.addEventListener('click', function () {
        isBuyCardWindowOpen = true;
        body.classList.add('body-no-scroll');
        buyCardWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            buyCardWindowWrapper.style.opacity = 1;
            buyCardWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonAutumn2.addEventListener('click', function () {
        isBuyCardWindowOpen = true;
        body.classList.add('body-no-scroll');
        buyCardWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            buyCardWindowWrapper.style.opacity = 1;
            buyCardWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonAutumn3.addEventListener('click', function () {
        isBuyCardWindowOpen = true;
        body.classList.add('body-no-scroll');
        buyCardWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            buyCardWindowWrapper.style.opacity = 1;
            buyCardWindow.style.opacity = 1;
        }, 30); 
    })
    buyBookButtonAutumn4.addEventListener('click', function () {
        isBuyCardWindowOpen = true;
        body.classList.add('body-no-scroll');
        buyCardWindowWrapper.style = 'display: flex';
        setTimeout(function () {
            buyCardWindowWrapper.style.opacity = 1;
            buyCardWindow.style.opacity = 1;
        }, 30); 
    })
    document.onclick = function (e) {
        if ((e.target.className === 'buy-card-window-wrapper') && (e.target.className !== 'buy-card-window-inside') && (window.getComputedStyle(buyCardWindow).opacity === '1')) {
            buyCardWindowWrapper.style.opacity = 0;
            buyCardWindow.style.opacity = 0;
            isBuyCardWindowOpen = false;
            setTimeout(function () {
                body.classList.remove('body-no-scroll');
                buyCardWindowWrapper.style = 'display: none';
            }, 1000);
        }
    }
}


    document.querySelector('.buy-card-window-form').addEventListener('change', function (e) {
        if (isBuyCardWindowOpen) {
            e.preventDefault();
            let buyCardForm = document.querySelector('.buy-card-window-form');
            const buyCardFormData = new FormData(buyCardForm);
            if ((buyCardFormData.get('bankCardNumber') === '') && (buyCardFormData.get('exp-code1') === '') && (buyCardFormData.get('exp-code2') === '') && (buyCardFormData.get('CVC') === '') && (buyCardFormData.get('cardHolderName') === '') && (buyCardFormData.get('postalCode') === '') && (buyCardFormData.get('cityTown') === '')) {
                console.log(buyCardButton);
                buyCardButton.classList.remove('buy-card-window-button');
                buyCardButton.classList.add('buy-card-window-button-disabled');
                console.log('1');
            }
            else {
                buyCardButton.classList.remove('buy-card-window-button-disabled');
                buyCardButton.classList.add('buy-card-window-button');
            }
        }
    });

/*
if (JSON.parse(localStorage.getItem('usersAga')) !== null) {
    if (JSON.parse(localStorage.getItem('usersAga')).isAuthorized) {
        if (JSON.parse(localStorage.getItem('rentedBooks')).book11) {
            buyBookButtonWinter1.classList.remove('buy-button');
            buyBookButtonWinter1.classList.add('buy-button-own');
        }
    }
}*/ //ДОПИШУ ПОТОМ