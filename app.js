var qwerty = document.getElementById('qwerty');
var phrase = document.getElementById('phrase');
var missed = 0;
document.getElementsByClassName('btn__reset')[0].addEventListener('click', function(){
    this.parentNode.style.display = 'none';
});
var phrases = [
    'Moral indignation is jealousy with a halo',
    'Glory is fleeting but obscurity is forever',
    'His ignorance is encyclopedic',
    'If a man does his best what else is there',
    'Political correctness is tyranny with manners'
];
function getRandomPhraseAsArray(arr){
    var str = arr[Math.floor(Math.random() * 5)];
    return str.split('');
}
function addPhraseToDisplay(arr){
    for(var i = 0; i < arr.length; i++){
        var li = document.createElement('li');
        li.textContent = arr[i].toUpperCase();
        if(arr[i].match(/[a-z]/i)){
            li.className = 'letter';
        }
        document.querySelector('#phrase ul').appendChild(li);
    }
}
function checkLetter(letter){
    var elems = document.getElementsByClassName('letter');
    var counter = 0;
    for(var i = 0; i < elems.length; i++){
        if(elems[i].textContent === letter.toUpperCase()){
            elems[i].classList.add('show');
            counter++;
        }
    }
    if(counter > 0){
        return letter;
    }else{
        return null;
    }
}
qwerty.addEventListener('click', function(evt){
    if(evt.target.nodeName === 'BUTTON'){
        evt.target.classList.add('chosen');
        evt.target.setAttribute('disabled', 'disabled');
        var letterFound = checkLetter(evt.target.textContent);
        if(letterFound === null){
            missed++;
            document.querySelectorAll('#scoreboard li')[missed -1].firstElementChild.src = 'images/lostHeart.png';
        }
        checkWin();
    }
});
function checkWin(){
    if(document.getElementsByClassName('show').length === document.getElementsByClassName('letter').length){
        document.getElementById('overlay').style.display = 'block';
        document.querySelector('#overlay .title').textContent = 'You WIN!';
        document.getElementsByClassName('btn__reset')[0].style.display = 'none';
    }else if(missed === 5){
        document.getElementById('overlay').style.display = 'block';
        document.querySelector('#overlay .title').textContent = 'You Loose!';
        document.getElementsByClassName('btn__reset')[0].style.display = 'none';
    }
}
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);