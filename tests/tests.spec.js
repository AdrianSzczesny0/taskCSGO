import { Browser, BrowserContext, Page, chromium, expect, test} from '@playwright/test';
import { HomePage } from '../pom/HomePage';


test.describe('CSGO online casino suit',async () => {

    // /**
    //  * @type {import('@playwright/test').Page}
    //  */
    // let page;
    // let browser;
    // let context;
    // /**
    //  * @type {HomePage}
    //  */
    // let homePage;

    // test.beforeAll(async () => {
    //     browser = await chromium.launch();
    //     context = await browser.newContext();
    //     page = await context.newPage();
    //     homePage = new HomePage(page);
    // });
  
    //   test('TC #1 - Verify roulette is displayed', async () => { 
    //     await homePage.goto("https://csgoempire.com/roulette");
    //     await homePage.waitUntillRulletVisible();
    //   });


    //   test('TC #2 - Verify roulette time starts after roll', async () => { 
    //     await homePage.waitForTimerToBe0();
    //     await homePage.waitForTimerToAppear();
    //   });

    //   test('TC #8 - Verify Different Bet amount buttons set proper bet amount ', async () => { 
        
    //     let betAmount;
    //     await homePage.clickBet001();
    //     betAmount = (await homePage.getBetAmount());
    //     expect(Number(betAmount)).toBe(0.01);
    //     await homePage.clickBet01();
    //     betAmount = (await homePage.getBetAmount());
    //     expect(Number(betAmount)).toBe(0.11);
    //     await homePage.clickBet1();
    //     betAmount = (await homePage.getBetAmount());
    //     expect(Number(betAmount)).toBe(1.11);
    //     await homePage.clickBet10();
    //     betAmount = (await homePage.getBetAmount());
    //     expect(Number(betAmount)).toBe(11.11);
    //     await homePage.clickBet100();
    //     betAmount = (await homePage.getBetAmount());
    //     expect(Number(betAmount)).toBe(111.11);
    //     await homePage.clickBetHalf();
    //     betAmount = (await homePage.getBetAmount());
    //     expect(Number(betAmount)).toBe(55.56);
    //     await homePage.clickBet2Times();
    //     betAmount = (await homePage.getBetAmount());
    //     expect(Number(betAmount)).toBe(111.12);
    //   });

      test('TC #25 - Verify when non logged in user try to place bet Login Modal is displayed; ', async () => { 

        test = "string";
        console.log(isPalindrom(tets));

        // await homePage.waitForTimerToAppear();
        // await homePage.verifyLoginModalDisplayed();
      });

});
function isPalindrom(value){
  array = value.split('');
  for (let i = 0; i < array.length-1; i++) {
    console.log(array[i]);
  }
}


