describe('Milwaukee Website', function(){

    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);


    it('Verifying Places 2 Page', async function(){

        browser.get('https://onekeystaging.milwaukeetool.com/')

        launchBtn = element(by.xpath('//a[@title=\'Launch App\']'))
        emailText = element(by.xpath('//input[@name=\'email\']'))
        passText = element(by.xpath('//input[@name=\'password\']'))
        loginbtn = element(by.xpath('//span[@class=\'auth0-label-submit\']'))
        placesBtn = element(by.xpath("//span[.='Places']"))
        welcomeText = element(by.xpath("//div[.='Welcome to Places']"))
        welcomeSubText = element(by.xpath("//div[@class='subtitle']"))
        welcomeImg = element(by.css("img[src='assets/img/empty-state-places.png']"))

        homeBaseIcon = element(by.id('HomeBaseicon'))
        homeBaseTitle = element(by.id('homeBaseTitleDivPlaces'))
        homeBaseDescription = element(by.id('HomeBaseDescription'))
        homeBaseBtn = element(by.id('homeBaseButtonAddPlace'))

        projectJobIcon = element(by.id('ProjectJobicon'))
        projectJobTitle = element(by.id('ProjectJobTitle'))
        projectJobDescription = element(by.id('ProjectJobDescription'))
        projectJobBtn = element(by.id('ProjectJobAddButton'))

        vehicleIcon = element(by.id('Vehicleicon'))
        vehicleTitle = element(by.id('VehicleTitle'))
        vehicleDescription = element(by.id('VehicleDescription'))
        vehicleBtn = element(by.id('VehicleAddButton'))

        // Implementation
        await launchBtn.click()
        await browser.manage().timeouts().implicitlyWait(10000);
        await emailText.sendKeys('Demotest2@mailinator.com');
        await passText.sendKeys('Test@123');
        await loginbtn.click();
        browser.manage().timeouts().implicitlyWait(10000);
        await placesBtn.click()
        browser.manage().timeouts().implicitlyWait(10000);
        await welcomeText.click()
        await expect(welcomeText.getText()).toEqual('Welcome to Places')
        await expect(welcomeSubText.getText()).toEqual('Get your inventory organized based on how you organize your business.')
        browser.sleep(1000)
        await expect(welcomeImg.isDisplayed()).toBe(true)
        await browser.manage().timeouts().implicitlyWait(10000);

        await expect(homeBaseIcon.isDisplayed()).toBe(true)
        await expect(homeBaseTitle.getText()).toEqual('Home base')
        await expect(homeBaseDescription.getText()).toEqual('The beating heart of your inventory. Set your home location to wherever your tools come back to when they’re not on assignment.')
        await expect(homeBaseBtn.isEnabled()).toBe(true)
        await browser.manage().timeouts().implicitlyWait(10000);

        await expect(projectJobIcon.isDisplayed()).toBe(true)
        await expect(projectJobTitle.getText()).toEqual('Project/Job')
        await expect(projectJobDescription.getText()).toEqual('Storing tools at sites or service calls? Set up your project and the people that work there. Add start and stop dates for reminders to bring tools home.')
        await expect(projectJobBtn.isEnabled()).toBe(true)
        await browser.manage().timeouts().implicitlyWait(10000);

        await expect(vehicleIcon.isDisplayed()).toBe(true)
        await expect(vehicleTitle.getText()).toEqual('Vehicle')
        await expect(vehicleDescription.getText()).toEqual('Storing your stuff in something that moves? We have you covered! Keep track of items, assign people and save essential vehicle details like, make, model and license plate.')
        await expect(vehicleBtn.isEnabled()).toBe(true)
        await homeBaseBtn.click()
        await browser.sleep(3000)  

    })
    it('Click on Add HomeBase Button', async function(){

        nameYourPlaceText = element(by.id('titleHomeBaseNameMatPanelTitleAddHomeBase'))
        nameYourPlaceImg = element(by.xpath("//span[@class='ok-icons icon-ok_home']"))
        homeBaseInput = element(by.id("homeBaseNameMtTextFieldAddPlacesHomeBase"))
        addDetails = element(by.id('titleHomeBaseAddDetail'))
        addDetailsInput1 = element(by.xpath("//div[@class='ng-star-inserted']//mt-text-field//ancestor::div[@class='grid-tile-input']"))
        addDetailsInput2 = element(by.xpath("//div[@class='ng-star-inserted']//mt-phone-number-field//ancestor::div[@class='grid-tile-input']"))
        addImg = element(by.xpath("//div[@class='ng-star-inserted']//label[@class='btn' and .='Add ']"))
        saveImg = element(by.id('saveImageButtonImageAdjuster'))
        addImgText = element(by.xpath("//div[@class='file-upload-instructions']"))
        assignPeople = element(by.id('assignPeopleSpanAddHomeBase'))
        detailsText = element(by.xpath("//div[.=' Images will display on your places list ']"))
        saveAtTheEnd = element(by.id('saveButtonAddHomeBase'))
        saveConfirm = element(by.id('saveSubmissionButtonSubmissionConfirmation'))
        clickInfo = element(by.id('projectsListPlaceName'))
        addImg2 = element(by.xpath("//label[normalize-space()='Add']"))
        selectedNumber = element(by.id('selectedJobNumber'))

        await expect(nameYourPlaceText.getText()).toEqual('Name your place')
        await expect(nameYourPlaceImg.isDisplayed()).toBe(true)
        browser.actions().doubleClick(homeBaseInput).sendKeys('David Beckham').perform()
        await addDetails.click()
        browser.sleep(2000)
        await browser.actions().doubleClick(addDetailsInput2).sendKeys('8814095737').perform()
        browser.sleep(2000)
        await browser.actions().mouseDown(addImg).perform()

        await browser.actions().click(saveAtTheEnd).perform()
        await browser.manage().timeouts().implicitlyWait(10000);
        await saveConfirm.click()
        browser.sleep(5000)
        await clickInfo.click()
        browser.sleep(3000)
        await addImg2.sendKeys('C:/Users/schoyal/Desktop/Projects/ProtractorDemo/img1.png')
        // await addImg2.sendKeys('C:/Users/schoyal/Desktop/Projects/ProtractorDemo/img1.png')
        browser.sleep(2000)
        // browser.actions().doubleClick(saveImg).perform()
        // browser.sleep(2000)


    })
})