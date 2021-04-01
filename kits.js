describe('Milwaukee Website', function(){

    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);

    it('Add Kit', async function(){

        browser.get('https://onekeystaging.milwaukeetool.com/')
        browser.sleep(2000)
        browser.get('https://onekeystaging.milwaukeetool.com/')

        // browser.get('https://onekeytest.milwaukeetool.com/');
        // browser.manage().addCookie({name: 'Mellon', value: 'Mellon'});
        // browser.get('https://onekeytest.milwaukeetool.com/')

        launchBtn = element(by.xpath('//a[@title=\'Launch App\']'))
        emailText = element(by.xpath('//input[@name=\'email\']'))
        passText = element(by.xpath('//input[@name=\'password\']'))
        loginbtn = element(by.xpath('//span[@class=\'auth0-label-submit\']'))
        kitsBtn = element(by.xpath("//div[@role='tab']//div[.=' Kits ']"))
        createKitImg = element(by.id("emptyIconSpanKits"))
        createKitText = element(by.id("emptyTitleH2Kits"))
        createKitSubText = element(by.id("emptyTextPKits"))
        addKitBtn = element(by.id("addKitButtonKits"))
        kitNumber = element(by.xpath("//mat-label[.='Kit number/barcode']"))
        kitNumberInput = element(by.xpath("//div//input[@maxlength='120']"))
        kitName = element(by.xpath("//mat-label[.='Kit name']"))
        kitNameInput = element(by.xpath("//div//input[@maxlength='64']"))
        addImgBtn = element(by.xpath("//label[normalize-space()='Add']"))
        saveImgBtn = element(by.id("saveImageButtonImageAdjuster"))
        addItemsBtn = element(by.id("addItemsButtonAddNewKit"))
        addItemsTitle = element(by.xpath("//div//h2[.='Add items to your kit']"))
        addItemsSubTitle = element(by.xpath("//div//p[contains(text(),'Search inventory')]"))
        searchBtn = element(by.xpath("//div//button[contains(text(),'Search')]"))
        checkBoxBtn = element(by.xpath("//div[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']"))
        itemsAddedBefore = element(by.xpath("//div//h4[.='0']"))
        itemsAddedAfter = element(by.xpath("//div//h4[.='1']"))
        addImgToKitBtn = element(by.xpath("//button//span[contains(text(),'Add items to kit')]"))
        saveAtTheEndBtn = element(by.id("saveButtonAddNewKit"))

        ////////////
        selectKitDropDown = element(by.xpath("//td//mat-icon[.='arrow_drop_down ']"))
        itemsInThisKitText = element(by.xpath("//div//span[contains(text(),'Item in this kit')]"))
        transferKitBtn = element(by.xpath("//div//button[contains(text(),'Transfer kit')]"))
        transferKitTitle = element(by.xpath("//div//h2[contains(text(),'Transfer kit')]"))
        transferKitTitleFirst = element(by.xpath("//div//span[contains(text(),'Where do you')]"))
        transferKitTitleSecond = element(by.xpath("//div//span[contains(text(),'Want to add additional')]"))
        transferKitTitleThird = element(by.xpath("//div//span[contains(text(),'Do you want to')]"))
        transferKitSubTitleFirst = element(by.xpath("//div//span[contains(text(),'Select a place you')]"))
        transferKitSubTitleSecond = element(by.xpath("//div//span[contains(text(),'Select the assignments')]"))
        transferKitSubTitleThird = element(by.xpath("//div//span[contains(text(),'Check the box')]"))
        placesBtn = element(by.xpath("//div//span//span[contains(text(),' Place* ')]"))
        placesBtnInput = element(by.xpath("//div[@class='mat-radio-label-content']//span[contains(text(),' Unassigned ')]"))
        personBtn = element(by.xpath("//div//span//span[contains(text(),' Person ')]"))
        personBtnInput = element(by.xpath("//label[@class='mat-radio-label']//div//span[.=' demotest2@mailinator.com ']"))
        divisionBtn = element(by.xpath("//div//span//span[contains(text(),'Division')]"))
        divisionBtnInput = element(by.xpath("//div[@class='mat-radio-label-content']//span[contains(text(),' Unassigned ')]"))
        statusBtn = element(by.xpath("//div//span//span[contains(text(),' Status ')]"))
        statusBtnInput = element(by.xpath("//div[@class='mat-radio-label-content']//span[contains(text(),' Available ')]"))
        downloadReport = element(by.xpath("//div[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']"))
        saveBtnTransferKit = element(by.xpath("//div[@class='button-group text-right']//button[.='Save']"))
        transferBtnTransferKit = element(by.xpath("//div[@class='button-group']//button[.='Transfer']"))


        //Implementation
        // browser.executeScript("document.body.style.zoom='80%';")
        await launchBtn.click()
        await browser.manage().timeouts().implicitlyWait(10000);
        await emailText.sendKeys('Demotest2@mailinator.com');
        await passText.sendKeys('Test@123');
        await loginbtn.click();
        browser.manage().timeouts().implicitlyWait(10000);
       
        browser.manage().timeouts().implicitlyWait(10000);
        await kitsBtn.click()
        browser.manage().timeouts().implicitlyWait(10000);
        // expect(createKitImg.isDisplayed()).toBe(true)
        // expect(createKitText.getText()).toEqual("Create a kit")
        // expect(createKitSubText.getText()).toEqual("You can bundle individual items from your inventory into a kit. After you kit your items, you can transfer and manage them!")
        
        // await addKitBtn.click()
        // browser.sleep(1000);
        // browser.actions().click(kitNumber).perform()
        // await kitNumberInput.sendKeys("2534")
        // browser.actions().click(kitName).perform()
        // await kitNameInput.sendKeys("OneKeyKit")

        // browser.actions().click(addImgBtn.sendKeys('C:/Users/schoyal/Desktop/Projects/ProtractorDemo/img1.png')).perform()
        // await addImgBtn.sendKeys("C:/Users/schoyal/Desktop/Projects/ProtractorDemo/img1.png")
        // browser.manage().timeouts().implicitlyWait(10000);
        // browser.actions().click(saveImgBtn).perform()
        // browser.sleep(3000)

        // await browser.executeScript('window.scrollTo(0,800)')
        // await addItemsBtn.click()
        // browser.sleep(1000);
        // browser.executeScript("document.body.style.zoom='80%';")
        // browser.sleep(1000);
        // browser.actions().mouseMove(addItemsTitle).perform()
        // expect(addItemsTitle.getText()).toEqual("Add items to your kit")
        // expect(addItemsSubTitle.getText()).toEqual("Search inventory and select items to add to kit.")
        // expect(searchBtn.isEnabled()).toBe(true)
        // expect(itemsAddedBefore.getText()).toEqual("0")
        // await checkBoxBtn.click()
        // expect(itemsAddedAfter.getText()).toEqual("1")
        // browser.sleep(1000)
        
        // browser.actions().click(addImgToKitBtn).perform()
        // await addImgToKitBtn.click()
        // await browser.sleep(2000)


        selectKitDropDown.click()
        browser.sleep(2000)
        expect(itemsInThisKitText.getText()).toEqual("Item in this kit")
        transferKitBtn.click()
        browser.sleep(2000)
        expect(transferKitTitle.getText()).toEqual("Transfer kit")
        expect(transferKitTitleFirst.getText()).toEqual("Where do you want to transfer this kit? (Required)*")
        expect(transferKitTitleSecond.getText()).toEqual("Want to add additional assignments?")
        expect(transferKitTitleThird.getText()).toEqual("Do you want to download a report?")
        expect(transferKitSubTitleFirst.getText()).toEqual("Select a place you would like to send this kit to.")
        expect(transferKitSubTitleSecond.getText()).toEqual("Select the assignments you would like to apply to this kit.")
        expect(transferKitSubTitleThird.getText()).toEqual("Check the box and the report will download after you save.")

        browser.sleep(2000)      
        browser.actions().click(placesBtn).perform()
        browser.sleep(2000)
        browser.actions().click(placesBtnInput).perform()
        browser.sleep(1000)
        browser.actions().click(personBtn).perform()
        personBtnInput.click()
        browser.sleep(1000)
        browser.actions().click(divisionBtn).perform()
        divisionBtnInput.click()
        browser.sleep(1000)
        browser.actions().click(statusBtn).perform()
        statusBtnInput.click()
        browser.sleep(1000)
        browser.actions().click(downloadReport).perform()
        await browser.executeScript('window.scrollTo(0,400)')        
        browser.sleep(5000)
        await saveBtnTransferKit.click()
        browser.sleep(6000)
        await transferBtnTransferKit.click()


    })
})