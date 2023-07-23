const rotatorList = Array.from(document.querySelectorAll('.rotator__case'));
let activId = 1;

function setClass(){
    if(activId >= rotatorList.length){
        activId = 0;
    }
    document.querySelector('.rotator__case_active').classList.remove('rotator__case_active');
    rotatorList[activId].classList.add('rotator__case_active');
    activId += 1;
}

setInterval(setClass, 1000);