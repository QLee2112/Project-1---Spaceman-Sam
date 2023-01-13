const playButton = document.querySelector('#play-button')
const letterBank = document.querySelector('#letter-bank')
const goalWordContainer = document.querySelector('#goal-word-box')
const messageBoxHeader = document.querySelector('#message-box-header')
const messageBox = document.querySelector('message-box')
const letterBankHeader = document.querySelector('#letter-bank-header')
const checkAnswerButton = document.querySelector('#check-answer-button')
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
const title = document.querySelector('#title')
const subTitle = document.querySelector('#subtitle')
const leftArm = document.querySelector('#left-arm')
const rightArm = document.querySelector('#right-arm')
const helmet = document.querySelector('#helmet')
const stickBody = document.querySelector('#stick-body')
const leftLeg = document.querySelector('#left-leg')
const rightLeg = document.querySelector('#right-leg')
const spaceship = document.querySelector('#spaceship')
const goalWordBank = ['declare', 'elite', 'regulate', 'deficit', 'confirm', 'literally', 'admission', 'enterprise', 'shrug', 'steal', 'assert', 'attempt', 'quick', 'afternoon', 'lower', 'tattoo', 'Chinese', 'taste', 'regular', 'recruit', 'bread', 'objective', 'profit', 'figure', 'American', 'approach', 'decade', 'asset', 'involve', 'tear', 'painting', 'investment', 'church', 'inflation', 'museum', 'guess', 'preference', 'illustrate', 'participate', 'person', 'amount', 'recognize', 'beside', 'living', 'society', 'throughout', 'towards', 'modern']
let goalWord = goalWordBank[Math.floor(Math.random()*(goalWordBank.length))]
let goalWordArrayBlanks = goalWord.split('')
let goalWordArray = goalWord.split('')
let guessCount = 0

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

const addGoalLetters = () => {
    for(i = 0; i < goalWord.length; i++) {
        let goalLetter = goalWordArray[i]
        let goalLetterButton = document.createElement('button')
        goalLetterButton.innerHTML = goalLetter
        letterBank.appendChild(goalLetterButton)
        goalLetterButton.setAttribute('id', 'goal-letter-button-' + (i + 1))
        goalLetterButton.setAttribute('class', 'letter-button')
        document.getElementById('goal-letter-button-' + (i + 1)).addEventListener('click', () => {
            if(goalWordArray.indexOf(goalLetter) !== -1 ) {
                document.getElementById('message-box').innerHTML = 'That was a correct letter!'
                for(i = 0; i <= goalWordArrayBlanks.length; i++) {
                    if(goalWordArray[i] === goalLetter) {
                        goalWordArrayBlanks.splice(i, 1, goalLetter)
                        goalWordContainer.innerHTML = goalWordArrayBlanks.join(' ')
                    }
                }
                }else {
                document.getElementById('goal-letter-button-' + (i + 1)).style.color = 'red'
                document.getElementById('message-box').innerHTML = 'That was not a correct letter'
            }
        })
    }
}

const makeGoalLines = () => {
    for(let i =  0; i < goalWord.length; i++) {
        goalWordArrayBlanks.splice(i, i, ' _____ ')
        goalWordContainer.innerHTML = goalWordArrayBlanks.join(' ')
    }
}
const initialize = () => {
    playButton.style.display = 'none'
    letterBank.style.display = 'block'
    goalWordContainer.style.display = 'block'
    messageBoxHeader.style.display = 'block'
    letterBankHeader.style.display = 'block'
    goalWordHeader.style.display = 'block'
    checkAnswerButton.style.display = 'block'
    spaceship.style.display = 'block'
    title.style.display = 'none'
    subTitle.style.display = 'none'
}

playButton.addEventListener('click', () => {
    initialize()
    randomizeLetter()
    makeGoalLines()
    addGoalLetters()
})

