const playButton = document.querySelector('#play-button')
const letterBank = document.querySelector('#letter-bank')
const hintButton = document.querySelector('#hint-button')
const playAgainButton = document.querySelector('#play-again-button')
const goalWordBoxes = document.querySelector('#goal-word-box')
const messageBoxHeader = document.querySelector('#message-box-header')
const letterBankHeader = document.querySelector('#letter-bank-header')
const goalWordHeader = document.querySelector('#goal-word-header')
const possibleLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const randomLetterOne = document.querySelector('#random-letter-one')
const randomLetterTwo = document.querySelector('#random-letter-two')
const randomLetterThree = document.querySelector('#random-letter-three')
const randomLetterFour = document.querySelector('#random-letter-four')
const randomLetterFive = document.querySelector('#random-letter-five')
const randomLetterSix = document.querySelector('#random-letter-six')
const randomLetterSeven = document.querySelector('#random-letter-seven')
const randomLetterEight = document.querySelector('#random-letter-eight')
const randomLetterNine = document.querySelector('#random-letter-nine')
const randomLetterTen = document.querySelector('#random-letter-ten')
const goalWordBank = ['declare', 'elite', 'regulate', 'deficit', 'confirm', 'literally', 'admission', 'enterprise', 'shrug', 'steal', 'assert', 'attempt', 'quick', 'afternoon', 'lower', 'tattoo', 'Chinese', 'taste', 'regular', 'recruit', 'bread', 'objective', 'profit', 'figure', 'American', 'approach', 'decade', 'asset', 'involve', 'tear', 'painting', 'investment', 'church', 'inflation', 'museum', 'guess', 'preference', 'illustrate', 'participate', 'person', 'amount', 'recognize', 'beside', 'living', 'society', 'throughout', 'towards', 'modern']
const goalWordBox = document.querySelector('#goal-word-box')

const randomizeLetter = () => {
    randomLetterOne.innerHTML = possibleLetters[Math.floor(Math.random() * possibleLetters.length)]
    randomLetterTwo.innerHTML = possibleLetters[Math.floor(Math.random() * possibleLetters.length)]
    randomLetterThree.innerHTML = possibleLetters[Math.floor(Math.random() * possibleLetters.length)]
    randomLetterFour.innerHTML = possibleLetters[Math.floor(Math.random() * possibleLetters.length)]
    randomLetterFive.innerHTML = possibleLetters[Math.floor(Math.random() * possibleLetters.length)]
    randomLetterSix.innerHTML = possibleLetters[Math.floor(Math.random() * possibleLetters.length)]
    randomLetterSeven.innerHTML = possibleLetters[Math.floor(Math.random() * possibleLetters.length)]
    randomLetterEight.innerHTML = possibleLetters[Math.floor(Math.random() * possibleLetters.length)]
    randomLetterNine.innerHTML = possibleLetters[Math.floor(Math.random() * possibleLetters.length)]
    randomLetterTen.innerHTML = possibleLetters[Math.floor(Math.random() * possibleLetters.length)]
}

const getAGoalWord = () => {
    for(let i =  0; i <= Math.floor(Math.random()*(goalWordBank.length)); i++) {
        goalWordBox.innerHTML = '_____'
    }
}

const initialize = () => {
    playButton.style.display = 'none'
    letterBank.style.display = 'block'
    hintButton.style.display = 'block'
    playAgainButton.style.display = 'block'
    goalWordBoxes.style.display = 'block'
    messageBoxHeader.style.display = 'block'
    letterBankHeader.style.display = 'block'
    goalWordHeader.style.display = 'block'
}

playButton.addEventListener('click', () => {
    initialize()
    randomizeLetter()
    getAGoalWord()
})

playAgainButton.addEventListener('click', () => {
    initialize()
    randomizeLetter()
    getAGoalWord()
})



