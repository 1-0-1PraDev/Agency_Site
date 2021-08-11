let searchBtn = document.querySelector('#search-btn');
let searchBarContainer = document.querySelector('.search-bar-container');
let closeBtn = document.querySelector('.close');
let menuBtn = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');

window.onscroll = () => {
    searchBarContainer.classList.remove('active');
    navBar.classList.remove('active');
}

searchBtn.addEventListener('click', () => {
    searchBarContainer.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    searchBarContainer.classList.remove('active');
});

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
});