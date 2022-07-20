// Store Player Name
function greetPlayer(){
        let player = document.getElementById('player').value;
        sessionStorage.setItem('playerName', player);
    }
    
    
let player = sessionStorage.getItem('playerName');
    
console.log(player);


    //dark mode checkbox toggle
let toggle =document.getElementById("mode");

// toggle.addEventListener('click', ()=>{
//     document.body.classList.toggle('dark');
// })


// let showStartBtn=()=>{ document.getElementById('startBtn').removeAttribute('disabled', '');};

function showStartBtn(){
    document.getElementById('startBtn').removeAttribute('hidden', '');
};

// -------------------------------------


// let player = ('Enter your name: ');
// (`Hi ${player}, welcome to my version of wordle!`);

// const wordBank=['abhor', 'above', 'acute', 'agent', 'alarm', 'alone', 'angle', 'arena', 'avoid', 'basic', 'beach', 'below', 'birth', 'block', 'brain', 'break', 'brief', 'build', 'cable', 'chart', 'check', 'class', 'clean', 'coast', 'coach', 'color', 'cough', 'crash', 'crime', 'curve', 'dance', 'debut', 'dodger', 'drama', 'dream', 'drive', 'eager', 'earth', 'eject', 'empty', 'equal', 'error', 'event', 'exact', 'exist', 'false', 'field', 'fight', 'final', 'flash', 'fleet', 'force', 'frame', 'front', 'fudge', 'funny', 'giant', 'glass', 'grace', 'grade', 'grant', 'grass', 'group', 'guest', 'guide', 'happy', 'haste', 'heart', 'heavy', 'house', 'human', 'image', 'index', 'input', 'jaded', 'joint', 'judge', 'karma', 'kayak', 'kiosk', 'label', 'laser', 'later', 'laugh', 'learn', 'leave', 'level', 'limit', 'logic', 'lucky', 'lunch', 'magic', 'match', 'media', 'model', 'money', 'month', 'motor', 'movie', 'music', 'never', 'night', 'noise', 'novel', 'ocean', 'order', 'other', 'paint', 'panic', 'paper', 'party', 'peace', 'phase', 'phone', 'pilot', 'plane', 'plant', 'point', 'power', 'prime', 'proud', 'prove', 'queen', 'quiet', 'radio', 'range', 'rapid', 'ratio', 'react', 'ready', 'rival', 'river', 'rough', 'round', 'route', 'royal', 'scope', 'score', 'shape', 'sheet', 'shift' , 'short', 'sight', 'skill', 'small', 'smart', 'smile', 'solid', 'sound', 'space', 'speak', 'sport', 'start', 'steam', 'stock', 'storm', 'story', 'study', 'style', 'super', 'sweet', 'table', 'taste', 'teach', 'teeth', 'theme', 'think', 'tight', 'title', 'topic', 'tough', 'tower', 'trust', 'under', 'union', 'urban', 'valid', 'vapid', 'venom', 'video', 'virus', 'visit', 'voice', 'waste', 'watch', 'water', 'wheel', 'where', 'whole', 'woman', 'world', 'worry', 'worth', 'write', 'wrong', 'yield', 'young', 'youth', 'zesty', 'zombi'];

const wordBank=['night', 'sight', 'fight', 'right', 'tight', 'might', 'light', 'night', 'sight', 'fight', 'right', 'tight', 'might', 'light', 'night', 'sight','fight', 'right', 'sight', 'fight', 'right', 'tight', 'might', 'light', 'night', 'sight','fight', 'right', 'sight', 'fight', 'right', 'tight', 'might', 'light', 'night', 'sight','fight', 'right', 'sight', 'fight', 'right', 'tight', 'might', 'light', 'night', 'sight','fight', 'right', 'sight', 'fight', 'right', 'tight', 'might', 'light', 'night', 'sight','fight', 'right', 'sight', 'fight', 'right', 'tight', 'might', 'light', 'night', 'sight','fight', 'right', 'sight', 'fight', 'right', 'tight', 'might', 'light', 'night', 'sight','fight', 'right', 'sight', 'fight', 'right', 'tight', 'might', 'light', 'night', 'sight','fight', 'right', 'sight', 'fight', 'right', 'tight', 'might', 'light', 'night', 'sight','fight', 'right']


