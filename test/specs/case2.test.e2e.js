const { expect } = require('@wdio/globals')
const HomePage = require('../pageobjects/home.page')

describe('Case 2.', () => {
    it('should demonstrate some routing on github.com', async () => {
        const homePage = new HomePage()
        await homePage.open()

        const h2 = await $('h2*=The place for anyone')
        await h2.scrollIntoView()
        expect(h2).toBeDisplayed()


    })
})