randomLetterOne.addEventListener('click', () => {
    let letterOneValue = randomLetterOne.innerText
    if(goalWordArray.indexOf(letterOneValue) !== -1 ) {
        document.getElementById('message-box').innerHTML = 'That was a correct letter!'
        for(i = 0; i <= goalWordArrayBlanks.length; i++) {
            if(goalWordArray[i] === letterOneValue) {
                goalWordArrayBlanks.splice(i, 1, letterOneValue)
                goalWordContainer.innerHTML = goalWordArrayBlanks.join(' ')
            }
        }
    }else {
        randomLetterOne.style.color = 'red'
        guessCount++
        document.getElementById('message-box').innerHTML = 'That was not a correct letter'
        if(guessCount === 1){
            helmet.style.display = 'block'
        }else if(guessCount === 2) {
            stickBody.style.display = 'block'
        }else if(guessCount === 3) {
            leftArm.style.display = 'block'
        }else if(guessCount === 4) {
            rightArm.style.display = 'block'
        }else if(guessCount === 5) {
            leftLeg.style.display = 'block'
        }else if(guessCount === 6) {
            rightLeg.style.display = 'block'
            document.getElementById('message-box').innerHTML = 'Oof, not this time. Maybe stop coding so much and go read a book'
        }
    }
})

randomLetterTwo.addEventListener('click', () => {
    let letterTwoValue = randomLetterTwo.innerText
    if(goalWordArray.indexOf(letterTwoValue) !== -1 ) {
        document.getElementById('message-box').innerHTML = 'That was a correct letter!'
        for(i = 0; i <= goalWordArrayBlanks.length; i++) {
            if(goalWordArray[i] === letterTwoValue) {
                goalWordArrayBlanks.splice(i, 1, letterTwoValue)
                goalWordContainer.innerHTML = goalWordArrayBlanks.join(' ')
            }
        }
    }else {
        randomLetterTwo.style.color = 'red'
        guessCount += 1
        document.getElementById('message-box').innerHTML = 'That was not a correct letter'
        if(guessCount === 1){
            helmet.style.display = 'block'
        }else if(guessCount === 2) {
            stickBody.style.display = 'block'
        }else if(guessCount === 3) {
            leftArm.style.display = 'block'
        }else if(guessCount === 4) {
            rightArm.style.display = 'block'
        }else if(guessCount === 5) {
            leftLeg.style.display = 'block'
        }else if(guessCount === 6) {
            rightLeg.style.display = 'block'
            document.getElementById('message-box').innerHTML = 'Oof, not this time. Maybe stop coding so much and go read a book'
        }
    }
})

randomLetterThree.addEventListener('click', () => {
    let letterThreeValue = randomLetterThree.innerText
    if(goalWordArray.indexOf(letterThreeValue) !== -1 ) {
        document.getElementById('message-box').innerHTML = 'That was a correct letter!'
        for(i = 0; i <= goalWordArrayBlanks.length; i++) {
            if(goalWordArray[i] === letterThreeValue) {
                goalWordArrayBlanks.splice(i, 1, letterThreeValue)
                goalWordContainer.innerHTML = goalWordArrayBlanks.join(' ')
            }
        }
    }else {
        randomLetterThree.style.color = 'red'
        guessCount += 1
        document.getElementById('message-box').innerHTML = 'That was not a correct letter'
        if(guessCount === 1){
            helmet.style.display = 'block'
        }else if(guessCount === 2) {
            stickBody.style.display = 'block'
        }else if(guessCount === 3) {
            leftArm.style.display = 'block'
        }else if(guessCount === 4) {
            rightArm.style.display = 'block'
        }else if(guessCount === 5) {
            leftLeg.style.display = 'block'
        }else if(guessCount === 6) {
            rightLeg.style.display = 'block'
            document.getElementById('message-box').innerHTML = 'Oof, not this time. Maybe stop coding so much and go read a book'
        }
    }
})

randomLetterFour.addEventListener('click', () => {
    let letterFourValue = randomLetterFour.innerText
    if(goalWordArray.indexOf(letterFourValue) !== -1 ) {
        document.getElementById('message-box').innerHTML = 'That was a correct letter!'
        for(i = 0; i <= goalWordArrayBlanks.length; i++) {
            if(goalWordArray[i] === letterFourValue) {
                goalWordArrayBlanks.splice(i, 1, letterFourValue)
                goalWordContainer.innerHTML = goalWordArrayBlanks.join(' ')
            }
        }
    }else {
        randomLetterFour.style.color = 'red'
        guessCount += 1
        document.getElementById('message-box').innerHTML = 'That was not a correct letter'
        if(guessCount === 1){
            helmet.style.display = 'block'
        }else if(guessCount === 2) {
            stickBody.style.display = 'block'
        }else if(guessCount === 3) {
            leftArm.style.display = 'block'
        }else if(guessCount === 4) {
            rightArm.style.display = 'block'
        }else if(guessCount === 5) {
            leftLeg.style.display = 'block'
        }else if(guessCount === 6) {
            rightLeg.style.display = 'block'
            document.getElementById('message-box').innerHTML = 'Oof, not this time. Maybe stop coding so much and go read a book'
        }
    }
})