let gameBank = [...wordBank];
let gameList=[];
// let round=1;
// let points=0;
// let chances=5;

//function replaces innerHTML for the score board
// let replace = (elementId, el)=>{
//     document.getElementById(elementId).innerHTML=`${elementId.toUpperCase()}: ${el}`;
// }

////////////////////////////////////////////////////////////


//needs to be triggered by start game button ✔️
class Game {
    constructor(list, word){
        this.list = list;
        this.word = word;
        
        this.round = 0;
        this.points = 0;
        this.chances = 5;
    }


    start(){
       
        //update round to 1                            
        this.round = this.round+1;

        //update score board
        newGame.scoreboard();
        
        document.getElementById('submitBtn').removeAttribute('disabled', '');
        document.getElementById('clearBtn').removeAttribute('disabled', '');
        
        let wordPicker=(list)=>{   //makes word list for game
                
            for(let i=0; i<10; i++){
                    let wordIndex = Math.floor(Math.random() * list.length);
                    
                    let newWord = list[wordIndex]; //picks a word
                    gameList.push(newWord);  //adds word to an array
            }
            //DELETE LATER
             console.log(`Game word bank: ${gameList}`);         
             console.log(`Length of Game bank: ${gameList.length}`);
        
             return gameList; //should have a list of 10 words
             
        }
            
        wordPicker(gameBank);
        
                        
        this.word = gameList[this.round-1];
        console.log(`This round's word: ${this.word}`); //word for round
    }  
    
    submit(){
        this.word = gameList[this.round-1];
        console.log(`This round's word: ${this.word}`); //word for round

        //triggered by submit button
        let one=document.getElementById("input1").value;
        let two=document.getElementById("input2").value;
        let three=document.getElementById("input3").value;
        let four=document.getElementById("input4").value;
        let five=document.getElementById("input5").value;
        

        // Take user input, concatenate to create a string
        let userWord = (one+two+three+four+five).toLowerCase();
        
        function containsNumber(str) {
            return /[0-9]/.test(str);
        }
        console.log(`Contains num? ${containsNumber(userWord)}`); 

        console.log(`User's Word: ${userWord}`);
        console.log(`This Word: ${this.word}`);
        
        


        if (document.querySelector(".one").value == ""){            
            
            alert('Please fill in each box and try again');
            
            document.getElementById('submitBtn').removeAttribute('disabled', '');
            document.getElementById('clearBtn').removeAttribute('disabled', '');

        } else if (document.querySelector(".two").value == ""){            
            
            alert('Please fill in each box and try again');
            
            document.getElementById('submitBtn').removeAttribute('disabled', '');
            document.getElementById('clearBtn').removeAttribute('disabled', '');            
        
        
        } else if (document.querySelector(".three").value == ""){            
            
            alert('Please fill in each box and try again');
            
            document.getElementById('submitBtn').removeAttribute('disabled', '');
            document.getElementById('clearBtn').removeAttribute('disabled', '');            
            
        
        } else if (document.querySelector(".four").value == ""){            
            
            alert('Please fill in each box and try again');
            
            document.getElementById('submitBtn').removeAttribute('disabled', '');
            document.getElementById('clearBtn').removeAttribute('disabled', '');            
        
        
        } else if (document.querySelector(".five").value == ""){            
            
            alert('Please fill in each box and try again');
            
            document.getElementById('submitBtn').removeAttribute('disabled', '');
            document.getElementById('clearBtn').removeAttribute('disabled', '');            

        
        } else if (containsNumber(userWord)){

            alert('Not a word, please try again');
            
            document.getElementById('submitBtn').removeAttribute('disabled', '');
            document.getElementById('clearBtn').removeAttribute('disabled', '');
                
        } else if (userWord === this.word && this.round===10){
                
            this.points+=10;
            console.log(`new points: ${this.points}`);


            document.getElementById("message").innerHTML="✔️ That's correct ✔️";
            //disable or enable buttons as needed
            document.getElementById('submitBtn').setAttribute('disabled', '');
            document.getElementById('clearBtn').setAttribute('disabled', '');
            //enable this next round button
            document.getElementById('nextBtn').removeAttribute('disabled', '');

            //Words match finished game
             document.getElementById("message").innerHTML=
                `
                        ✔️ That's correct ✔️
                Super! You made it to the last round!
                                🏆
                `;

            //disables all buttons
            document.getElementById('submitBtn').setAttribute('disabled', '');
            document.getElementById('clearBtn').setAttribute('disabled', '');
            document.getElementById('nextBtn').setAttribute('disabled', '');
            //enable close window button
            document.getElementById('closeBtn').removeAttribute('hidden', '');

            newGame.endGame();


        } else if (userWord === this.word){
                
            this.points+=10;
            console.log(`new points: ${this.points}`);


            document.getElementById("message").innerHTML="✔️ That's correct ✔️";
            //disable or enable buttons as needed
            document.getElementById('submitBtn').setAttribute('disabled', '');
            document.getElementById('clearBtn').setAttribute('disabled', '');
            //enable next round button
            document.getElementById('nextBtn').removeAttribute('disabled', '');


        } else if(userWord !== this.word && this.chances>0) {
            //take guesses variable and subtract one 
            this.chances--;
            document.getElementById("message").innerHTML="❌ Try again! ❌";
            //nextBtn should already be disabled by default           
            let letterMatch=(user, word)=>{
                for(let i=0; i < 5; i++){
                    if(user[i].toLowerCase()!==word[i]){      
                        let indexId=`input${(i)+1}`;
                        let clearInput = (elementId)=>{
                                document.getElementById(elementId).value="";
                        }
                        clearInput(indexId);
                    };
                };
            };

            letterMatch(userWord, this.word);
            console.log("Letters that didn't match have been cleared")
            
        } else if(this.chances===0){
            //Words don't match and out of guesses
            document.getElementById("message").innerHTML=
                `
                That's incorrect!
                ❌ Game Over ❌
                `;

            //disables all buttons
            document.getElementById('submitBtn').setAttribute('disabled', '');
            document.getElementById('clearBtn').setAttribute('disabled', '');
            document.getElementById('closeBtn').removeAttribute('hidden', '');

        };
    
        //update score board
         newGame.scoreboard();
    
    }


