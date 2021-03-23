let homepage = require('../Pages/homepage');

describe('Launching the App', function(){
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        homepage.LogIn()

    xit('Logging In', async function(){
        
        await homepage.LogIn()

        await homepage.LogOut()
    })

    it('Getting in "MyCompanyInformation"', async function(){

        await homepage.LogIn()

        toolSelect = element(by.id('toolDataDivTorqueWrenchSelect'))
        clicknext = element(by.xpath("//span[@class='ok-icons icon-ok_chevron_right']"))
        companyToggle = element(by.id('mat-slide-toggle-2'))
        addcompanyBtn = element(by.xpath('//button[@class=\'ok-btn ok-btn-add-info\']'))
        addcompanyText = element(by.linkText('Add company information'))
        customerName = element(by.id('mat-form-field-label-3'))
        addressLine1 = element(by.id('mat-form-field-label-5'));
        addressLine2 = element(by.id('mat-form-field-label-7'))
        cityText = element(by.id('mat-form-field-label-9'))
        stateText = element(by.id('mat-form-field-label-11'))
        postalcodeText = element(by.id('mat-form-field-label-13'))
        phoneText = element(by.id('mat-form-field-label-15'))
        cancelText = element(by.linkText('Cancel'))
        saveText = element(by.linkText('save'))
        companyLogo = element(by.linkText(' Company logo '))
        addBtn = element(by.linkText(' Add '))
             
            await this.toolSelect.click();
            browser.sleep(3000) 

            await this.clicknext.click()
            await this.companyToggle.click()
            browser.sleep(3000)

            expect(await this.addcompanyBtn.isEnabled()).toBe(true);
            console.log(await this.addcompanyBtn.getText())
            await this.addcompanyBtn.click()
            browser.manage().timeouts().implicitlyWait(2000);
   
            expect(await this.addcompanyText.isDisplayed()).toBe(true)
            console.log(await this.addcompanyText.getText())
            browser.manage().timeouts().implicitlyWait(2000);
   
            expect(await this.customerName.isDisplayed()).toBe(true)
            console.log(await this.customerName.getText())
            browser.manage().timeouts().implicitlyWait(2000);
   
            expect(await this.addressLine1.isDisplayed()).toBe(true)
            console.log(await this.addressLine1.getText())
            browser.manage().timeouts().implicitlyWait(2000);
   
            expect(await this.addressLine2.isDisplayed()).toBe(true)
            console.log(await this.addressLine2.getText())
            browser.manage().timeouts().implicitlyWait(2000);
   
            expect(await this.cityText.isDisplayed()).toBe(true)
            console.log(await this.cityText.getText())
            browser.manage().timeouts().implicitlyWait(2000);
   
            expect(await this.stateText.isDisplayed()).toBe(true)
            console.log(await this.stateText.getText())
            browser.manage().timeouts().implicitlyWait(2000);
   
            expect(await this.postalcodeText.isDisplayed()).toBe(true)
            console.log(await this.postalcodeText.getText())
            browser.manage().timeouts().implicitlyWait(2000);
   
            expect(await this.phoneText.isDisplayed()).toBe(true)
            console.log(await this.phoneText.getText())
            browser.manage().timeouts().implicitlyWait(2000);
   
            expect(await this.cancelText.isDisplayed()).toBe(true)
            console.log(await this.cancelText.getText())
            browser.manage().timeouts().implicitlyWait(2000);
   
            expect(await this.saveText.isDisplayed()).toBe(true)
            console.log(await this.saveText.getText())
            browser.manage().timeouts().implicitlyWait(2000);
   
            expect(await this.companyLogo.isDisplayed()).toBe(true)
            console.log(await this.companyLogo.getText())
            browser.manage().timeouts().implicitlyWait(2000);
   
            expect(await this.addBtn.isEnabled()).toBe(true)
            console.log(await this.addBtn.getText())
            browser.manage().timeouts().implicitlyWait(2000);
               
            
       
    })

    // it('Getting in "MyCustomerInformation"', async function(){
    //     await customerInfo.verifyCustomer()
    // })
})
