const modalMain = document.querySelector('#modal_main');
modalMain.classList.add('modal_active');

const modalClose = document.querySelectorAll('.modal__close');
const arrayModalClose = Array.from(modalClose);
arrayModalClose.forEach((mc) => {
    mc.onclick = function(){
        const parent = this.closest('.modal');
        parent.classList.remove('modal_active');
    };
});

const btnSuccess = document.querySelector('.show-success');
btnSuccess.onclick = function(){
    const modalSuccess = document.querySelector('#modal_success');
    modalSuccess.classList.add('modal_active');
};
