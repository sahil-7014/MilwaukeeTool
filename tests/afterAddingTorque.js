describe('Milwaukee Website', function(){

    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);

    it('Verify Torque-Wernch Page', async function(){

        browser.get('https://onekeystaging.milwaukeetool.com/')

        launchBtn = element(by.xpath('//a[@title=\'Launch App\']'))
        emailText = element(by.xpath('//input[@name=\'email\']'))
        passText = element(by.xpath('//input[@name=\'password\']'))
        loginbtn = element(by.xpath('//span[@class=\'auth0-label-submit\']'))
        reportbtn = element(by.id('reportsSpanSiteNavDrawer'))
        torqueWrench = element(by.id('torqueReportsSpanSiteNavDrawer'))
        reportSummary = element(by.id('reportSummarySpanTorqueWrench'))

        // BEFORE SELECTING TORQUEWRENCH
        beforeClearAll = element(by.id('clearAllATorqueWrench'))
        beforeToolSelected = element(by.id('itemsSelectedDivTorqueWrench'))
        nextBTN = element(by.id('nextSpanDirectionalButtons'))
        previewReport = element(by.xpath('//div [@class=\'stepper-header\']'))
        totalTools = element(by.id('selectedItemsSpanTorqueWrench'))
        toolImg = element(by.css('Img[src="assets/img/reports/empty-state-checklist.png"]'))
        toolText = element(by.xpath('//h4[.=\'No tools selected\']'))
        toolSubText = element(by.xpath('//p[.=\'Start by selecting an available tool to begin building your report.\']'))
        searchInput = element(by.id('searchInputTorqueWrench'))
        searchBtn = element(by.id('searchButtonTorqueWrench'))
        noResultFound = element(by.xpath('//p[.=\' No results found. \']'))


        // SELECTING TORQUEWRENCH
        selectTorque = element(by.id('toolDataDivTorqueWrenchSelect'))
        afterToolSelected = element(by.id('itemsSelectedDivTorqueWrench'))
        afterTotalTools = element(by.id('selectedItemsSpanTorqueWrench'))
        toolHeading = element(by.id('toolHeadingSpanTorqueWrenchSelect'))
        toolDescription = element(by.id('descriptionSpanTorqueWrenchSelect'))
        closeTorque = element(by.id('closeSpanTorqueWrenchSelect'))
        afterToolImg = element(by.id('noEventsToDisplayImgTorqueWrenchSelect'))
        afterToolText = element(by.id('noEventsToDisplayH4TorqueWrenchSelect'))
        afterToolSubText = element(by.id('noEventsToDisplayPTorqueWrenchSelect'))
        afterPreviewReport = element(by.xpath('//div[@class=\'stepper-header\']'))
        afterClickNext = element(by.id('nextSpanDirectionalButtons'))

        afterClearAll = element(by.id('clearAllATorqueWrench'))

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

        // BEFORE SELETING TORQUEWRENCH
        await expect(beforeToolSelected.getText()).toEqual('0tools selected')
        browser.manage().timeouts().implicitlyWait(2000)
        await expect(beforeClearAll.isEnabled()).toBe(true)
        await expect(totalTools.getText()).toEqual('0\nTotal Tools')
        browser.manage().timeouts().implicitlyWait(2000)
        await expect(nextBTN.isEnabled()).toBe(true)
        browser.manage().timeouts().implicitlyWait(2000)
        await expect(previewReport.isEnabled()).toBe(true)
        browser.manage().timeouts().implicitlyWait(2000)
        await expect(totalTools.getText()).toEqual('0\nTotal Tools')
        browser.sleep(5000)
        await expect(toolImg.isDisplayed()).toBe(true)
        browser.sleep(2000)
        await expect(toolText.getText()).toEqual('No tools selected')
        browser.sleep(2000)
        await expect(toolSubText.getText()).toEqual('Start by selecting an available tool to begin building your report.')
        browser.manage().timeouts().implicitlyWait(2000)

        // AFTER SELECTING TORQUEWRENCH
        await selectTorque.click()
        browser.manage().timeouts().implicitlyWait(2000)
        await expect(afterToolSelected.getText()).toEqual('1tool selected')
        await expect(afterTotalTools.getText()).toEqual('1\nTotal Tools')
        browser.sleep(3000)
        await expect(toolHeading.getText()).toEqual(' 0 Events for:  2465-20 ')
        browser.manage().timeouts().implicitlyWait(2000)
        await expect(toolDescription.getText()).toEqual(' M12 FUEL™ 3/8" Digital Torque Wrench w/ ONE-KEY™ ')
        await expect(closeTorque.isEnabled()).toBe(true)
        await expect(afterToolImg.isDisplayed()).toBe(true)
        await expect(afterToolText.getText()).toEqual('No events to display')
        browser.manage().timeouts().implicitlyWait(2000)
        await expect(afterToolSubText.getText()).toEqual('Events uploaded from your torque wrench through the One-Key app will be displayed here.')
        browser.manage().timeouts().implicitlyWait(2000)
        await expect(afterPreviewReport.isEnabled()).toBe(true)
        await expect(afterClickNext.isEnabled()).toBe(true)

        await expect(afterClearAll.isEnabled()).toBe(true) 
        await afterClearAll.click()
        browser.manage().timeouts().implicitlyWait(2000)

        await expect(beforeToolSelected.getText()).toEqual('0tools selected')
        browser.manage().timeouts().implicitlyWait(2000)
        await expect(totalTools.getText()).toEqual('0\nTotal Tools')
        browser.manage().timeouts().implicitlyWait(2000)
        await expect(nextBTN.isEnabled()).toBe(true)
        browser.manage().timeouts().implicitlyWait(2000)
        await expect(previewReport.isEnabled()).toBe(true)
        browser.manage().timeouts().implicitlyWait(2000)
        await expect(totalTools.getText()).toEqual('0\nTotal Tools')
        browser.sleep(5000)
        await expect(toolImg.isDisplayed()).toBe(true)
        browser.manage().timeouts().implicitlyWait(2000)
        await expect(toolText.getText()).toEqual('No tools selected')
        await expect(toolSubText.getText()).toEqual('Start by selecting an available tool to begin building your report.')
        browser.manage().timeouts().implicitlyWait(2000)

        await selectTorque.click()
        browser.sleep(2000)
        await expect(closeTorque.isEnabled()).toBe(true)
        closeTorque.click()
        browser.manage().timeouts().implicitlyWait(2000)

        await expect(searchInput.sendKeys('qwerty'))
        browser.sleep(2000)        
        await expect(searchBtn.isEnabled()).toBe(true)
        searchBtn.click()
        browser.sleep(4000)
        await expect(noResultFound.getText()).toEqual('No results found.')
browser.sleep(5000)

    })
})