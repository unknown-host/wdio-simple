const { expect } = require('@wdio/globals')
const HomePage = require('../pageobjects/home.page')

describe('Case 1.', () => {
    it('should demonstrate sign-up order', async () => {
        const continueButtonConstructor = (formField) => {
            const formFields = {
                email: 'email', 
                password: 'password',
                login: 'username',
                confirm: 'opt-in'
            }
            return `[data-optimizely-event="click.signup_continue.${formFields[formField]}"]`
        }
        
        //const findContinueButton = (formField) => {
          //  const continueButtonSelector = attrConstructor(formField)
            //await browser.waitUntil(async () => {
              //  const button = await $(continueButtonSelector);
        //    return button.isClickable()
           // }, { timeout: 10000, timeoutMsg: 'Continue button is not clickable' })
            //await $(continueButtonSelector).click()
        //}
        
        const homePage = new HomePage()
        await homePage.open()
        const signupButton = await $('a*=Sign up')
        await signupButton.click()

        expect($('span*=Welcome to GitHub!')).toBeDisplayed()
        
        const emailInput = await $('#email')
        await emailInput.isEnabled()
        await emailInput.waitForDisplayed()
        await emailInput.setValue('your@username.com') 
        let continueButtonSelector = continueButtonConstructor('email')
        await browser.waitUntil(async () => {
            const button = await $(continueButtonSelector);
            return button.isClickable();
        }, { timeout: 10000, timeoutMsg: 'Continue button is not clickable' });
        await $(continueButtonSelector).click();

        const passwordInput = await $('#password')
        await passwordInput.waitForDisplayed()
        await passwordInput.setValue('yourpasswOrd23453425')
        continueButtonSelector = continueButtonConstructor('password')  
        await browser.waitUntil(async () => {
            const button = await $(continueButtonSelector);
                return button.isClickable()
        }, { timeout: 10000, timeoutMsg: 'Continue button is not clickable' })
        await $(continueButtonSelector).click()

        const usernameInput = await $('#login')
        await usernameInput.waitForDisplayed()
        await usernameInput.setValue('yourkehjrhghergjherhger')
        continueButtonSelector = continueButtonConstructor('login')  
        await browser.waitUntil(async () => {
            const button = await $(continueButtonSelector);
                return button.isClickable()
        }, { timeout: 10000, timeoutMsg: 'Continue button is not clickable' })
        await $(continueButtonSelector).click()

        const confirmInput = await $('#opt_in')
        await confirmInput.waitForDisplayed()
        await confirmInput.setValue('y')
        continueButtonSelector = continueButtonConstructor('confirm')  
        await browser.waitUntil(async () => {
            const button = await $(continueButtonSelector);
                return button.isClickable()
        }, { timeout: 10000, timeoutMsg: 'Continue button is not clickable' })
        await $(continueButtonSelector).click()

        expect($('#div*=Verify your account')).toBeDisplayed()
    })
})
