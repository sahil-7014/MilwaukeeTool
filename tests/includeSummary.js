describe('Milwaukee Website', function(){

    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);


    it('Verifying Include Summary', async function(){

        browser.get('https://onekeystaging.milwaukeetool.com/')

        launchBtn = element(by.xpath('//a[@title=\'Launch App\']'))
        emailText = element(by.xpath('//input[@name=\'email\']'))
        passText = element(by.xpath('//input[@name=\'password\']'))
        loginbtn = element(by.xpath('//span[@class=\'auth0-label-submit\']'))
        reportbtn = element(by.id('reportsSpanSiteNavDrawer'))
        torqueWrench = element(by.id('torqueReportsSpanSiteNavDrawer'))
        reportSummary = element(by.id('reportSummarySpanTorqueWrench'))
        selectTorque = element(by.id('toolDataDivTorqueWrenchSelect'))
        formatReport = element(by.xpath('//div[.=\' Format report\' and @class=\'mat-step-label\']'))
        
        selectDownloadOption = element(by.xpath("//div[.='Choose download options']//ancestor::mat-step-header"))
        downloadPDF = element(by.xpath("(//span[@class='mat-checkbox-label'])[2]"))
        downloadCSV = element(by.xpath("(//span[@class='mat-checkbox-label'])[3]"))
        downloadReport = element(by.id('downloadReportButtonTorqueWrenchDownload'))
        fuelText = element(by.xpath('//span[.=\'M12 FUEL™ 3/8" Digital Torque Wrench w/ ONE-\']'))
        barcode = element(by.xpath("//span[.='Barcode']"))
        serial = element(by.xpath("//span[.='Serial #']"))
        totalEvents = element(by.xpath("//span[.='Total events']//ancestor::div[@class='textLayer']"))
        subText1 = element(by.xpath("//span[.='The accuracy of this tool is rated at +/- 2% at full scale. The numbers reported assume the proper certification,']"))
        subText2 = element(by.xpath("//span[.='calibration and maintenance of this tool per the instructions in the tool’s manual. Please refer to the tool’s']"))
        subText3 = element(by.xpath("//span[.='certification records and manual for more information.']"))


        await launchBtn.click()
        await browser.manage().timeouts().implicitlyWait(10000);
        await emailText.sendKeys('Demotest2@mailinator.com');
        await passText.sendKeys('Test@123');
        await loginbtn.click();
        browser.manage().timeouts().implicitlyWait(10000);
        await reportbtn.click();
        browser.manage().timeouts().implicitlyWait(10000);
        await torqueWrench.click();
        browser.manage().timeouts().implicitlyWait(10000);
        await reportSummary.click()
        browser.manage().timeouts().implicitlyWait(10000);
        await selectTorque.click()
        browser.manage().timeouts().implicitlyWait(3000)
        formatReport.click()
        browser.sleep(3000)

        
        await browser.actions().mouseMove(selectDownloadOption).perform()
        browser.sleep(2000)
        selectDownloadOption.click()
        browser.sleep(10000)
        await expect(downloadPDF.isEnabled()).toBe(true)
        await expect(downloadCSV.isEnabled()).toBe(true)
        await expect(downloadReport.isEnabled()).toBe(false)
        browser.manage().timeouts().implicitlyWait(3000)
        await expect(fuelText.getText()).toEqual('M12 FUEL™ 3/8" Digital Torque Wrench w/ ONE-')
        await expect(barcode.getText()).toEqual('Barcode')
        await expect(serial.getText()).toEqual('Serial #')
        // await expect(totalEvents.getText()).toEqual('Total events')
        await expect(subText1.getText()).toEqual('The accuracy of this tool is rated at +/- 2% at full scale. The numbers reported assume the proper certification,')
        await expect(subText2.getText()).toEqual('calibration and maintenance of this tool per the instructions in the tool’s manual. Please refer to the tool’s')
        await expect(subText3.getText()).toEqual('certification records and manual for more information.')



    })
})