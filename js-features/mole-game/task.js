let winCount = 0;
let lossCount = 0;
function  getHole( index ){
    return document.getElementById('hole' + index);
}

function holeClick(){
    if(this.classList.contains( 'hole_has-mole' )){
        winCount++;
    } else {
        lossCount++;
    }

    if (lossCount === 5){
        alert ('Вы проиграли');
        lossCount = 0;
        winCount = 0;
    }

    if (winCount === 10){
        alert ('Победа');
        lossCount = 0;
        winCount = 0;
    }

    document.getElementById('dead').textContent = winCount;
    document.getElementById('lost').textContent = lossCount;
}

for (let i = 1; i++; i < 10)
{
    let hole = getHole(i);
    hole.onclick = holeClick;
}