 window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        popUpRandomMole();
    }, 0)
    const moleHeads = document.querySelectorAll('.wgs');
    moleHeads.forEach((moleHead) => {
        moleHead.addEventListener('click', event => {
            hideMole(moleHead);
        })
    })
 })


function popUpRandomMole() {
    const moleHeads = document.querySelectorAll('.wgs');
    const random = Math.floor(Math.random() * Math.floor(8));
    const randomMole = moleHeads[random];
    randomMole.children[0].classList.remove('wgs__mole-head--hidden');
    setTimeout(() =>{
        hideMole(randomMole)
    }, 3000)

}

function hideMole(mole) {
    console.log(mole)
    setTimeout(() => {
        mole.children[0].classList.add('wgs__mole-head--hidden')
        
    }, 1000)
    popUpRandomMole()
}

