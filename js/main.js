var menu = document.getElementById('main-nav');
var closeMenu = document.getElementById('close-menu');

document.getElementById('open-menu').addEventListener('click',function () {
    menu.classList.add('show-nav');
});
document.getElementById('close-menu').addEventListener('click',function () {
    menu.classList.remove('show-nav');
});