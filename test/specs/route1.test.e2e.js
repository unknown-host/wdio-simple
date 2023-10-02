const { expect } = require('@wdio/globals')
const HomePage = require('../pageobjects/home.page')

describe('Test case 2.  on github.com', () => {
    it('should demonstrate some routing on github.com', async () => {
        const homePage = new HomePage()
        await homePage.open()

        const h2 = $('h2*=The place for anyone')
        await h2.scrollInToView()
        expect(h2).toBeDisplayed()


    })
})

