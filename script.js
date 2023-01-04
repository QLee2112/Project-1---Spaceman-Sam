const playButton = document.querySelector('#play-button')
const letterBank = document.querySelector('#letter-bank')
const hintButton = document.querySelector('#hint-button')
const playAgainButton = document.querySelector('#play-again-button')
const goalWordLines = document.querySelector('#goal-word-lines')
const headers = document.querySelector('headers')
//const goalWordBank = [declare, elite, regulate, deficit, confirm, literally, admission, enterprise, shrug, steal, assert, attempt, quick, afternoon, lower, tattoo, Chinese, taste, regular, recruit, bread, objective, profit, figure, American, approach, decade, asset, involve, tear, painting, investment, church, inflation, museum, guess, preference, illustrate, participate, person, amount, recognize, beside, living, society, throughout, towards, modern ]


playButton.addEventListener('click', () => {
    console.log('Working')
    playButton.style.display = 'none'
    letterBank.style.display = 'block'
    hintButton.style.display = 'block'
    playAgainButton.style.display = 'block'
    goalWordLines.style.display = 'block'
})

const getAGoalWord = () => {
    for(let i =  Math.floor(Math.random() * 51); i <= goalWordBank[i].getLength; i++) {
        
    }
}
