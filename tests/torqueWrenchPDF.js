describe('Milwaukee Website', function(){

    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);

    it('Verify Torque-Wernch PDF Page', async function(){

        browser.get('https://onekeystaging.milwaukeetool.com/')

        launchBtn = element(by.xpath('//a[@title=\'Launch App\']'))
        emailText = element(by.xpath('//input[@name=\'email\']'))
        passText = element(by.xpath('//input[@name=\'password\']'))
        loginbtn = element(by.xpath('//span[@class=\'auth0-label-submit\']'))
        reportbtn = element(by.id('reportsSpanSiteNavDrawer'))
        torqueWrench = element(by.id('torqueReportsSpanSiteNavDrawer'))
        reportSummary = element(by.id('reportSummarySpanTorqueWrench'))
        torqueWrenchCBox = element(by.id('checkboxDivTorqueWrenchSelect'))
        formatReport = element(by.xpath('//div[.=\' Format report\' and @class=\'mat-step-label\']'))
        downloadOption = element(by.xpath('//div[.=\'Choose download options\' and @class=\'mat-step-label\']'))
        downloadPDF = element(by.xpath("(//span[@class='mat-checkbox-label'])[2]"))
        downloadCSV = element(by.xpath("(//span[@class='mat-checkbox-label'])[3]"))
        downloadReport = element(by.id('downloadReportButtonTorqueWrenchDownload'))
        sendToBIM = element(by.xpath("//button[.=' Send to BIM 360 ']"))
        // PDF
        clickSelectProjectPDF = element(by.xpath("//mat-select[@role='combobox']//span[.='Select Project']"))
        clickMetcoTestProjectPDF = element(by.xpath("//span[normalize-space()='Metco-Test Project']"))
        selectProjectFolderPDF = element(by.xpath("//div[@class='mat-radio-label-content']"))
        uploadPDFBtn = element(by.xpath("//div[@class='button-group']//button[.=' Upload ']"))
        successBannerPDF = element(by.id('successBannerMessage'))

        // CSV
        clickSelectProjectCSV = element(by.xpath("//mat-select[@role='combobox']//span[.='Select Project']"))
        clickMetcoTestProjectCSV = element(by.xpath("//span[normalize-space()='Metco-Test Project']"))
        selectProjectFolderCSV1 = element(by.xpath("//mat-icon[normalize-space()='chevron_right']"))
        // selectProjectFolderCSV1 = element(by.xpath("//mat-icon[@class='mat-icon notranslate mat-icon-rtl-mirror material-icons mat-icon-no-color']"))
        selectProjectFolderCSV2 = element(by.xpath("(//mat-icon[@class='mat-icon notranslate mat-icon-rtl-mirror material-icons mat-icon-no-color'])[2]"))
        selectFinalFolder = element(by.xpath("(//div[@class='mat-radio-label-content'])[2]"))
        uploadCSVBtn = element(by.xpath("//div[@class='button-group']//button[.=' Upload ']"))
        successBannerCSV = element(by.id('successBannerMessage'))

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////

        await launchBtn.click()
        await browser.manage().timeouts().implicitlyWait(10000);
        await emailText.sendKeys('bim360stageautomation@mailinator.com');
        await passText.sendKeys('Password1');
        await loginbtn.click();
        await browser.sleep(2000)
        await reportbtn.click();
        await torqueWrench.click();
        await browser.manage().timeouts().implicitlyWait(10000);
        await reportSummary.click()
        await browser.sleep(4000)
        await torqueWrenchCBox.click()
        await browser.sleep(2000)
        await formatReport.click()
        browser.sleep(1000)
        await downloadOption.click()
        browser.sleep(2000)

        await downloadPDF.click()
        await sendToBIM.click()
        browser.sleep(4000)

        await clickSelectProjectPDF.click()
        browser.sleep(2000)
        await clickMetcoTestProjectPDF.click()
        await browser.manage().timeouts().implicitlyWait(10000);
        await selectProjectFolderPDF.click()
        await browser.manage().timeouts().implicitlyWait(10000);
        await uploadPDFBtn.click()
        browser.sleep(3000)
        await expect(successBannerPDF.isDisplayed()).toBe(true)
        browser.sleep(3000)

        await downloadCSV.click()
        await sendToBIM.click()
        browser.sleep(2000)
        await clickSelectProjectCSV.click()
        await browser.manage().timeouts().implicitlyWait(10000);
        await clickMetcoTestProjectCSV.click()
        browser.sleep(2000)
        // await browser.actions().doubleClick(selectProjectFolderCSV1).perform()
        await selectProjectFolderCSV1.click()
        browser.sleep(4000)
        // await browser.actions().doubleClick(selectProjectFolderCSV2).perform()
        await selectProjectFolderCSV2.click()
        browser.sleep(4000)
        await selectFinalFolder.click()
        browser.sleep(1000)
        await uploadCSVBtn.click()
        browser.sleep(4000)
        await expect(successBannerCSV.isDisplayed()).toBe(true)
        browser.sleep(4000)


    })
})