randomLetterFive.addEventListener('click', () => {
    let letterFiveValue = randomLetterFive.innerText
    if(goalWordArray.indexOf(letterFiveValue) !== -1 ) {
        document.getElementById('message-box').innerHTML = 'That was a correct letter!'
        for(i = 0; i <= goalWordArrayBlanks.length; i++) {
            if(goalWordArray[i] === letterFiveValue) {
                goalWordArrayBlanks.splice(i, 1, letterFiveValue)
                goalWordContainer.innerHTML = goalWordArrayBlanks.join(' ')
            }
        }
    }else {
        randomLetterFive.style.color = 'red'
        guessCount += 1
        document.getElementById('message-box').innerHTML = 'That was not a correct letter'
        if(guessCount === 1){
            helmet.style.display = 'block'
        }else if(guessCount === 2) {
            stickBody.style.display = 'block'
        }else if(guessCount === 3) {
            leftArm.style.display = 'block'
        }else if(guessCount === 4) {
            rightArm.style.display = 'block'
        }else if(guessCount === 5) {
            leftLeg.style.display = 'block'
        }else if(guessCount === 6) {
            rightLeg.style.display = 'block'
            document.getElementById('message-box').innerHTML = 'Oof, not this time. Maybe stop coding so much and go read a book'
        }
    }
})

randomLetterSix.addEventListener('click', () => {
    let letterSixValue = randomLetterSix.innerText
    if(goalWordArray.indexOf(letterSixValue) !== -1 ) {
        document.getElementById('message-box').innerHTML = 'That was a correct letter!'
        for(i = 0; i <= goalWordArrayBlanks.length; i++) {
            if(goalWordArray[i] === letterSixValue) {
                goalWordArrayBlanks.splice(i, 1, letterSixValue)
                goalWordContainer.innerHTML = goalWordArrayBlanks.join(' ')
            }
        }
    }else {
        randomLetterSix.style.color = 'red'
        guessCount += 1
        document.getElementById('message-box').innerHTML = 'That was not a correct letter'
        if(guessCount === 1){
            helmet.style.display = 'block'
        }else if(guessCount === 2) {
            stickBody.style.display = 'block'
        }else if(guessCount === 3) {
            leftArm.style.display = 'block'
        }else if(guessCount === 4) {
            rightArm.style.display = 'block'
        }else if(guessCount === 5) {
            leftLeg.style.display = 'block'
        }else if(guessCount === 6) {
            rightLeg.style.display = 'block'
            document.getElementById('message-box').innerHTML = 'Oof, not this time. Maybe stop coding so much and go read a book'
        }
    }
})

randomLetterSeven.addEventListener('click', () => {
    let letterSevenValue = randomLetterSeven.innerText
    if(goalWordArray.indexOf(letterSevenValue) !== -1 ) {
        document.getElementById('message-box').innerHTML = 'That was a correct letter!'
        for(i = 0; i <= goalWordArrayBlanks.length; i++) {
            if(goalWordArray[i] === letterSevenValue) {
                goalWordArrayBlanks.splice(i, 1, letterSevenValue)
                goalWordContainer.innerHTML = goalWordArrayBlanks.join(' ')
            }
        }
    }else {
        randomLetterSeven.style.color = 'red'
        guessCount += 1
        document.getElementById('message-box').innerHTML = 'That was not a correct letter'
        if(guessCount === 1){
            helmet.style.display = 'block'
        }else if(guessCount === 2) {
            stickBody.style.display = 'block'
        }else if(guessCount === 3) {
            leftArm.style.display = 'block'
        }else if(guessCount === 4) {
            rightArm.style.display = 'block'
        }else if(guessCount === 5) {
            leftLeg.style.display = 'block'
        }else if(guessCount === 6) {
            rightLeg.style.display = 'block'
            document.getElementById('message-box').innerHTML = 'Oof, not this time. Maybe stop coding so much and go read a book'
        }
    }
})

