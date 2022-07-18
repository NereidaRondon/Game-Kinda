wordBank=['abhor', 'above', 'acute', 'agent', 'alarm', 'alone', 'angle', 'arena', 'avoid', 'basic', 'beach', 'below', 'birth', 'block', 'brain', 'break', 'brief', 'build', 'cable', 'chart', 'check', 'class', 'clean', 'coast', 'coach', 'color', 'cough', 'crash', 'crime', 'curve', 'dance', 'debut', 'dodger', 'drama', 'dream', 'drive', 'eager', 'earth', 'eject', 'empty', 'equal', 'error', 'event', 'exact', 'exist', 'false', 'field', 'fight', 'final', 'flash', 'fleet', 'force', 'frame', 'front', 'fudge', 'funny', 'giant', 'glass', 'grace', 'grade', 'grant', 'grass', 'group', 'guest', 'guide', 'happy', 'haste', 'heart', 'heavy', 'house', 'human', 'image', 'index', 'input', 'jaded', 'joint', 'judge', 'karma', 'kayak', 'kiosk', 'label', 'laser', 'later', 'laugh', 'learn', 'leave', 'level', 'limit', 'logic', 'lucky', 'lunch', 'magic', 'match', 'media', 'model', 'money', 'month', 'motor', 'movie', 'music', 'never', 'night', 'noise', 'novel', 'ocean', 'order', 'other', 'paint', 'panic', 'paper', 'party', 'peace', 'phase', 'phone', 'pilot', 'plane', 'plant', 'point', 'power', 'prime', 'proud', 'prove', 'queen', 'quiet', 'radio', 'range', 'rapid', 'ratio', 'react', 'ready', 'rival', 'river', 'rough', 'round', 'route', 'royal', 'scope', 'score', 'shape', 'sheet', 'shift' , 'short', 'sight', 'skill', 'small', 'smart', 'smile', 'solid', 'sound', 'space', 'speak', 'sport', 'start', 'steam', 'stock', 'storm', 'story', 'study', 'style', 'super', 'sweet', 'table', 'taste', 'teach', 'teeth', 'theme', 'think', 'tight', 'title', 'topic', 'tough', 'tower', 'trust', 'under', 'union', 'urban', 'valid', 'vapid', 'venom', 'video', 'virus', 'visit', 'voice', 'waste', 'watch', 'water', 'wheel', 'where', 'whole', 'woman', 'world', 'worry', 'worth', 'write', 'wrong', 'yield', 'young', 'youth', 'zesty', 'zombi']



let player = prompt('Enter your name: ');
alert(`Hi ${player}, welcome to my version of wordle!`);

$('input').on("input", function(){
    let $this = $(this);
    if ($this.val().length === parseInt($this.attr("maxlength"), 10)){
        let nextInput = $this.nextAll("input[value=''], input:not([value])")[0];
        if (nextInput){
            nextInput.focus();
        }    
    }
});



function

document.addEventListener('click', onclick, true);