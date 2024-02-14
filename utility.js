// another way by using function

// function for hiding the element
function play(){
    hideElementById('home-section')
    hideElementById('final-score')
    showElementById('playground-section')
// reset score and life
  setTextElementValueById('current-life',5)
  setTextElementValueById('current-score',0)



    continueGame()
}

function gameOver(){
    
    hideElementById('playground-section')
    showElementById('final-score')
    // update final score
    // get the final score
    let lastScore = getTextElementValueById('current-score')
    setTextElementValueById('last-score', lastScore)
//  clear the last selected alphabet  
   let currentAlphabet = getElementTextById('current-alphabet');
   removeBackgroundColor(currentAlphabet)
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
// console.log("your random alphabet",alphabet)
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

function removeBackgroundColor(elementId){
 let element = document.getElementById(elementId)
 element.classList.remove('bg-orange-400')}

  function keyboardButtonPressHandler(event){
   let playerPressed = event.key ;
//    console.log("playerPressed " , playerPressed)
// stop the game if user press escape
if(playerPressed === 'escape'){
    gameOver()
}

//    get the expected to press
   let currentAlphabetElement = document.getElementById('current-alphabet');
   let currentAlphabet = currentAlphabetElement.innerText;
   let expectedAlphabet = currentAlphabet.toLowerCase();
   console.log(playerPressed, expectedAlphabet);

//    check match or not
 if(playerPressed === expectedAlphabet){
    console.log('You got a point');
    
let currentScore = getTextElementValueById('current-score')
let updatedScore = currentScore + 1 ;

setTextElementValueById('current-score',updatedScore)

   
//    let currentScoreElement = document.getElementById('current-score');
//    let currentScoreText = currentScoreElement.innerText ; 
//    let currentScore = parseInt(currentScoreText); 

// // increasing the score 
//     let newScore = currentScore + 1 ;

// // show the updated score 

//     currentScoreElement.innerText = newScore

    removeBackgroundColor(expectedAlphabet)
    continueGame()
 
} 
 else {
    console.log('you missed,you lost a life')
   let currentLife = getTextElementValueById('current-life')
   let updatedLife = currentLife - 1 ; 
   setTextElementValueById('current-life',updatedLife)
   if(updatedLife === 0){
    gameOver()
}


//  ******************************************
    //     let currentLifeElement = document.getElementById('current-life');
//     let currentLifeText = currentLifeElement.innerText ; 
//     let currentLife = parseInt(currentLifeText); 
 
//  // increasing the score 
//      let newLife = currentLife - 1 ;
 
//  // show the updated score 
 
//      currentLifeElement.innerText = newLife
 }

}
document.addEventListener("keyup",keyboardButtonPressHandler)




function getTextElementValueById(elementId){
    let element = document.getElementById(elementId) 
    let elementValueText = element.innerText ; 
    let value = parseInt(elementValueText) ; 
    return value ;
  
  }
  
  function setTextElementValueById(elementId, value){
      let element = document.getElementById(elementId) ;
      element.innerText = value;
  }

  function getElementTextById(elementId){
    let element = document.getElementById(elementId) 
    let text = element.innerText ; 
    return text;
}

