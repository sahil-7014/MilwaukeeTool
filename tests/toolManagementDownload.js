describe('Milwaukee Website', function(){

    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);

    it('Verifying Tool Management Page', async function(){

        browser.get('https://onekeystaging.milwaukeetool.com/')

        launchBtn = element(by.xpath('//a[@title=\'Launch App\']'))
        emailText = element(by.xpath('//input[@name=\'email\']'))
        passText = element(by.xpath('//input[@name=\'password\']'))
        loginbtn = element(by.xpath('//span[@class=\'auth0-label-submit\']'))
        reportbtn = element(by.id('reportsSpanSiteNavDrawer'))
        toolManagement = element(by.id('toolManagementSpanSiteNavDrawer')) 
        reportSummary = element(by.xpath("//span[@class='ok-icons icon-ok_graph_increase']"))  
        formatReport = element(by.xpath("//div[.=' Format report ' and @class='mat-step-text-label ng-star-inserted']"))
        downloadOption = element(by.xpath("//div[.=' Choose download options ' and @class='mat-step-text-label ng-star-inserted']"))
        downloadPDF = element(by.xpath("//span[contains(text(),'Download PDF')]"))
        downloadCSV = element(by.xpath("//span[contains(text(),'Download CSV')]"))
        downloadReport = element(by.xpath("//button[contains(text(),'Download report')]"))

    
        // IMPLEMENTATION
        await launchBtn.click()
        await browser.manage().timeouts().implicitlyWait(15000);
        await emailText.sendKeys('demotest2@mailinator.com');
        await passText.sendKeys('Test@123');
        await loginbtn.click();
        await browser.manage().timeouts().implicitlyWait(15000);
        await reportbtn.click();
        await toolManagement.click()
        await browser.sleep(3000)
        await browser.actions().doubleClick(formatReport).perform()
        await downloadOption.click()
        await browser.manage().timeouts().implicitlyWait(15000);
        await downloadPDF.click()
        await browser.sleep(5000)
        await downloadReport.click()
        browser.sleep(10000)
        await downloadPDF.click()
        browser.sleep(5000)
        await downloadReport.click()

        browser.sleep(10000)
        browser.sleep(10000)
    })
})