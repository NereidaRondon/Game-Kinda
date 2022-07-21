
//dark mode checkbox toggle
// let toggle =document.getElementById("mode");

// toggle.addEventListener('click', ()=>{
//     document.body.classList.toggle('dark');
// })


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

// Store Player Name
function savePlayer(){
        let player = document.getElementById('player').value;
        sessionStorage.setItem('playerName', player);
        document.querySelector("startBtn").removeAttribute("disabled", "");
    }
    
    
let player = sessionStorage.getItem('playerName');
    
console.log(player);


