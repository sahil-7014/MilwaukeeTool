describe('Milwaukee Website', function () {

    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);

    it('Verifying Tool Management Page 2', async function () {

        browser.get('https://onekeytest.milwaukeetool.com/');
        browser.manage().addCookie({name: 'Mellon', value: 'Mellon'});
        browser.get('https://onekeytest.milwaukeetool.com/')

        launchBtn = element(by.xpath('//a[@title=\'Launch App\']'))
        emailText = element(by.xpath('//input[@name=\'email\']'))
        passText = element(by.xpath('//input[@name=\'password\']'))
        loginbtn = element(by.xpath('//span[@class=\'auth0-label-submit\']'))
        reportbtn = element(by.id('reportsSpanSiteNavDrawer'))
        toolManagement = element(by.id('toolManagementSpanSiteNavDrawer'))
        toolManagementText = element(by.xpath("//div[@id='title-reports'][' Tool Management ']"))
        learnMoreBtn = element(by.xpath("//span[normalize-space()='Learn more']"))
        previewReportBtn = element(by.xpath("//button[.='Preview report ']"))
        reportSummary = element(by.xpath("//span[@class='ok-icons icon-ok_graph_increase']"))  
        formatReport = element(by.xpath("//div[.=' Format report ' and @class='mat-step-text-label ng-star-inserted']"))
        myCompanyInformationText = element(by.xpath("//span[.='My company information']"))
        myCompanyInformationToggle = element(by.id("mat-slide-toggle-2-input"))
        myCustomerInformationToggle = element(by.id("mat-slide-toggle-3-input"))
        includeNotesToggle = element(by.id("mat-slide-toggle-4-input"))

        // Add Company Information
        addCompanyInformationBtn = element(by.xpath("//button[@class='ok-btn ok-btn-add-info']"))
        addCompanyInformationText = element(by.xpath("//span[.='Add company information ']"))
        companyNameInput = element(by.xpath("(//form//div[@class='ng-star-inserted']//input)[1]"))
        addressLine1Company = element(by.xpath("(//form//div[@class='ng-star-inserted']//input)[2]"))
        addressLine2Company = element(by.xpath("(//form//div[@class='ng-star-inserted']//input)[3]"))
        cityTextCompany = element(by.xpath("(//form//div[@class='ng-star-inserted']//input)[4]"))
        stateTextCompany = element(by.xpath("(//div//mat-select)[3]"))
        stateSelectCompany = element(by.xpath("//span[.='Alabama']"))
        postalcodeTextCompany = element(by.xpath("(//form//div[@class='ng-star-inserted']//input)[5]"))
        phoneTextCompany = element(by.xpath("(//form//div[@class='ng-star-inserted']//input)[6]"))

        uploadImgCompany = element(by.xpath("//input[@class='upload-btn']"));
        saveImgCompany = element(by.id('saveImageButtonImageAdjuster'))
        saveAtEndCompany = element(by.xpath("//div[@class='button-group']//button[.='Save']"));

        editCompany = element(by.xpath("//div[@class='row text-right']//button"))
        cancleCompany = element(by.xpath("//div[@class='button-group']//button[.='Cancel']"))

        // Add Customer Information
        addCustomerInformationBtn = element(by.xpath("//button[@class='ok-btn ok-btn-add-info']"))
        customerNameInput = element(by.xpath("(//form//div[@class='ng-star-inserted']//input)[1]"))
        addressLine1Customer = element(by.xpath("(//form//div[@class='ng-star-inserted']//input)[2]"))
        addressLine2Customer = element(by.xpath("(//form//div[@class='ng-star-inserted']//input)[3]"))
        cityTextCustomer = element(by.xpath("(//form//div[@class='ng-star-inserted']//input)[4]"))
        stateTextCustomer = element(by.xpath("(//div//mat-select)[3]"))
        stateSelectCustomer = element(by.xpath("//span[.='American Samoa']"))
        postalcodeTextCustomer = element(by.xpath("(//form//div[@class='ng-star-inserted']//input)[5]"))
        phoneTextCustomer = element(by.xpath("(//form//div[@class='ng-star-inserted']//input)[6]"))

        uploadImgCustomer = element(by.xpath("//input[@class='upload-btn']"));
        saveImgCustomer = element(by.id('saveImageButtonImageAdjuster'))
        saveAtEndCustomer = element(by.xpath("//div[@class='button-group']//button[.='Save']"));

        editCustomer = element(by.xpath("//div[@class='row text-right']//button"))
        cancleCustomer = element(by.xpath("//div[@class='button-group']//button[.='Cancel']"))

        // Include Notes
        noteBtn = element(by.xpath("//div[normalize-space()='Report notes']"))
        inputNotes = element(by.xpath("//textarea"))
        EC = protractor.ExpectedConditions;
        

        // IMPLEMENTATION
        // await launchBtn.click()
        await browser.manage().timeouts().implicitlyWait(15000);
        await emailText.sendKeys('demotest2@mailinator.com');
        await passText.sendKeys('Test@123');
        await loginbtn.click();
        await browser.manage().timeouts().implicitlyWait(15000);
        await reportbtn.click();
        await toolManagement.click()
        await browser.sleep(3000)
        await browser.actions().doubleClick(reportSummary).perform()
        await formatReport.click()
        browser.sleep(1000)
        expect(myCompanyInformationText.getText()).toEqual('My company information')

        /*
        // Company Information Input
        await browser.actions().click(myCompanyInformationToggle).perform()
        addCompanyInformationBtn.click()
        browser.sleep(2000)
        await companyNameInput.sendKeys('IT Convergence')
        await addressLine1Company.sendKeys('Cubic Stays, Sector 70')
        await addressLine2Company.sendKeys('Near 61 Metro Station')
        await cityTextCompany.sendKeys('Noida')
        browser.manage().timeouts().implicitlyWait(15000)
        await stateTextCompany.click()
        browser.sleep(3000) 
        await stateSelectCompany.click()     
        browser.manage().timeouts().implicitlyWait(3000)
        await postalcodeTextCompany.sendKeys('90231')
        await phoneTextCompany.sendKeys('7082634926')

        await uploadImgCompany.sendKeys('C:/Users/schoyal/Desktop/Projects/ProtractorDemo/img1.png')
        browser.sleep(1000)
        browser.actions().doubleClick(saveImgCompany).perform()
        await saveImgCompany.click()
        await saveAtEndCompany.click()
        browser.sleep(2000)

        editCompany.click()
        browser.sleep(2000)
        cancleCompany.click()

        // Customer Information Input
        browser.sleep(3000)
        await browser.actions().click(myCustomerInformationToggle).perform()
        addCustomerInformationBtn.click()
        browser.sleep(2000)
        await customerNameInput.sendKeys('Virat Sharma')
        await addressLine1Customer.sendKeys('Select City Walk')
        await addressLine2Customer.sendKeys('Near Saket Metro')
        await cityTextCustomer.sendKeys('Delhi')
        browser.manage().timeouts().implicitlyWait(3000)
        await stateTextCustomer.click()
        browser.sleep(3000)
        await stateSelectCustomer.click()     
        browser.manage().timeouts().implicitlyWait(3000)
        await postalcodeTextCustomer.sendKeys('90231')
        await phoneTextCustomer.sendKeys('8814095737')

        await uploadImgCustomer.sendKeys('C:/Users/schoyal/Desktop/Projects/ProtractorDemo/img1.png')
        browser.sleep(1000)
        browser.actions().doubleClick(saveImgCustomer).perform()
        await saveImgCustomer.click()
        await saveAtEndCustomer.click()
        browser.sleep(2000)

        editCustomer.click()
        browser.sleep(2000)
        cancleCustomer.click()

*/
        // Include Notes Input
        await browser.actions().click(includeNotesToggle).perform()
        browser.sleep(2000)
        
        await browser.actions().click(noteBtn).perform()
        inputNotes.sendKeys('Report Summary---Summary Report')
        browser.sleep(4000)

    })
})