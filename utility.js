// another way by using function

// function for hiding the element
function play(){
    hideElementById('home-section')
    showElementById('playground-section')
    continueGame()
}
function hideElementById(elementId){
 let element = document.getElementById(elementId);
 element.classList.add('hidden')
}

// function for adding the element

function showElementById(elementId){
    let element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

// function of playing the game   
 function continueGame(){
 //  step -1 : generate a random alphabet
let alphabet = getRandomAlphabet() ;
console.log("your random alphabet",alphabet)
// set randomly generated alphabet to the string
let currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet.toUpperCase();

//  set background color 

setBackgroundColor(alphabet)

}



function getRandomAlphabet(){
//    create of a alphabet array
   let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
   let alphabets = alphabetString.split('');
// get a random index between 0-25 
   let randomNumber = Math.random() * 25 ;
   let index = Math.round(randomNumber)
  
   let alphabet = alphabets[index]
   return alphabet
   
   
}


// keys color 

function setBackgroundColor(elementId){
    let element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')

}