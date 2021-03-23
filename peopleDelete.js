describe('Milwaukee Website', function(){

    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);


    it('Verifying Places and People Page', async function(){

        browser.get('https://onekeystaging.milwaukeetool.com/')

        launchBtn = element(by.xpath('//a[@title=\'Launch App\']'))
        emailText = element(by.xpath('//input[@name=\'email\']'))
        passText = element(by.xpath('//input[@name=\'password\']'))
        loginbtn = element(by.xpath('//span[@class=\'auth0-label-submit\']'))


        // Implementation
        await launchBtn.click()
        await browser.manage().timeouts().implicitlyWait(10000);
        await emailText.sendKeys('bim360stageautomation@mailinator.com');
        await passText.sendKeys('Password1');
        await loginbtn.click();
        browser.manage().timeouts().implicitlyWait(10000);

        // Verifying People 
        peopleBtn = element(by.id('peopleSpanSiteNavDrawer'))
        increasePagesBtn = element(by.xpath("//mat-select[@role='combobox']"))
        increasePageTo50 = element(by.xpath("//span[normalize-space()='50']"))
        partnerImport = element(by.xpath("//button[contains(text(),' Partner import ')]"))
        partnerImportName2 = element(by.xpath("//button[contains(text(),'BIM 360')]"))
        importPeopleCB = element(by.xpath("(//div[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin'])[3]"))
        importButtonPeople = element(by.xpath("//button[normalize-space()='Import']"))
        afterImportPeopleCB = element(by.xpath("(//div[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin'])[1]"))
        removeAdmin = element(by.xpath("(//div[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin'])[3]"))
        peopleEllipses = element(by.id('ellipsis'))
        deletePeople = element(by.id("deleteSpanPeople"))
        deleteBulkPeople = element(by.id('deleteButtonDeletePeopleDialog'))

        await expect(peopleBtn.isEnabled()).toBe(true)
        await peopleBtn.click()
        browser.manage().timeouts().implicitlyWait(10000)
        await increasePagesBtn.click()
        await increasePageTo50.click()
        browser.sleep(2000)
        await expect(partnerImport.isEnabled()).toBe(true)
        await partnerImport.click()
        await expect(partnerImportName2.isEnabled()).toBe(true)
        await partnerImportName2.click()
        browser.sleep(4000)   
        await importPeopleCB.click()
        browser.sleep(2000)
        await browser.actions().doubleClick(importButtonPeople).perform()
        browser.manage().timeouts().implicitlyWait(10000)
        successBannerMsgBefore = element(by.id('successBannerMessage'))
        await expect(successBannerMsgBefore.isDisplayed()).toBe(true)

        browser.sleep(3000)

        await afterImportPeopleCB.click()
        browser.sleep(3000)
        await removeAdmin.click()
        browser.sleep(3000)
        await peopleEllipses.click()
        browser.sleep(2000)
        await deletePeople.click()
        browser.sleep(2000)
        await deleteBulkPeople.click()
        browser.manage().timeouts().implicitlyWait(10000)

        successBannerMsgAfter = element(by.id('successBannerMessage'))
        await expect(successBannerMsgAfter.isDisplayed()).toBe(true)
        browser.sleep(5000)

    })
})