const playButton = document.querySelector('#play-button')
const letterBank = document.querySelector('#letter-bank')
const hintButton = document.querySelector('#hint-button')
const playAgainButton = document.querySelector('#play-again-button')
const goalWordContainer = document.querySelector('#goal-word-box')
const messageBoxHeader = document.querySelector('#message-box-header')
const letterBankHeader = document.querySelector('#letter-bank-header')
const goalWordHeader = document.querySelector('#goal-word-header')
const possibleLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const randomLetterOne = document.querySelector('#random-letter-one-button')
const randomLetterTwo = document.querySelector('#random-letter-two-button')
const randomLetterThree = document.querySelector('#random-letter-three-button')
const randomLetterFour = document.querySelector('#random-letter-four-button')
const randomLetterFive = document.querySelector('#random-letter-five-button')
const randomLetterSix = document.querySelector('#random-letter-six-button')
const randomLetterSeven = document.querySelector('#random-letter-seven-button')
const randomLetterEight = document.querySelector('#random-letter-eight-button')
const randomLetterNine = document.querySelector('#random-letter-nine-button')
const randomLetterTen = document.querySelector('#random-letter-ten-button')
const goalWordBank = ['declare', 'elite', 'regulate', 'deficit', 'confirm', 'literally', 'admission', 'enterprise', 'shrug', 'steal', 'assert', 'attempt', 'quick', 'afternoon', 'lower', 'tattoo', 'Chinese', 'taste', 'regular', 'recruit', 'bread', 'objective', 'profit', 'figure', 'American', 'approach', 'decade', 'asset', 'involve', 'tear', 'painting', 'investment', 'church', 'inflation', 'museum', 'guess', 'preference', 'illustrate', 'participate', 'person', 'amount', 'recognize', 'beside', 'living', 'society', 'throughout', 'towards', 'modern']
let goalWord = goalWordBank[Math.floor(Math.random()*(goalWordBank.length))]
let goalWordArray = goalWord.split('')

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

const randomizeWord = () => {
    goalWord = goalWordBank[Math.floor(Math.random()*(goalWordBank.length))]
    goalWordArray = goalWord.split('')
    for(let i =  0; i < goalWord.length; i++) {
        goalWordArray.splice(i, i, ' _____ ')
        goalWordContainer.innerHTML = goalWordArray.join(' ')
    }
    console.log(goalWord)
    console.log(goalWordArray)
}

const makeGoalLines = () => {
    for(let i =  0; i < goalWord.length; i++) {
        goalWordArray.splice(i, i, ' _____ ')
        goalWordContainer.innerHTML = goalWordArray.join(' ')
    }
}

const initialize = () => {
    playButton.style.display = 'none'
    letterBank.style.display = 'block'
    hintButton.style.display = 'block'
    playAgainButton.style.display = 'block'
    goalWordContainer.style.display = 'block'
    messageBoxHeader.style.display = 'block'
    letterBankHeader.style.display = 'block'
    goalWordHeader.style.display = 'block'
}

playButton.addEventListener('click', () => {
    initialize()
    randomizeLetter()
    makeGoalLines()
})

playAgainButton.addEventListener('click', () => {
    initialize()
    randomizeLetter()
    makeGoalLines()
    randomizeWord()
})

console.log(goalWord)
console.log(goalWordArray)

randomLetterOne.addEventListener('click', () => {
    let letterOneValue = randomLetterOne.innerText
    if(goalWordArray.indexOf(letterOneValue) !== -1 ) {
        console.log('Its there')
    }else {
        console.log('It aint there')
    }
})

randomLetterTwo.addEventListener('click', () => {
    let letterTwoValue = randomLetterTwo.innerText
    if(goalWordArray.indexOf(letterTwoValue) !== -1 ) {
        console.log('Its there')
    }else {
        console.log('It aint there')
    }
})

randomLetterThree.addEventListener('click', () => {
    let letterThreeValue = randomLetterThree.innerText
    if(goalWordArray.indexOf(letterThreeValue) !== -1 ) {
        console.log('Its there')
    }else {
        console.log('It aint there')
    }
})

randomLetterFour.addEventListener('click', () => {
    let letterFourValue = randomLetterFour.innerText
    if(goalWordArray.indexOf(letterFourValue) !== -1 ) {
        console.log('Its there')
    }else {
        console.log('It aint there')
    }
})

randomLetterFive.addEventListener('click', () => {
    let letterFiveValue = randomLetterFive.innerText
    if(goalWordArray.indexOf(letterFiveValue) !== -1 ) {
        console.log('Its there')
    }else {
        console.log('It aint there')
    }
})

randomLetterSix.addEventListener('click', () => {
    let letterSixValue = randomLetterSix.innerText
    if(goalWordArray.indexOf(letterSixValue) !== -1 ) {
        console.log('Its there')
    }else {
        console.log('It aint there')
    }
})

randomLetterSeven.addEventListener('click', () => {
    let letterSevenValue = randomLetterSeven.innerText
    if(goalWordArray.indexOf(letterSevenValue) !== -1 ) {
        console.log('Its there')
    }else {
        console.log('It aint there')
    }
})

randomLetterEight.addEventListener('click', () => {
    let letterEightValue = randomLetterEight.innerText
    if(goalWordArray.indexOf(letterEightValue) !== -1 ) {
        console.log('Its there')
    }else {
        console.log('It aint there')
    }
})

randomLetterNine.addEventListener('click', () => {
    let letterNineValue = randomLetterNine.innerText
    if(goalWordArray.indexOf(letterNineValue) !== -1 ) {
        console.log('Its there')
    }else {
        console.log('It aint there')
    }
})

randomLetterTen.addEventListener('click', () => {
    let letterTenValue = randomLetterTen.innerText
    if(goalWordArray.indexOf(letterTenValue) !== -1 ) {
        console.log('Its there')
    }else {
        console.log('It aint there')
    }
})
