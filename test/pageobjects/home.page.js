const Page = require ('./page')
//const {home} = require ('./../../config')

module.exports = class HomePage extends Page {
    open(){
        return super.open('')
    }
}   



