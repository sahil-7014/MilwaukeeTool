 describe(' Mouse Action Demonstration in Protractor ', function() {
        browser.ignoreSynchronization = true; 
        browser.manage().window().maximize()
        it(' Test to handle mouse move and hover operations in Protractor', function() {
            browser.manage().timeouts().implicitlyWait(15000);
     
            browser.get('https://onekeystaging.milwaukeetool.com/app/#/alerts')
           // var move = element(by.id('toolBoxSpanSiteNavDrawer')).click();

            browser.actions().mouseMove(element(by.id('toolBoxSpanSiteNavDrawer'))).perform()
        });
    });