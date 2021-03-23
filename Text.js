describe('getting the text', function () {
    it('Log In', function () {

        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);

        browser.get('https://onekeystaging.milwaukeetool.com/');

        element(by.xpath('//a[@title=\'Launch App\']')).click();
        browser.manage().timeouts().implicitlyWait(15000)

        var Email = element(by.xpath('//input[@name=\'email\']'))
        Email.sendKeys('Demotest2@mailinator.com')
        var Password = element(by.xpath('//input[@name=\'password\']'))
        Password.sendKeys('Test@123');
        var Login = element(by.xpath('//span[@class=\'auth0-label-submit\']'))
        Login.click();
        browser.manage().timeouts().implicitlyWait(20000)

        element(by.id('reportsSpanSiteNavDrawer')).click();
        browser.manage().timeouts().implicitlyWait(15000)
        element(by.id('torqueReportsSpanSiteNavDrawer')).click();
        browser.actions().click(element(by.id('reportSummarySpanTorqueWrench'))).perform()
        browser.manage().timeouts().implicitlyWait(15000)
        element(by.id('toolDataDivTorqueWrenchSelect')).click();
        element(by.xpath("//span[@class='ok-icons icon-ok_chevron_right']")).click()
        browser.sleep(5000)

        // browser.actions().click(element(by.xpath('//div[@class=\'mat-step-label mat-step-label-active mat-step-label-selected\']'))).perform()
        // browser.manage().timeouts().implicitlyWait(15000)

        console.log('********************************************************************************')
        console.log('********************************************************************************')

        var EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(element(by.xpath('//div[@class=\'legal\']'))), 3000);

        element(by.xpath('//div[@class=\'legal\']')).getText().then(elementText => {
            console.log("Text = " + elementText);

            var isPresent = element(by.id('mat-slide-toggle-2')).isPresent();
            if (isPresent) {
                console.log('element is present')
            }
            else {
                console.log('element not present')
            }
            browser.sleep(3000)

            var firstE = element(by.id('mat-slide-toggle-2')).isEnabled();
            firstE.click();
            if (firstE.click()) {
                console.log('element is enabled')
            }
            else {
                console.log('element is not enabled')
            }

            // company 
            element(by.id('myCompanyInfoSpanTorqueWrenchFormat')).getText().then(companyText => {
                console.log("Text = " + companyText);
            });
            var companyToggle = element(by.id('mat-slide-toggle-2'));
            expect(companyToggle.isEnabled()).toBe(true);
            companyToggle.click();
            browser.sleep(2000)

            element(by.xpath('//button[@class=\'ok-btn ok-btn-add-info\']')).getText().then(companyTextInside => {
                console.log("Text = " + companyTextInside);

                var companyInfo = element(by.xpath('//button[@class=\'ok-btn ok-btn-add-info\']'));
                expect(companyInfo.isEnabled()).toBe(true);
                browser.sleep(2000)

               // browser.actions().click(element(by.id('cdk-step-label-0-1'))).perform()

                // customer 
            element(by.id('myCustomerInfoSpanTorqueWrenchFormat')).getText().then(customerText => {
                console.log("Text = " + customerText);
                });
            var customerToggle = element(by.xpath('//div[@class=\'mat-slide-toggle-bar mat-slide-toggle-bar-no-side-margin\']//ancestor:: mat-slide-toggle[@id=\'mat-slide-toggle-3\']'));
            expect(customerToggle.isEnabled()).toBe(true);
            customerToggle.click();
            browser.sleep(2000)

            element(by.id('companyLogoEditButtonTorqueWrenchFormat')).getText().then(customerTextInside => {
                console.log("Text = " + customerTextInside);
            var companyInfo = element(by.id('companyLogoEditButtonTorqueWrenchFormat'));
            expect(companyInfo.isEnabled()).toBe(true);
            browser.sleep(2000)

           // browser.actions().click(element(by.id('cdk-step-label-0-1'))).perform()

                    // notes
            element(by.id('notesSectionSpanTorqueWrenchFormat')).getText().then(notesText => {
                console.log("Text = " + notesText);
                });
            var notesToggle = element(by.xpath('//div[@class=\'mat-slide-toggle-bar mat-slide-toggle-bar-no-side-margin\']//parent:: label[@for=\'mat-slide-toggle-4-input\']'));
            expect(notesToggle.isEnabled()).toBe(true);
            notesToggle.click();
            browser.sleep(2000)

            element(by.xpath('//div[@class=\'report-title note-title ok-fade\']')).getText().then(notesInsideText => {
                console.log("Text = " + notesInsideText);
            var notesToggleText = element(by.xpath('//span[@class=\'ok-icons icon-ok_pencil cursor ok-fade\']//parent:: div[@class=\'report-title note-title ok-fade\']'));
            expect(notesToggleText.isEnabled()).toBe(true);
            browser.sleep(2000)
                    })

            //browser.actions().click(element(by.id('cdk-step-label-0-1'))).perform()

            var EC = protractor.ExpectedConditions;
            browser.wait(EC.visibilityOf(element(by.xpath('//span[@class=\'ok-icons icon-ok_graph_increase graph\']'))), 5000);

            var signature = element(by.xpath('//div[@class=\'mat-slide-toggle-bar mat-slide-toggle-bar-no-side-margin\']//parent:: label[@for=\'mat-slide-toggle-6-input\']'))
            signature.click()

            var EC = protractor.ExpectedConditions;
            browser.wait(EC.presenceOf(element(by.xpath('//div[@class=\'mat-slide-toggle-bar mat-slide-toggle-bar-no-side-margin\']//parent:: label[@for=\'mat-slide-toggle-6-input\']'))), 5000);

            console.log('********************************************************************************')
            console.log('********************************************************************************')

                });
            });
        });
    });
});