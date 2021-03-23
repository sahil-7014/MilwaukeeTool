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

        selectPartner = element(by.xpath("//button[normalize-space()='Select partner']"))
        partnerName1 = element(by.xpath("//button[normalize-space()='BIM 360']"))
        importPlacesCB = element(by.xpath("(//div[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin'])[2]"))
        importBtnPlaces = element(by.id('externalProjectsImport'))
        importPlaceConfirmation = element(by.xpath("//div[@class='cdk-overlay-container']"))
        afterImportPlacesCB = element(by.xpath("(//div[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin'])[1]"))
        placesEllipses = element(by.id('ellipsis'))
        deletePlaces = element(by.xpath("//span[normalize-space()='Delete']"))
        deleteBulkPlaces = element(by.id('bulkDeleteButtonDelete'))

        // Implementation
        await launchBtn.click()
        await browser.manage().timeouts().implicitlyWait(10000);
        await emailText.sendKeys('bim360stageautomation@mailinator.com');
        await passText.sendKeys('Password1');
        await loginbtn.click();
        browser.manage().timeouts().implicitlyWait(10000);
        
        // Verifying Places
        browser.executeScript('window.scrollTo(0,500);')
        await placesBtn.click()
        browser.sleep(1000)
        await expect(selectPartner.isEnabled()).toBe(true)
        await selectPartner.click()   
        browser.sleep(1000)
        await expect(partnerName1.isEnabled()).toBe(true)
        await partnerName1.click()
        browser.sleep(2000)
        await importPlacesCB.click()
        browser.manage().timeouts().implicitlyWait(10000);
        await importBtnPlaces.click()
        browser.manage().timeouts().implicitlyWait(10000);
        await importPlaceConfirmation.getText()
        // await console.log(importPlaceConfirmation)
        browser.sleep(4000)
        await afterImportPlacesCB.click()
        await placesEllipses.click()
        await deletePlaces.click()
        await deleteBulkPlaces.click()
        browser.sleep(3000)









        // Verifying People 
        // peopleBtn = element(by.id('peopleSpanSiteNavDrawer'))
        // partnerImport = element(by.xpath("//button[contains(text(),' Partner import ')]"))
        // partnerImportName2 = element(by.xpath("//button[contains(text(),'BIM 360')]"))
        // importPeopleCB = element(by.xpath("(//div[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin'])[3]"))
        // importButtonPeople = element(by.xpath("//button[normalize-space()='Import']"))
        // afterImportPeopleCB = element(by.xpath("(//div[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin'])[1]"))
        // removeAdmin = element(by.xpath("(//div[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin'])[3]"))
        // peopleEllipses = element(by.id('ellipsis'))
        // deletePeople = element(by.xpath("//span[normalize-space()='Delete']"))
        // deleteBulkPeople = element(by.id('deleteButtonDeletePeopleDialog'))

        // await expect(peopleBtn.isEnabled()).toBe(true)
        // await peopleBtn.click()
        // browser.manage().timeouts().implicitlyWait(10000)
        // await expect(partnerImport.isEnabled()).toBe(true)
        // await partnerImport.click()
        // await expect(partnerImportName2.isEnabled()).toBe(true)
        // await partnerImportName2.click()
        // browser.sleep(4000)   
        // await importPeopleCB.click()
        // browser.sleep(2000)
        // await importButtonPeople.click()
        // browser.sleep(3000)

        // await afterImportPeopleCB.click()
        // browser.sleep(3000)
        // await removeAdmin.click()
        // browser.sleep(5000)
        // await peopleEllipses.click()
        // browser.manage().timeouts().implicitlyWait(10000)
        // await deletePeople.click()
        // browser.manage().timeouts().implicitlyWait(10000)
        // await deleteBulkPeople.click()
        // browser.sleep(6000)

        // await afterImportPeopleCB.click()
        // browser.sleep(3000)
        // await removeAdmin.click()
        // browser.sleep(5000)
        // await peopleEllipses.click()
        // browser.manage().timeouts().implicitlyWait(10000)
        // await deletePeople.click()
        // browser.manage().timeouts().implicitlyWait(10000)
        // await deleteBulkPeople.click()
        // browser.sleep(6000)


    })
})