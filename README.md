
# Test Cases



**Framwork:**

I have chosen Playwright framwork:
  - as it works directly with TS and JS
  - enables for a quick test mock up using the test ui runner 
        ( very handy for a very quick test to have at least some coverage that can be refactored to POM )
  - fast, a lot of features out of the box
  - does a lot of checks under the hood on actions like click etc. ( waits for visib, clickable etc -  selenium could learn from this )
  - able to run parallel on different browsers and mobile browser vieport
  - For the sake of those tests here i have disabled parallel and multiple browsers


**Running tests:**

To Run the tests use terminal with command : npx playwright test

**Personal Note:**
If candidate had option to login with to some test env with founds better test cases could be automated.
Sadly those selected and maybe few others ponentialy could be automated for the game.


**Selected TC:**
  - TC #1 - Verify roulette is displayed
  - TC #2 - Verify roulette time starts after roll
  - TC #8 - Verify Different Bet amount buttons set proper bet amount 
  - TC #25 - Verify when non logged in user try to place bet Login Modal is displayed;



**All Test Case:**

- TC #1 - Verify roulette is displayed
- TC #2 - Verify roulette time starts after roll
- TC #3 - Verify roulette does a roll after timer ends with result
- TC #4 - Verify previous rolls are properly updated
- TC #5 - Verify last 100 rolls have total of 100 rolls
- TC #6 - Verify last 100 rolls is properly updated after roll

- TC #7 - Verify place bet with input set different combinations
        this would be run as 1 test case but multiple times with different test data set for the input. 
        ( cant say right now what will happen if player tries the negative scenarios -  would need account with balance )
        TestData:
            01  - cant bet
            1+1 - cant bet >> this can be done by manipulating value attribute or pasting value in
            -1  - cant bet >> this can be done by manipulating value attribute or pasting value in
            1-1 - cant bet >> this can be done by manipulating value attribute or pasting value in
            -1
            0.1 - can bet
            1   - can bet
            0.01- can bet

- TC #8 - Verify Different Bet amount buttons set proper bet amount 
  - Verify player can set bet to +0.1 using the predefined button 0.1
  - Verify player can set bet to +1 using the predefined button 1
  - Verify player can set bet to +10 using the predefined button 10
  - Verify player can set bet to 1/2 using the predefined button 1/2
  - Verify player can set bet to x2 using the predefined button 2
  - Verify player can set bet to MAX using the predefined button MAX


- TC #9 - Verify player cant place bet when bet amount is 0
- TC #10 - Verify player can place bet when bet amount is higher then 0.01
- TC #11 - Verify player cant input value higher then current user balance ( dont know if the FE blocks the input value ( caps on user max ) /  or disables place pet )
- TC #12 - Verify player cant place bet when roulette is spinning
- TC #13 - Verify player can place bet when the timmer is visible
- TC #14 - Verify after placing bet player balance decreases by the amount player bet
- TC #15 - Verify after win x2 player balance gets increased by the amount player bet
- TC #16 - Verify after win x14 player balance gets increased by the amount player bet x14

- TC #17 - Verify CT placed bet section is updated when Player places bet on CT
  - go to casino
  - place bet on CT
  - check player nick and icon is visible in CT section 
  - check player bet amount amount is properly visible in player row
  - check amount of bets increased by 1 for CT
  - check cash amount placed on CT increased by amount set by player

- TC #18 - Verify T placed bet section is updated when Player places bet on CT
- TC #19 - Verify BONUS placed bet section is updated when Player places bet on BONUS

- TC #20 - Verify when Rolling starts all place bet sections are cleared.
- TC #21 - Verify player cant place 2 bet when current bet hasnt finished processing yet.
- TC #26 - Verify player is able to clear Bet amount input

**Additional TC:**
- TC #22 - Verify BONUS-COIN win shows + on all players under the BONUS-COIN placed bets
- TC #23 - Verify T-COIN win shows + on all players under the T-COIN placed bets
- TC #24 - Verify CT-COIN win shows + on all players under the CT-COIN placed bets
- TC #25 - Verify when non logged in user try to place bet Login Modal is displayed;

**Core MVP -  Minimal viable product:**
  - TC #1 - Verify roulette is displayed
  - TC #2 - Verify roulette time starts after roll
  - TC #3 - Verify roulette does a roll after timer ends with result
  - TC #4 - Verify previous rolls are properly updated
  - TC #9 - Verify player cant place bet when bet amount is 0
  - TC #10 - Verify player can place bet when bet amount is higher then 0.01
  - TC #11 - Verify player cant input value higher then current user balance ( dont know if the FE blocks the input value ( caps on user max ) /  or disables place pet )
  - TC #12 - Verify player cant place bet when roulette is spinning
  - TC #13 - Verify player can place bet when the timmer is visible
  - TC #14 - Verify after placing bet player balance decreases by the amount player bet
  - TC #15 - Verify after win x2 player balance gets increased by the amount player bet
  - TC #16 - Verify after win x14 player balance gets increased by the amount player bet x14



**From user persective:**
  - TC #1 - Verify roulette is displayed
  - TC #2 - Verify roulette time starts after roll
  - TC #3 - Verify roulette does a roll after timer ends with result
  - TC #4 - Verify previous rolls are properly updated
  - TC #5 - Verify last 100 rolls have total of 100 rolls
  - TC #6 - Verify last 100 rolls is properly updated after roll
  - TC #8 - Verify Different Bet amount buttons set proper bet amount 
  - TC #9 - Verify player cant place bet when bet amount is 0
  - TC #10 - Verify player can place bet when bet amount is higher then 0.01
  - TC #11 - Verify player cant input value higher then current user balance ( dont know if the FE blocks the input value ( caps on user max ) /  or disables place pet )
  - TC #12 - Verify player cant place bet when roulette is spinning
  - TC #13 - Verify player can place bet when the timmer is visible
  - TC #14 - Verify after placing bet player balance decreases by the amount player bet
  - TC #15 - Verify after win x2 player balance gets increased by the amount player bet
  - TC #16 - Verify after win x14 player balance gets increased by the amount player bet x14

  - TC #17 - Verify CT placed bet section is updated when Player places bet on CT
  - TC #18 - Verify T placed bet section is updated when Player places bet on CT
  - TC #19 - Verify BONUS placed bet section is updated when Player places bet on BONUS

  - TC #20 - Verify when Rolling starts all place bet sections are cleared.
  - TC #21 - Verify player cant place 2 bet when current bet hasnt finished processing yet.

**Additional UI check for BET SECTION :**
  - TC #22 - Verify BONUS-COIN win shows + on all players under the BONUS-COIN placed bets
  - TC #23 - Verify T-COIN win shows + on all players under the T-COIN placed bets
  - TC #24 - Verify CT-COIN win shows + on all players under the CT-COIN placed bets
  - TC #26 - Verify player is able to clear Bet amount input

From company perspective to be saure There are no loopholes from user perspective, where he could laverage a bug to hes adventage
    - All above + TC #5 - Verify place bet with input set different combinations

**Test cases that are most suited to autoamte:**
  - all the test cases are suited to automate.
  - The most problematic ones are all TC that will have to wait for the full roll cycle. it will take longer time to execute such TC.
  - Addionally The only way currently for me to check whenever given game won is to:
      - after rolled game check which Placed bet section changed to positive 
      - after rolled game check previous won bet icon and compare it with the placed bet section change.
      - according to that result i can check balance if properly increased or decreased.
