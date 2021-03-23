let homepage = require('../Pages/homepage');

describe('demo calculator class', function () {

    it('addition test', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        // homepage.get('http://juliemr.github.io/protractor-demo/');

        // element(by.model('first')).sendKeys('2'); 
        homepage.enterFirstNumber('10');

        // element(by.model('second')).sendKeys('3');   
        homepage.enterSecondNumber('5');

        // element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        // let result = element(by.cssContainingText('.ng-binding', '5'));
        //expect(result.getText()).toEqual('5');
        homepage.verifyResult('15');

        browser.sleep(2000)

    })

    // it('subtraction test', function () {

    //     browser.get('http://juliemr.github.io/protractor-demo/');
    //     // homepage.get('http://juliemr.github.io/protractor-demo/');

    //     // element(by.model('first')).sendKeys('2'); 
    //     homepage.enterFirstNumber('10');

    //     // element(by.model('second')).sendKeys('3');   
    //     homepage.enterSecondNumber('5');

    //     // element(by.css('[ng-click="doAddition()"]')).click();
    //     homepage.clickGo();

    //     // let result = element(by.cssContainingText('.ng-binding', '5'));
    //     //expect(result.getText()).toEqual('5');
    //     homepage.verifyResult('115');

    //     browser.sleep(2000)

    // })

});