const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show(){
    mainMenu.mobileStyle.display = 'flex';
    mainMenu.mobileStyle.top = '0';

}

function close() {
    mainMenu.mobileStyle.top = '-100%';

}

