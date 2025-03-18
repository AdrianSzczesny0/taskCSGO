
class HomePage {
    constructor(page) {
        /**
         * @type {import('@playwright/test').Page}
         */
        this.page = page;
        this.wheelContainter = '[data-testid="wheel-container"]';
        this.countdownTimer = '[data-testid="countdown-time"]';
        this.t_icon = '.coin-t';
        this.ct_icon = '.coin-ct';
        this.bonus_icon = '.coin-bonus';
        this.previousRolls = '.previous-rolls-item';
        this.betAmountInput = '[data-testid="roulette-bet-input"] input';
        this.betButtons = '[data-testid="roulette-bet-input"] button';
        this.placeBetCTButton = '[data-testid="bet-button-ct"]';
    }


    async goto(value) {
        await this.page.goto(value);
    }

    async waitUntillRulletVisible(){
        await this.page.locator(this.wheelContainter).waitFor({state:"visible"});
    }

    async checkIfRolling(){
        await this.page.waitForTimeout(5000);
    }

    async getCurrentRollTime(){
        const rollTime = await this.page.locator(this.countdownTimer).textContent();
        return Number(rollTime);
    }

    async waitForTimerToAppear(){
        for (let i = 0; i < 10; i++) {
            const currentRollTime = Math.floor(await this.getCurrentRollTime());
            if(currentRollTime  == 0){
                await this.page.waitForTimeout(1000);
            }else{
                return currentRollTime;
            }
        }
    }

    async waitForTimerToBe0(){
        for (let i = 0; i < 10; i++) {
            const currentRollTime = Math.floor(await this.getCurrentRollTime());
            if(currentRollTime  == 0){
                return currentRollTime;
            }else{
                await this.page.waitForTimeout(1000);
            }
        }
    }


    async getLast100Rolls(){
        return {
            ctRolls: await this.page.getByText('last 100').locator('..').locator('div').nth(2).textContent(),
            bonusRolls: await this.page.getByText('last 100').locator('..').locator('div').nth(4).textContent(),
            tRolls: await this.page.getByText('last 100').locator('..').locator('div').nth(6).textContent()
        }
    }


    async getBetAmount(){
        return await this.page.locator(this.betAmountInput).getAttribute('value');
    }

    async clickBet001(){
        await this.page.locator(this.betButtons).nth(2).click();
    }

    async clickBet01(){
        await this.page.locator(this.betButtons).nth(3).click();
    }

    async clickBet1(){
        await this.page.locator(this.betButtons).nth(4).click();
    }

    async clickBet10(){
        await this.page.locator(this.betButtons).nth(5).click();
    }

    async clickBet100(){
        await this.page.locator(this.betButtons).nth(6).click();
    }

    async clickBetHalf(){
        await this.page.locator(this.betButtons).nth(7).click();
    }

    async clickBet2Times(){
        await this.page.locator(this.betButtons).nth(8).click();
    }

    async placeBetOnCT(){
        await this.page.locator(this.placeBetCTButton).click();
    }

    async verifyLoginModalDisplayed(){
        await this.page.locator('[data-testid="modal-close-button"]').isVisible();
        await this.page.locator('button[type="submit"]')
    }
}

module.exports = { HomePage };