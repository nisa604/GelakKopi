const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di pencet
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//nav hilang pas pencet sidebar
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click',function(e){
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})