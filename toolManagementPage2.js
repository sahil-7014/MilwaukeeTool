describe('Milwaukee Website', function () {

    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);

    it('Verifying Tool Management Page 2', async function () {

        browser.get('https://onekeystaging.milwaukeetool.com/')

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
        formatHeaderText = element(by.xpath("//h3[.='Format header']"))
        myCompanyInformationText = element(by.xpath("//span[.='My company information']"))
        myCompanyInformationToggle = element(by.id("mat-slide-toggle-2-input"))
        myCustomerInformationText = element(by.xpath("//span[.='My customer information']"))
        myCustomerInformationToggle = element(by.id("mat-slide-toggle-3-input"))
        includeNotesText = element(by.xpath("//span[.='Include notes']"))
        includeNotesToggle = element(by.id("mat-slide-toggle-3-input"))

        toolManagementReportText = element(by.xpath("//form//div[.=' Tool Management Report ']"))
        toolManagementReportBtn = element(by.xpath("//span[@class='ok-icons icon-ok_pencil cursor ok-fade']"))
        toolManagementIcon = element(by.xpath("//span[@class='ok-icons icon-ok_view_contact']"))
        toolManagementReportSubText = element(by.xpath("//div[contains(text(),'Choose what you’d like to present')]"))

        formatSummaryText = element(by.xpath("//h3[.='Format summary']"))
        includeSummaryText = element(by.xpath("//span[.='Include summary']"))
        includeSummaryToggle = element(by.id("mat-slide-toggle-5"))
        includeSummarySubText = element(by.xpath("//div[contains(text(),'You can add a summary of your report that puts the')]"))

        formatFooterText = element(by.xpath("//h3[.='Format footer']"))
        includeSignatureText = element(by.xpath("//span[.='Include signature']"))
        includeSignatureToggle =element(by.id("mat-slide-toggle-6-input"))

        openChatBtn = element(by.xpath("//button[@aria-label='Open live chat']"))
        
        clickNextBtn = element(by.id("nextSpanDirectionalButtons"))
        clickBackBtn = element(by.id("backSpanDirectionalButtons"))
        downloadOption = element(by.xpath("//div[.=' Choose download options ' and @class='mat-step-text-label ng-star-inserted']"))

        
        // IMPLEMENTATION
        await launchBtn.click()
        await browser.manage().timeouts().implicitlyWait(10000);
        await emailText.sendKeys('demotest2@mailinator.com');
        await passText.sendKeys('Test@123');
        await loginbtn.click();
        await browser.sleep(2000)
        await reportbtn.click();
        await toolManagement.click()
        await browser.sleep(3000)
        await browser.actions().doubleClick(reportSummary).perform()
        await formatReport.click()
        browser.sleep(1000)
        expect(toolManagementText.getText()).toEqual('Tool Management\nLearn more')
        expect(learnMoreBtn.isEnabled()).toBe(true)
        expect(previewReportBtn.isEnabled()).toBe(true)
        expect(formatHeaderText.getText()).toEqual('Format header')
        expect(myCompanyInformationText.getText()).toEqual('My company information')
        expect(myCompanyInformationToggle.isEnabled()).toBe(true)
        expect(myCustomerInformationText.getText()).toEqual('My customer information')
        expect(myCustomerInformationToggle.isEnabled()).toBe(true)
        expect(includeNotesText.getText()).toEqual('Include notes')
        expect(includeNotesToggle.isEnabled()).toBe(true)
        expect(toolManagementReportText.getText()).toEqual('Tool Management Report')
        expect(toolManagementReportSubText.getText()).toEqual('Choose what you’d like to present first to the viewers of your report')
        expect(toolManagementReportBtn.isEnabled()).toBe(true)
        expect(toolManagementIcon.isDisplayed()).toBe(true)
        await browser.executeScript('window.scrollTo(0,500)')
        expect(formatSummaryText.getText()).toEqual('Format summary')
        expect(includeSummaryText.getText()).toEqual('Include summary')
        expect(includeSummaryToggle.isEnabled()).toBe(true)
        expect(includeSummarySubText.getText()).toEqual('You can add a summary of your report that puts the most important information first. That way, interested parties can quickly get what they need.')
        expect(formatFooterText.getText()).toEqual('Format footer')
        expect(includeSignatureText.getText()).toEqual('Include signature')
        expect(includeSignatureToggle.isEnabled()).toBe(true)

        expect(clickNextBtn.isEnabled()).toBe(true)
        expect(clickBackBtn.isEnabled()).toBe(true)
        expect(downloadOption.isEnabled()).toBe(true)
        expect(downloadOption.getText()).toEqual('Choose download options')

    })
})