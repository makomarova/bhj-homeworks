const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

function getCookie(name){
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name+'='));
    if(cookie === undefined) {
        return null;
    }
    return cookie.substring(name.lenght + 1);
}

if((getCookie(modalClose) === null) || (getCookie(modalClose) !== 'true')){
    modal.classList.add('modal_active');
}

modalClose.addEventListener('click', ()=> {
    modal.classList.remove('modal_active');
    document.cookie = 'modalClose=true';
});
