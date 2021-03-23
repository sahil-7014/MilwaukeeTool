describe('Milwaukee Website', function(){

    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);


    it('Add Company Information', async function(){

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

        companyToggle = element(by.id('mat-slide-toggle-2'))
        addcompanyBtn = element(by.xpath('//button[@class=\'ok-btn ok-btn-add-info\']'))
        addcompanyText = element(by.linkText('Add company information'))
        customerName = element(by.id('mat-input-2'))
        addressLine1 = element(by.id('mat-input-3'));
        addressLine2 = element(by.id('mat-input-4'))
        cityText = element(by.id('mat-input-5'))
        stateText = element(by.xpath("//div[@class='ng-star-inserted']//mat-form-field//mat-select"))
        stateSelect = element(by.xpath('//span[.=\'Oregon\']'))
        postalcodeText = element(by.id('mat-input-6'))
        phoneText = element(by.id('mat-input-7'))
        uploadImg = element(by.xpath('//input[@class=\'upload-btn\']'));
        saveImg = element(by.id('saveImageButtonImageAdjuster'))
        saveAtEnd = element(by.xpath("//div[@class='button-group']//button[.='Save']"));



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
        await companyToggle.click()
        await addcompanyBtn.click()
        browser.sleep(1000)
        await customerName.sendKeys('David Beckham')
        await addressLine1.sendKeys('Cubic Stays, Sector 70')
        await addressLine2.sendKeys('Near 61 Metro Station')
        await cityText.sendKeys('Noida')
        browser.manage().timeouts().implicitlyWait(3000)
        await stateText.click()
        browser.sleep(1000)
        await stateSelect.click()     
        browser.manage().timeouts().implicitlyWait(3000)
        await postalcodeText.sendKeys('90231')
        await phoneText.sendKeys('7082634926')

        await uploadImg.sendKeys('C:/Users/schoyal/Desktop/Projects/ProtractorDemo/img1.png')
        browser.actions().doubleClick(saveImg).perform()
        await saveImg.click()
        await saveAtEnd.click()
        browser.sleep(5000)

    })
})