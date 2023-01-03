Game Title: Spaceman Sam


Description: For the Spaceman Sam game, you goal is to correcly guess the letters for the bank of letters that will help fill in the blank spaces below sam and the spaceship. You have 10 guess to find the word and correct guess doe not count towards your remaining guesses. 

Technologies Used: JavaScript, HTML, CSS

Wireframe: ![Wireframe!]("C:\Users\Quentin\OneDrive\Pictures\Screenshots\Spaceman-Sam-Wireframe.png")


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
5. As a user, I want a random 5-10 letter word(aka goal word) to be generated when I click 'play'
    1. Create a unordered list with 50 different goal words
    2. Randomly select one of the words and have it assigned to a variable of currentGoalWord
    3. Count the number of letters in the goal word and create corrisponding "_____"s for each letter
8. As a user, I want to be able to click a letter from the letter bank 
    1. Create a button for each random letter
    2. Add an event listener each button that compares the letter value to the letter values in the currentGoalWord
9. As a user, I want to see the letter appear on the ______ lines if the letter is in the goal word
    1. Create an if statement that add the letter to the corresponding "_____" if the letter value equals a letter value in the currentGoalWord
    2. If the letter value is not equal to a letter value in the currentGoalWord, the letter will remain in the letterBank and have its color changed to red
10. As a user, I want to recieve a 'wrong letter message' when clicking a letter that is not in the goal word
    1. Creates a div with an ID of messageBox, that displays a "Wrong Letter Message" whenever the letter value does not equal a letter value in the currentGoalWord
11. As a user, I want part of a spaceship to appear above the spaceman when clicking a letter that is not in the goal word
    1. Create a div with an ID of spaceship that displays a spaceship sprite in the center of the screen
12. As a user, I want a lose condition to trigger if the goal word is not filled out after clicking 11 letters from the word bank
    1. Create a variable, guessCount, and add an event listener that add to its value whenever a letter with a value that isn't in the currentGoalWord is clicked
    2. Create a while loop that displays a "Game Over" message in the messageBox when the value of guessCount queals 11
13. As a user, I want a win confition to trigger if the goal word is filled out before clicking 11 letters from the word bank
    1. Create an if loop that displays the message "You Win!" in the messageBox if all letter values from the currentGoalWord have been selected and the guessCount value is less than 11
14. As a user, I want to reset the bank of letters when 'play again' is clicked
    1. Create a button with an ID of playAgainButton
    2. Add an event listener that clears all divs and selects a new value for the currentGoalWord
    3. Selects new random letters and populates them in the letterBank

V1:
16. As a user, I want to be able to upload a file as the spaceman sprite
    1. Create an input box on the starting page
    2. Have the input type of input box
    3. Have the input line add a new URL that changes the sprite of Spaceman Sam
17. As a user, I want to be able to change the text color of the goal word and letters in the bank of letters
    1. Create a div with an ID of colorPalette
    2. Have an unorder list of different color options
    3. Create a button for each item of the ordered list that corresponds to a color
    4. Create an event listener for each button that changes the color text of the currentGoalWord to whatever color button is selected
18. As a user, I want to be able to click the 'hint' button
    1. Create a button with an ID of hintButton
    2. Add an event listener that changes 3 letters, 2 random letters with a letter value not equal to a letter value in the currentGoalWord and 1 letter that does have a letter value equal to a letter vale in the currentGoalWord, to yellow

V2:
21. As a user, i want to be able to change the background color of the game board
    1. Add a div with the ID of backgroundColor
    2. Add an unorder list of different color options
    3. Make each unordered list item a button
    4. Add an event listener to each button that changes the background color of the play screen when clicked
23. As a user, I want to be able to see how many games I have won
    1. Add a div with an ID of wins
    2. Create a variable, totalWins, that keeps track of how many times that if-win condition is triggered.
    3. Inserts the value of totalWins into the wins div
24. As a user, I want to be able to see how many games I have lost
    1. Add a div with an ID of losses
    2. Create a variable, totalLosses, that keeps track of how many times that if-win condition is not triggered.
    3. Inserts the value of totalLosses into the losses div