    //triggered by CLEAR button
    clear(){
        //clear input text boxes when clear button is clicked
        document.querySelector('#input1').value='';
        document.querySelector('#input2').value='';
        document.querySelector('#input3').value='';
        document.querySelector('#input4').value='';
        document.querySelector('#input5').value='';

    }

     //triggered by NEXT ROUND button
    reset(){
        document.getElementById('submitBtn').removeAttribute('disabled', '');
        document.getElementById('clearBtn').removeAttribute('disabled', '');
        document.getElementById('nextBtn').setAttribute('disabled', '');
        
        document.querySelector("#message").innerHTML='';
        
        document.querySelector('#input1').value='';
        document.querySelector('#input2').value='';
        document.querySelector('#input3').value='';
        document.querySelector('#input4').value='';
        document.querySelector('#input5').value='';
        
        this.round+=1;
        this.chances=5;
        //update score board
        newGame.scoreboard();

        let nextWord = this.round - 1;
        console.log(`The next word: ${gameList[nextWord]}`)

    }

    endGame(){
        $('#endGame').modal('show');

        document.querySelector('#player').innerHTML=`${player}`;

        newGame.reset();
        this.round=0;
        this.points=0;
        this.chances=5;
    }


   scoreboard(){
        document.getElementById('round').innerHTML=`ROUND: ${this.round}`;
        document.getElementById('points').innerHTML=`POINTS: ${this.points}`;
        document.getElementById('chances').innerHTML=`CHANCES: ${this.chances}`;

        console.log(`Round: ${this.round}`);
        console.log(`Points: ${this.points}`);
        console.log(`Chances: ${this.chances}`);
    }


}

    


//////////////////////////////////////////////////////// 


// newGame.start();

const start = document.querySelector("#startBtn");
const submit = document.querySelector("#submitBtn");
const clear = document.querySelector("#clearBtn");
const next = document.querySelector("#nextBtn");

let newGame = new Game;



