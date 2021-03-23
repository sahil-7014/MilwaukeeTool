describe('Milwaukee Website', function(){

    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);


    it('Verifying Places and People Page', async function(){

        browser.get('https://onekeystaging.milwaukeetool.com/')

        launchBtn = element(by.xpath('//a[@title=\'Launch App\']'))
        emailText = element(by.xpath('//input[@name=\'email\']'))
        passText = element(by.xpath('//input[@name=\'password\']'))
        loginbtn = element(by.xpath('//span[@class=\'auth0-label-submit\']'))
        placesBtn = element(by.xpath("//span[.='Places']"))
        importText = element(by.xpath("//span[.='Import from our partners']"))
        importSubText = element(by.xpath("//p[contains(text(),'Have an account with our partners? ')]"))
        selectPartner = element(by.xpath("//button[normalize-space()='Select partner']"))
        partnerName1 = element(by.xpath("//button[normalize-space()='BIM 360']"))
        popupHeadText = element(by.xpath("//span[contains(text(),'Import projects from BIM 360')]"))
        popupImg = element(by.css('img[src="assets/img/integrations/bim360-stacked.png"]'))
        popupInsideImg = element(by.xpath("//div[@class='empty']//span[@class='ok-icons icon-ok_crane']"))
        popupInsideText = element(by.xpath("//span[contains(text(),'No Projects to Import')]"))
        popupInsideSubText = element(by.xpath("//div[@class='empty']//p[@id='noPlaceFoundParagraphPlaces']"))
        closePopup = element(by.xpath("//button[contains(text(),'Close')]"))

        // Implementation
        await launchBtn.click()
        await browser.manage().timeouts().implicitlyWait(10000);
        await emailText.sendKeys('Demotest2@mailinator.com');
        await passText.sendKeys('Test@123');
        await loginbtn.click();
        browser.manage().timeouts().implicitlyWait(10000);
        await placesBtn.click()
        browser.sleep(1000)

        // Verifying Places
        await expect(importText.getText()).toEqual('Import from our partners') 
        await expect(importSubText.getText()).toEqual('Have an account with our partners? You can import your project/jobs from your account')
        await expect(selectPartner.isEnabled()).toBe(true)
        await selectPartner.click()   
        browser.sleep(1000)
        await expect(partnerName1.isEnabled()).toBe(true)
        await partnerName1.click()
        browser.sleep(4000)

        await expect(popupHeadText.getText()).toEqual('Import projects from BIM 360')
        await expect(popupImg.isDisplayed()).toBe(true)
        await expect(popupInsideImg.isDisplayed()).toBe(true)
        await expect(popupInsideText.getText()).toEqual('No Projects to Import')
        await expect(popupInsideSubText.getText()).toEqual('All of your projects have been imported or there are no projects available to import.')
        await expect(closePopup.isEnabled()).toBe(true)
        await closePopup.click()
        browser.sleep(2000)

        // Verifying People 
        peopleBtn = element(by.id('peopleSpanSiteNavDrawer'))
        partnerImport = element(by.xpath("//button[contains(text(),' Partner import ')]"))
        partnerImportName2 = element(by.xpath("//button[contains(text(),'BIM 360')]"))
        popupHeadText2 = element(by.xpath("//span[contains(text(),'Import people from BIM 360')]"))
        popupImg2 = element(by.css('img[src="assets/img/integrations/bim360-stacked.png"]'))
        popupInsideImg2 = element(by.xpath("//div[@class='empty']//span[@class='ok-icons icon-ok_person']"))
        popupInsideText2 = element(by.xpath("//span[contains(text(),'No Users to Import')]"))
        popupInsideSubText2 = element(by.xpath("//div[@class='empty']//p[@id='noPlaceFoundParagraphPlaces']"))
        closePopup2 = element(by.xpath("//button[contains(text(),'Close')]"))

        await expect(peopleBtn.isEnabled()).toBe(true)
        await peopleBtn.click()
        browser.manage().timeouts().implicitlyWait(10000)
        await expect(partnerImport.isEnabled()).toBe(true)
        await partnerImport.click()
        await expect(partnerImportName2.isEnabled()).toBe(true)
        await partnerImportName2.click()
        browser.sleep(2000)
        await expect(popupHeadText2.getText()).toEqual('Import people from BIM 360')
        await expect(popupImg2.isDisplayed()).toBe(true)
        await expect(popupInsideImg2.isDisplayed()).toBe(true)
        await expect(popupInsideText2.getText()).toEqual('No Users to Import')
        await expect(popupInsideSubText2.getText()).toEqual('All of your users have been imported or there are no users available to import.')
        await expect(closePopup2.isEnabled()).toBe(true)
        await closePopup2.click()
        browser.sleep(3000)

    })
})