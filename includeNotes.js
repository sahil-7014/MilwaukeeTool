describe('Milwaukee Website', function(){

    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);


    it('Verifying Include Notes', async function(){

        browser.get('https://onekeystaging.milwaukeetool.com/')

        launchBtn = element(by.xpath('//a[@title=\'Launch App\']'))
        emailText = element(by.xpath('//input[@name=\'email\']'))
        passText = element(by.xpath('//input[@name=\'password\']'))
        loginbtn = element(by.xpath('//span[@class=\'auth0-label-submit\']'))
        reportbtn = element(by.id('reportsSpanSiteNavDrawer'))
        torqueWrench = element(by.id('torqueReportsSpanSiteNavDrawer'))
        reportSummary = element(by.id('reportSummarySpanTorqueWrench'))
        selectTorque = element(by.id('toolDataDivTorqueWrenchSelect'))
        formatReport = element(by.xpath('//div[.=\' Format report\' and @class=\'mat-step-label\']'))
        notesToggle = element(by.id('mat-slide-toggle-4'))
        noteBtn = element(by.xpath("//span[@class='ok-icons icon-ok_pencil cursor ok-fade']//parent::div[.=' Report notes ']"))
        inputNotes = element(by.xpath("//textarea[@maxlength='350']//ancestor::form[@id='mtNote']"))
        numericValue = element(by.xpath("//span[@class='field-counter text-area-help']//ancestor:: form[@id='mtNote']"))
        summaryToggle = element(by.id('mat-slide-toggle-5'))
        summaryText = element(by.xpath("(//div[@class='col']//parent:: div[@class='empty ng-star-inserted'])[2]"))

        await launchBtn.click()
        await browser.manage().timeouts().implicitlyWait(10000);
        await emailText.sendKeys('Demotest2@mailinator.com');
        await passText.sendKeys('Test@123');
        await loginbtn.click();
        browser.manage().timeouts().implicitlyWait(10000);
        await reportbtn.click();
        browser.manage().timeouts().implicitlyWait(10000);
        await torqueWrench.click();
        browser.manage().timeouts().implicitlyWait(10000);
        await reportSummary.click()
        browser.manage().timeouts().implicitlyWait(10000);

        await selectTorque.click()
        browser.manage().timeouts().implicitlyWait(3000)
        formatReport.click()
        browser.sleep(3000)
        // await notesToggle.click()
        // await expect(noteBtn.isEnabled()).toBe(true)
        // noteBtn.click()
        // browser.sleep(2000)
        // await expect(numericValue.getText()).toEqual('0/350')
        // browser.actions().doubleClick(inputNotes).sendKeys('heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhe').perform()
        // browser.sleep(2000)
        // await expect(numericValue.getText()).toEqual('350/350')
        // browser.sleep(3000)

        await expect(summaryToggle.isEnabled()).toBe(true)
        await summaryToggle.click()
        browser.sleep(2000)
        await expect(summaryText.getText()).toEqual('You can add a summary of your report that puts the most important information first. That way, interested parties can quickly get what they need.')
        browser.sleep(3000)

    })
})