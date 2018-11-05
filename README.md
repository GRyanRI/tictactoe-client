[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

Thank you for coming to play Tic-Tac-Toe!

This is my first project in my web development course. It was a huge challenge, but I really enjoyed the process. Listed below are the goals I was able to achieve when working on this site:

Game Engine

1. [x] Create Empty Board in JS
2. [x] Create Current Player
3. [x] Add Current Player to Board
    * [x] Current Player rotates between x and o
    * [x] Can not choose already occupied spots
4. [x] Check Board for Winner
5. [x] Design a game board
6. [x] Add a click handler for when a space on the game board is clicked
7. [x] If the user clicks on a valid space then add their X or O
8. [x] Do not allow users to add an X or O to an invalid space
9. [x] Add messaging for the user when the user clicks on an invalid space
10. [x] Add messaging for the user when the game is over (win or draw).
11. [x] Do not allow users to add an X or O to any spaces after the game is over

Things I struggled with:

Authentication

1.  Review api-token-auth
2. [] Sign Up (curl then web app)
3. [] Sign In (curl then web app)
4. [] Change Password (curl then web app)
5. [] Sign Out (curl then web page)
6. [] All API calls have success or failure messages
7. [] Review query-ajax-post
8. [] Create Game, start new game (curl then web app)
9. [] Update Game, play the game (curl then web app)
10. [] Get Games (curl then web app)

Ideally I would have liked to add some more personal touches, and I will as I become more proficient with this type of code.

My original Game Scope:

Data Structure

User
* User Profile (possible profile photo?)
    * General info section
* Email (for login)
* Password (for login)
* Wins/loss record
    * Number of wins
    * Number of losses
    * Win percentage
* Ranking
    * Daily, All-time

Game
* Player 1 info
* Player 2 info
* Player moves
    * “x” or “o” selects space
        * If space is occupied = error message
        * If space is unoccupied = apply letter to square
        * Is there 3 in a row?
        * Are there anymore spaces to place x’s or o’s?
* Is the game over?
    * If yes, Congratulate winner.
    * If no, signal opposing player “Your turn"
* Log Win/Loss info

Plan
* MAKE IT WORK!
    * HTML
    * JS
* Add personal css styling.
*  Test, Test, Test.
* Dry-out code.

User Stories
* As a player, my goal is to win the game, so that I can improve my ranking.
* As a player, I have to choice to what space to select, with the goal of getting 3 in a row
* As a player, I want to be congratulated when I am victorious, so I feel good
* As a game, I want to be visually appealing and engaging, encouraging return players
* As a game, I want to keep accurate records, so my users can know how they compare to other users.

Board

The game board will need a theme. It will require an appealing background, and stylish X’s & O’s. Preferably, some type of action or sound will occur when a user makes their move. The board itself will include an array of elements (squares).  When a player clicks a square), if the square is available, it will fill it with a value of “x" or “o”. If unavailable, it will return a “Try Again” message.

Code Modular
HTML, JS, CSS

Creative Spin
* Theme - Possibly Football related due to the X’s and O's
* Select your favorite NFL team option
* Possible Quarterback throwing footballs at the squares to mark them

Version Control
Going to split git into branches, and commit often, so I don’t get tripped up.

Additional features
Possible prizes or awards for streaks

My Wireframe:

https://imgur.com/d6R8TrI
