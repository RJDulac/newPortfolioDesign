var menu = document.getElementById('main-nav');
var closeMenu = document.getElementById('close-menu');
var openMenu = document.getElementById("open-menu");

document.getElementById('open-menu').addEventListener('click',function () {
    menu.classList.add('show-nav');
    menu.classList.remove('hide-nav')
    openMenu.style.display = 'none';
    closeMenu.style.display = "block";
    
    
});
document.getElementById('close-menu').addEventListener('click',function () {
    // menu.classList.remove('show-nav');
    menu.classList.add('hide-nav');
    // menu.classList.remove("show-nav");
    openMenu.style.display = 'block';
    closeMenu.style.display = "none";

});