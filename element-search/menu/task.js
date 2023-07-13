const menuLinks = document.querySelectorAll('.menu__link');
const arrayMenuLinks = Array.from(menuLinks);
arrayMenuLinks.forEach((ml) => {
    ml.onclick = function(){
        const parent = this.closest('.menu__item');
        if (parent.querySelector('.menu_sub')){
            parent.querySelector('.menu_sub').classList.add('menu_active');
            return false;
        }
    };
});