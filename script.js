document.getElementById("playGame").style.display = "none";
/////////////////////////////////////////////////////

//tabs over when you hit enter
function handleEnter(event) {
    if (event.key==="Enter") {
        const form = document.getElementById('form')
        const index = [...form].indexOf(event.target);
        form.elements[index + 1].focus();
    }
}
/////////////////////////////////////////////////////

// Store Player Name
function savePlayer(){
    let player = document.getElementById('player').value;
    sessionStorage.setItem('playerName', player);
    console.log(sessionStorage.getItem('playerName'));
    document.getElementById("playGame").style.display = "block";
    document.querySelector('#playerHi').innerHTML=`${player}`;
};