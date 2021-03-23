class homepage{
    
         launchBtn = element(by.xpath('//a[@title=\'Launch App\']'))
         emailText = element(by.xpath('//input[@name=\'email\']'))
         passText = element(by.xpath('//input[@name=\'password\']'))
         loginbtn = element(by.xpath('//span[@class=\'auth0-label-submit\']'))
         reportbtn = element(by.id('reportsSpanSiteNavDrawer'))
         torqueWrench = element(by.id('torqueReportsSpanSiteNavDrawer'))
         reportSummary = element(by.id('reportSummarySpanTorqueWrench'))
         profileIcon = element(by.id('profileIcon'))
         logOutBtn = element(by.id('logOutButtonSiteHeader'))
         
           async LogIn(){
            
            browser.get('https://onekeystaging.milwaukeetool.com/')
            await this.launchBtn.click();
            browser.manage().timeouts().implicitlyWait(10000);
            await this.emailText.sendKeys('Demotest2@mailinator.com');
            await this.passText.sendKeys('Test@123');
            await this.loginbtn.click();
            browser.manage().timeouts().implicitlyWait(10000);
            await this.reportbtn.click();
            await this.torqueWrench.click();
            await this.reportSummary.click();
        }

        async LogOut(){
            await this.profileIcon.click()
            await this.logOutBtn.click()
        }

    }
    // class companyInfo{
        
    //      companyToggle = element(by.id('mat-slide-toggle-2'))
    //      addcompanyBtn = element(by.xpath('//button[@class=\'ok-btn ok-btn-add-info\']'))
    //      addcompanyText = element(by.linkText('Add company information'))
    //      customerName = element(by.id('mat-form-field-label-3'))
    //      addressLine1 = element(by.id('mat-form-field-label-5'));
    //      addressLine2 = element(by.id('mat-form-field-label-7'))
    //      cityText = element(by.id('mat-form-field-label-9'))
    //      stateText = element(by.id('mat-form-field-label-11'))
    //      postalcodeText = element(by.id('mat-form-field-label-13'))
    //      phoneText = element(by.id('mat-form-field-label-15'))
    //      cancelText = element(by.linkText('Cancel'))
    //      saveText = element(by.linkText('save'))
    //      companyLogo = element(by.linkText(' Company logo '))
    //      addBtn = element(by.linkText(' Add '))


    //      async verifyCompany(){

    //         expect(await this.addcompanyBtn.isEnabled()).toBe(true);
    //         console.log(await this.addcompanyBtn.getText())
    //         await this.addcompanyBtn.click()
    //         browser.manage().timeouts().implicitlyWait(2000);

    //         expect(await this.addcompanyText.isDisplayed()).toBe(true)
    //         console.log(await this.addcompanyText.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);

    //         expect(await this.customerName.isDisplayed()).toBe(true)
    //         console.log(await this.customerName.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);

    //         expect(await this.addressLine1.isDisplayed()).toBe(true)
    //         console.log(await this.addressLine1.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);

    //         expect(await this.addressLine2.isDisplayed()).toBe(true)
    //         console.log(await this.addressLine2.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);

    //         expect(await this.cityText.isDisplayed()).toBe(true)
    //         console.log(await this.cityText.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);

    //         expect(await this.stateText.isDisplayed()).toBe(true)
    //         console.log(await this.stateText.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);

    //         expect(await this.postalcodeText.isDisplayed()).toBe(true)
    //         console.log(await this.postalcodeText.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);

    //         expect(await this.phoneText.isDisplayed()).toBe(true)
    //         console.log(await this.phoneText.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);

    //         expect(await this.cancelText.isDisplayed()).toBe(true)
    //         console.log(await this.cancelText.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);

    //         expect(await this.saveText.isDisplayed()).toBe(true)
    //         console.log(await this.saveText.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);

    //         expect(await this.companyLogo.isDisplayed()).toBe(true)
    //         console.log(await this.companyLogo.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);

    //         expect(await this.addBtn.isEnabled()).toBe(true)
    //         console.log(await this.addBtn.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);
            

    //      }

    // }

    // class customerInfo{

    //     clicknext = element(by.xpath("//span[@class='ok-icons icon-ok_chevron_right']"))
    //     customerToggle = element(by.xpath('//div[@class=\'mat-slide-toggle-bar mat-slide-toggle-bar-no-side-margin\']//ancestor:: mat-slide-toggle[@id=\'mat-slide-toggle-3\']'))
    //     addcustomerBtn = element(by.id('companyLogoEditButtonTorqueWrenchFormat'))
    //     addcustomerText = element(by.id('Add customer information'))
    //     customerText = element(by.id('mat-form-field-label-17'))
    //     addressLineText1 = element(by.id('mat-form-field-label-19'))
    //     addressLineText2 = element(by.id('mat-form-field-label-21'))
    //     cityText2 = element(by.id('mat-form-field-label-23'))
    //     stateText2 = element(by.id('mat-form-field-label-25'))
    //     postalText2 = element(by.id('mat-form-field-label-27'))
    //     phoneText2 = element(by.id('mat-form-field-label-29'))
    //     cancelText2 = element(by.linkText('Cancel'))
    //     saveText2 = element(by.linkText('Save'))

    //     async verifyCustomer(){
    //         await this.clicknext.click()
    //         await this.customerToggle.click()
    //         browser.manage().timeouts().implicitlyWait(15000);

    //         expect(this.addcustomerBtn.isEnabled()).toBe(true)
    //         console.log(await this.addcustomerBtn.getText())
    //         await this.addcustomerBtn.click()
    //         browser.manage().timeouts().implicitlyWait(2000);

    //         expect(await this.addcustomerText.isDisplayed()).toBe(true)
    //         console.log(await this.addcustomerText.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);

    //         expect(await this.customerText.isDisplayed()).toBe(true)
    //         console.log(await this.customerText.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);
            
    //         expect(await this.addressLineText1.isDisplayed()).toBe(true)
    //         console.log(await this.addressLineText1.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);
            
    //         expect(await this.addressLineText2.isDisplayed()).toBe(true)
    //         console.log(await this.addressLineText2.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);
            
    //         expect(await this.cityText2.isDisplayed()).toBe(true)
    //         console.log(await this.cityText2.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);
            
    //         expect(await this.stateText2.isDisplayed()).toBe(true)
    //         console.log(await this.stateText2.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);
            
    //         expect(await this.postalText2.isDisplayed()).toBe(true)
    //         console.log(await this.postalText2.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);
            
    //         expect(await this.phoneText2.isDisplayed()).toBe(true)
    //         console.log(await this.phoneText2.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);
            
    //         expect(await this.cancelText2.isDisplayed()).toBe(true)
    //         console.log(await this.cancelText2.getText())
    //         browser.manage().timeouts().implicitlyWait(2000);
            
    //         expect(await this.saveText2.isEnabled()).toBe(true)
    //         console.log(await this.saveText2.getText())
    //         await this.saveText2.click()
    //         browser.manage().timeouts().implicitlyWait(2000);
            
    //     }
    // }

    module.exports = new homepage()
    


    
    // public async getLogin() {
    //     await this.helper.click(this.profileIcon);
    //     await this.helper.click(this.logOut);
    //     await browser.waitForAngularEnabled(false);
    //     browser.sleep(6000);
    //     await this.helper.sendKeys(this.emailidfield, 'vipultest12345@mailinator.com');
    //     await this.helper.sendKeys(this.passwordFiled, 'Test@123');
    //     await this.helper.click(this.signUpButton);
    //     browser.sleep(8000);
    //     await this.navigateTo();
