 window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        popUpRandomMole();
    }, 0)
    const moleHeads = document.querySelectorAll('.wgs__mole-head');
    moleHeads.forEach((moleHead) => {
        moleHead.addEventListener('click', event => {
           hideMole(moleHead);
           moleHead.classList.add("wgs__mole-head--whacked")
        })
    })
 })

function popUpRandomMole() {
   const moleHeads = document.querySelectorAll('.wgs__mole-head:not(.wgs__mole-head--whacked)');
   if (!moleHeads.length) {
      return
   }
    const random = Math.floor(Math.random() * moleHeads.length);
    const randomMole = moleHeads[random];
    randomMole.classList.remove('wgs__mole-head--hidden');
    setTimeout(() =>{
        hideMole(randomMole)
    }, 3000)}

function hideMole(mole) {
    console.log(mole)
    setTimeout(() => {
        mole.classList.add('wgs__mole-head--hidden')

    }, 1000)
    popUpRandomMole()
}
