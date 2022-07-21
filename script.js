
//dark mode checkbox toggle
// let toggle =document.getElementById("mode");

// toggle.addEventListener('click', ()=>{
//     document.body.classList.toggle('dark');
// })



//////////////////////////////////////////////////////// 
// const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
// const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))

// console.log(dropdownElementList);

// document.querySelector('#greet-player').setAttribute('hidden', '');
document.getElementById("playGame").style.display = "none";
////////////////////////////////////////////////////////

//tabs over when you hit enter
function handleEnter(event) {
    if (event.key==="Enter") {
        const form = document.getElementById('form')
        const index = [...form].indexOf(event.target);
        form.elements[index + 1].focus();
    }
}
   
//////////////////////////////////////////////////////// 
// function disableLink() {
//   document.getElementById("startLink").disabled = true;
// }
// disableLink();

// function enableLink() {
//   document.getElementById("startLink").disabled = false;
// };

// Store Player Name
function savePlayer(){
    let player = document.getElementById('player').value;
    sessionStorage.setItem('playerName', player);
    console.log(sessionStorage.getItem('playerName'));
    console.log(player);
    
    document.getElementById("playGame").style.display = "block";
    
    
    document.querySelector('#playerHi').innerHTML=`${player}`;
};
    
// let player = sessionStorage.getItem('playerName');

// document.querySelector('#playerHi').innerHTML=`${player}`;


// document.addEventListener('DOMContentLoaded',() => {
// newGame.start();

// window.addEventListener('load', (event) => {
//     console.log(`there was a load event`);
// });

// document.addEventListener('readystatechange', (event) => {
//     console.log(`Ready state changed`);
// });

// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log(`DOM content loaded`);
// });
//////////////////////////////////////////////////////////////////////