randomLetterEight.addEventListener('click', () => {
    let letterEightValue = randomLetterEight.innerText
    if(goalWordArray.indexOf(letterEightValue) !== -1 ) {
        document.getElementById('message-box').innerHTML = 'That was a correct letter!'
        for(i = 0; i <= goalWordArrayBlanks.length; i++) {
            if(goalWordArray[i] === letterEightValue) {
                goalWordArrayBlanks.splice(i, 1, letterEightValue)
                goalWordContainer.innerHTML = goalWordArrayBlanks.join(' ')
            }
        }
    }else {
        randomLetterEight.style.color = 'red'
        guessCount++
        document.getElementById('message-box').innerHTML = 'That was not a correct letter'
        if(guessCount === 1){
            helmet.style.display = 'block'
        }else if(guessCount === 2) {
            stickBody.style.display = 'block'
        }else if(guessCount === 3) {
            leftArm.style.display = 'block'
        }else if(guessCount === 4) {
            rightArm.style.display = 'block'
        }else if(guessCount === 5) {
            leftLeg.style.display = 'block'
        }else if(guessCount === 6) {
            rightLeg.style.display = 'block'
            document.getElementById('message-box').innerHTML = 'Oof, not this time. Maybe stop coding so much and go read a book'
        }
    }
})

randomLetterNine.addEventListener('click', () => {
    let letterNineValue = randomLetterNine.innerText
    if(goalWordArray.indexOf(letterNineValue) !== -1 ) {
        document.getElementById('message-box').innerHTML = 'That was a correct letter!'
        for(i = 0; i <= goalWordArrayBlanks.length; i++) {
            if(goalWordArray[i] === letterNineValue) {
                goalWordArrayBlanks.splice(i, 1, letterNineValue)
                goalWordContainer.innerHTML = goalWordArrayBlanks.join(' ')
            }
        }
    }else {
        randomLetterNine.style.color = 'red'
        guessCount++
        document.getElementById('message-box').innerHTML = 'That was not a correct letter'
        if(guessCount === 1){
            helmet.style.display = 'block'
        }else if(guessCount === 2) {
            stickBody.style.display = 'block'
        }else if(guessCount === 3) {
            leftArm.style.display = 'block'
        }else if(guessCount === 4) {
            rightArm.style.display = 'block'
        }else if(guessCount === 5) {
            leftLeg.style.display = 'block'
        }else if(guessCount === 6) {
            rightLeg.style.display = 'block'
            document.getElementById('message-box').innerHTML = 'Oof, not this time. Maybe stop coding so much and go read a book'
        }
    }
})

randomLetterTen.addEventListener('click', () => {
    let letterTenValue = randomLetterTen.innerText
    if(goalWordArray.indexOf(letterTenValue) !== -1 ) {
        document.getElementById('message-box').innerHTML = 'That was a correct letter!'
        for(i = 0; i <= goalWordArrayBlanks.length; i++) {
            if(goalWordArray[i] === letterTenValue) {
                goalWordArrayBlanks.splice(i, 1, letterTenValue)
                goalWordContainer.innerHTML = goalWordArrayBlanks.join(' ')
            }
        }
    }else {
        randomLetterTen.style.color = 'red'
        guessCount++
        document.getElementById('message-box').innerHTML = 'That was not a correct letter'
        if(guessCount === 1){
            helmet.style.display = 'block'
        }else if(guessCount === 2) {
            stickBody.style.display = 'block'
        }else if(guessCount === 3) {
            leftArm.style.display = 'block'
        }else if(guessCount === 4) {
            rightArm.style.display = 'block'
        }else if(guessCount === 5) {
            leftLeg.style.display = 'block'
        }else if(guessCount === 6) {
            rightLeg.style.display = 'block'
            document.getElementById('message-box').innerHTML = 'Oof, not this time. Maybe stop coding so much and go read a book'
        }
    }
})

checkAnswerButton.addEventListener('click', () => {
    let checkGoalWordArray = goalWordArray.toString()
    let checkGoalWordArrayBlanks = goalWordArrayBlanks.toString()
    if(guessCount < 7 && checkGoalWordArray === checkGoalWordArrayBlanks) {
        document.getElementById('message-box').innerHTML = 'You found the goal word! You Win!!!'
    }else if(guessCount >= 7 || checkGoalWordArray !== checkGoalWordArrayBlanks){
        document.getElementById('message-box').innerHTML = 'Oof, not this time. Maybe stop coding so much and go read a book'
    }
})



console.log(guessCount)








