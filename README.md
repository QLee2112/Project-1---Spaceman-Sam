Game Title: Spaceman Sam


Description: For the Spaceman Sam game, your goal is to correcly guess the letters from the bank of letters that will help fill in the blank spaces below sam and the spaceship. You have 10 guess to find the word and correct guesses do not count towards your remaining guesses. 

Technologies Used: JavaScript, HTML, CSS

![Home Page](/Imgs/Spaceman_Home_Page.png)

![Starting Game Screen](/Imgs/Spaceman_Game_Screen_Start.png)

![Ending Game Screen](/Imgs/Spaceman_Game_Screen_End.png)

Getting Started:

Clikc the link <a href = https://qlee2112.github.io/Project-1---Spaceman-Sam target='_blank'>here</a> to play
Upon arriving at the home page, press play game to start.
After clicking the play button, you need to guess from the letter bank to find the correct letters.
When you have selected all the correct letters, click the check answer button to see if you got the correct word.

Next :Steps

V1:
1. As a user, I want to be able to upload a file as the spaceman sprite
2. As a user, I want to be able to change the text color of the goal word and letters in the bank of letters
3. As a user, I want to be able to click the 'hint' button

V2:
1. As a user, i want to be able to change the background color of the game board
2. As a user, I want to be able to see how many games I have won
3. As a user, I want to be able to see how many games I have lost

Psuedo Code:
MVP:
1. As a user, I want to be able to click the 'play' button
    1. Create a div with an ID of playButton
    2. Add an event listener to the play button that clears the buttons from the screen loads the next page
2. As a user, I want the game to start when play is clicked
    1. Create a div with an ID of letterBank
    2. Create a div with an ID of spaceMan
    3. Create a div with an ID of goalWord
    4. Create a button with an ID of hintButton
    5. Create a button with an ID of playAgainButton
3. As a user, I want a random bank of letters to generate when 'play' is clicked
    1. Show a box with height X and width X
    2. Fill the box with letters from the goal word variable and random other letters
    3. The total number of letters is 25 letters
4. As a user, I want a random 5-10 letter word(aka goal word) to be generated when I click 'play'
    1. Create a unordered list with 50 different goal words
    2. Randomly select one of the words and have it assigned to a variable of currentGoalWord
    3. Count the number of letters in the goal word and create corresponding "_____"s for each letter
5. As a user, I want to be able to click a letter from the letter bank 
    1. Create a button for each random letter
    2. Add an event listener each button that compares the letter value to the letter values in the currentGoalWord
6. As a user, I want to see the letter appear on the "______" lines if the letter is in the goal word
    1. Create an if statement that add the letter to the corresponding "_____" if the letter value equals a letter value in the currentGoalWord
    2. If the letter value is not equal to a letter value in the currentGoalWord, the letter will remain in the letterBank and have its color changed to red
7. As a user, I want to recieve a 'wrong letter message' when clicking a letter that is not in the goal word
    1. Creates a div with an ID of messageBox, that displays a "Wrong Letter Message" whenever the letter value does not equal a letter value in the currentGoalWord
8. As a user, I want part of a spaceship to appear above the spaceman when clicking a letter that is not in the goal word
    1. Create a div with an ID of spaceship that displays a spaceship sprite in the center of the screen
9. As a user, I want a lose condition to trigger if the goal word is not filled out after clicking 11 letters from the word bank
    1. Create a variable, guessCount, and add an event listener that add to its value whenever a letter with a value that isn't in the currentGoalWord is clicked
    2. Create a while loop that displays a "Game Over" message in the messageBox when the value of guessCount equals 11
10. As a user, I want a win confition to trigger if the goal word is filled out before clicking 11 letters from the word bank
    1. Create an if loop that displays the message "You Win!" in the messageBox if all letter values from the currentGoalWord have been selected and the guessCount value is less than 11
11. As a user, I want to reset the bank of letters when 'play again' is clicked
    1. Create a button with an ID of playAgainButton
    2. Add an event listener that clears all divs and selects a new value for the currentGoalWord
    3. Selects new random letters and populates them in the letterBank
