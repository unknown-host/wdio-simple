const { $ } = require('@wdio/globals')
const Page = require('./page');
const { login } = require('.,/../config')
/**
 * sub page containing specific selectors and methods for a specific page
 */

modle.exports = class SignUpPage extends Page {
    open () {
        return super.open(login);
    }
}

