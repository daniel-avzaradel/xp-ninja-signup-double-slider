const signInButton = document.getElementById('signInButton');
const signUpButton = document.getElementById('signUpButton');
const overlayContainer = document.querySelector('.container .overlay-container');
const overlay = document.querySelector('.container .overlay-container .overlay');
const signInForm = document.querySelector('.container .sign-in-form');
const signUpForm = document.querySelector('.container .sign-up-form');

signInButton.addEventListener('click', () => {
    overlayContainer.style.transform = "translateX(100%)";
    overlay.style.transform = "translateX(-50%)";
    signInForm.classList.add('active');
    signUpForm.classList.remove('active');
});
signUpButton.addEventListener('click', () => {
    overlayContainer.style.transform = "translateX(0)";
    overlay.style.transform = "translateX(0)";
    signUpForm.classList.add('active');
    signInForm.classList.remove('active');
});

