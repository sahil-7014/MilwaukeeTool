describe('Launch App', function () {
    it('Launch', function () {

        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        //  browser.manage().timeouts().implicitlyWait(4000) ;
        //  WebDriverWait wait=new WebDriverWait(browser, 20);

        browser.get('https://onekeystaging.milwaukeetool.com/');
        browser.manage().timeouts().implicitlyWait(30000)

        element(by.xpath('//a[@title=\'Launch App\']')).click();
        browser.manage().timeouts().implicitlyWait(30000)
    });

    // it('Sign Up', function () {
    //     element(by.partialLinkText('Sign Up')).click();
    //     browser.sleep(5000);

    //     element(by.xpath('//input[@type=\'email\' and @class=\'auth0-lock-input\']')).sendKeys('Demotest2@mailinator.com');
    //     element(by.xpath('//input[@type=\'password\' and @class=\'auth0-lock-input\']')).sendKeys('Test@123');

    //     browser.sleep(5000);

    //     element(by.xpath('//span[@class=\'auth0-label-submit\']')).click();
    //     browser.sleep(10000);
    // });

    it('Log In', function () {

        // element(by.partialLinkText('Log In')).click();
        // browser.sleep(5000);

        var Email = element(by.xpath('//input[@name=\'email\']'))
        Email.sendKeys('Demotest2@mailinator.com')
        var Password = element(by.xpath('//input[@name=\'password\']'))
        Password.sendKeys('Test@123');
        var Login = element(by.xpath('//span[@class=\'auth0-label-submit\']'))
        Login.click();
        
    });

    xit('cancel', function(){

        element(by.xpath('//span[@id=\'closeSpanSupportMessageDialog\']')).click();
        browser.manage().timeouts().implicitlyWait(30000)
        
    })

    it('Add Items', function(){

        element(by.xpath('//a[@id="addItemButtonInventory"]')).click();
        browser.manage().timeouts().implicitlyWait(30000)
    
    })

    it('Get Started', function(){
        
        element(by.id('addNewItemButtonAddItem')).click();
        browser.manage().timeouts().implicitlyWait(30000)

    })

    it('Search item', function(){

        element(by.id('searchMilwaukeeToolInputAddNew')).sendKeys('2465-20');
        element(by.id('searchMilwaukeeToolButtonAddNew')).click();
        browser.sleep(5000)

        browser.manage().timeouts().implicitlyWait(30000)
        
        // var EC = protractor.ExpectedConditions;
        // var button = element(by.xpath('//button[@id=\'addToolButtonAddNew\']'));

        // browser.wait(EC.visibilityOf(button), 5000);
        // button.click();
        
        // browser.sleep(5000)

        element(by.xpath('//button[@id=\'addToolButtonAddNew\']')).click();
        browser.manage().timeouts().implicitlyWait(30000)

    })

    it('Save item', function(){

        element(by.xpath('//button[@id=\'saveButtonAddNewItem\']')).click();
        browser.manage().timeouts().implicitlyWait(30000);

        element(by.xpath('//tbody[@role]')).click();
        browser.sleep(5000);

        //browser.manage().timeouts().implicitlyWait(30000);

        element(by.id('ellipsisMdcIconInventory')).click();
        browser.manage().timeouts().implicitlyWait(30000);

        element(by.id('deleteButtonInventory')).click()
        element(by.id('deleteButtonDeleteItem')).click()
        browser.manage().timeouts().implicitlyWait(30000);

        browser.actions().mouseMove(element(by.id('toolBoxSpanSiteNavDrawer'))).perform()
        browser.sleep(10000);

        element(by.id('commonlyUsedPanelTitleFilters')).click();
        element(by.id('titleMatPanelTitleFilterCollection')).click();
        
        
    })
});