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
        toolManagementText = element(by.xpath("//div[@id='title-reports'][' Tool Management ']"))
        learnMoreBtn = element(by.xpath("//span[normalize-space()='Learn more']"))
        previewReport = element(by.xpath("//button[normalize-space()='Preview report']"))
        selectItemsText = element(by.xpath("//div[normalize-space()='Select items to view in report' and @class='mat-step-text-label ng-star-inserted']"))
        formatReport = element(by.xpath("//div[.=' Format report ' and @class='mat-step-text-label ng-star-inserted']"))
        downloadOption = element(by.xpath("//div[.=' Choose download options ' and @class='mat-step-text-label ng-star-inserted']"))
        
        displayOptionsBtn = element(by.xpath("//span[.=' Display options ']"))
        reportSummary = element(by.xpath("//span[@class='ok-icons icon-ok_graph_increase']"))
        totalItems = element(by.xpath("(//div[@class='stats ng-star-inserted'])[1]"))
        totalValue = element(by.xpath("(//div[@class='stats ng-star-inserted'])[2]"))
        allTools = element(by.xpath("//span[.='All Tools']"))
        allToolsTotalItems = element(by.xpath("//div[@class='table-summary']//span[@class='total']"))
        modelDescription = element(by.xpath("(//div[.=' Model #/Description'])[2]"))
        toolNumber = element(by.xpath("(//div[.=' Tool number'])[2]"))
        daysOnSite = element(by.xpath("(//div[.=' Days on Site '])[2]"))
        lastSeen = element(by.xpath("(//div[.=' Last seen'])[2]"))
        modelNumber = element(by.xpath("(//td[@role='gridcell'])[1]"))
        itemsPerPage = element(by.xpath("//mat-paginator//div[.=' Items per page: ']"))

        unspecified = element(by.xpath("//span[.='Unspecified']"))

        groupByText = element(by.xpath("//mat-panel-title[.=' Group by: ']"))
        groupByToggle = element(by.xpath("//mat-panel-description//mat-slide-toggle"))
        filterByText = element(by.id('filterByLabelFilters'))

        commonlyUsedPanel = element(by.id('commonlyUsedPanelTitleFilters'))
        markedMissingCB = element(by.id('commonlyUsedSelectedTotalSpanFilters'))
        unseenCB = element(by.id('unseenSpanFilters'))
        needsServiceCB = element(by.id('needsServiceSpanFilters'))
        seenOutsideCB = element(by.id('seenOutsideGeofenceSpanFilters'))
        lowCoinCellCB = element(by.id('lowCoinCellSpanFilters'))

        placesBtn = element(by.id('placesFilterCollectionFilters'))

        statusBtn = element(by.id('statusFilterCollectionFilters'))
        availableCB = element(by.xpath("//span[normalize-space()='Available']"))
        damagedCB = element(by.xpath("//span[normalize-space()='Damaged']"))
        inUseCB = element(by.xpath("//span[normalize-space()='In Use']"))
        missingCB = element(by.xpath("//span[normalize-space()='Missing']"))
        
        peopleBtn = element(by.id('peopleFilterCollectionFilters'))
        peopleCB = element(by.xpath("//span[.=' demotest2@mailinator.com ']"))

        divisionsBtn = element(by.id('divisionsFilterCollectionFilters'))
        manufacturersBtn = element(by.id('manufacturersFilterCollectionFilters'))
        manufacturersCB = element(by.xpath("//span[.=' Milwaukee® ']"))
        categoryBtn = element(by.id('categoryFilterCollectionFilters'))
        itemTrackingBtn = element(by.id('oneKeyExpansionFilters'))
        itemTrackingBtnCB1 = element(by.xpath("//span[.=' One-Key Tools ']"))
        itemTrackingBtnCB2 = element(by.xpath("//span[.=' Equipment Trackers ']"))

        displayOptionsBtnText = element(by.xpath("//div[contains(text(),'Select up to 5 items to include in your report')]"))
        modelDescriptionCB = element(by.xpath("//span[contains(text(),' Model/Description ')]"))
        toolNumberCB = element(by.xpath("//span[contains(text(),'Tool number')]"))
        daysOnSiteCB = element(by.xpath("//span[contains(text(),' Days on Site ')]"))
        lastSeenCB = element(by.xpath("//span[contains(text(),' Last seen ')]"))
        valueCB = element(by.xpath("//span[contains(text(),' Value ')]"))
        barcodeNumberCB = element(by.xpath("//span[contains(text(),' Barcode number ')]"))
        placeCB = element(by.xpath("//span[contains(text(),' Place ')]"))
        personCB = element(by.xpath("//span[contains(text(),' Person ')]"))
        statusCB = element(by.xpath("//span[contains(text(),' Status ')]"))
        serialNumberCB = element(by.xpath("//span[contains(text(),' Serial number ')]"))
        categoryCB = element(by.xpath("//span[contains(text(),' Category ')]"))
        divisionCB = element(by.xpath("//span[contains(text(),' Division ')]"))
        manufacturerCB_DB = element(by.xpath("//span[contains(text(),' Manufactur')]"))
        lastScannedCB = element(by.xpath("//span[contains(text(),' Last scanned ')]"))
        purchaseDateCB = element(by.xpath("//span[contains(text(),' Purchase date ')]"))
        purchaseLocation = element(by.xpath("//span[contains(text(),' Purchase location ')]"))
        coinCellLevel = element(by.xpath("//span[contains(text(),' Coin cell level ')]"))
        list = element.all(by.xpath("//div[@class='cdk-drop-list']//span[@class='trim-text']"));


        // IMPLEMENTATION
        await launchBtn.click()
        await browser.manage().timeouts().implicitlyWait(10000);
        await emailText.sendKeys('demotest2@mailinator.com');
        await passText.sendKeys('Test@123');
        await loginbtn.click();
        await browser.sleep(2000)
        await reportbtn.click();
        await toolManagement.click()
        browser.sleep(2000)
        expect(toolManagementText.getText()).toEqual('Tool Management\nLearn more')
        expect(learnMoreBtn.isEnabled()).toBe(true)
        expect(learnMoreBtn.getText()).toEqual('Learn more')
        // await browser.manage().timeouts().implicitlyWait(10000);
        expect(previewReport.isEnabled()).toBe(true)
        expect(previewReport.getText()).toEqual('Preview report ')
        browser.sleep(1000)
        expect(selectItemsText.getText()).toEqual('Select items to view in report')
        expect(selectItemsText.isEnabled()).toBe(true)
        expect(formatReport.isEnabled()).toBe(true)
        expect(downloadOption.isEnabled()).toBe(true)

        // Before Clicking Group By Button
        expect(displayOptionsBtn.isEnabled()).toBe(true)
        browser.sleep(1000)
        await browser.actions().doubleClick(reportSummary).perform()
        expect(reportSummary.isDisplayed()).toBe(true)
        expect(totalItems.getText()).toEqual('1\nTotal Items')
        expect(totalValue.getText()).toEqual('$0.00\nTotal Value')
        expect(allTools.getText()).toEqual('All Tools')
        expect(modelDescription.getText()).toEqual('Model #/Description')
        expect(toolNumber.getText()).toEqual('Tool number')
        expect(daysOnSite.getText()).toEqual('Days on Site')
        expect(lastSeen.getText()).toEqual('Last seen')
        expect(modelNumber.getText()).toEqual('2465-20\nM12 FUEL™ 3/8" Digital Torque Wrench w/ ONE-KEY™')
        // expect(itemsPerPage.getText()).toEqual('Items per page:')
        browser.sleep(1000)

        // After Clicking Group By Toggle
        expect(groupByText.getText()).toEqual('Group by:')
        expect(groupByToggle.isEnabled()).toBe(true)
        groupByToggle.click()
        expect(unspecified.getText()).toEqual('Unspecified')
        expect(filterByText.getText()).toEqual('Filter by:')
        browser.sleep(1000)

        await browser.actions().mouseMove(commonlyUsedPanel).perform()
        expect(commonlyUsedPanel.isEnabled()).toBe(true)
        browser.sleep(2000)
        expect(markedMissingCB.isEnabled()).toBe(true)
        expect(unseenCB.isEnabled()).toBe(true)
        expect(needsServiceCB.isEnabled()).toBe(true)
        expect(seenOutsideCB.isEnabled()).toBe(true)
        expect(lowCoinCellCB.isEnabled()).toBe(true)
        browser.sleep(1000)

        expect(placesBtn.isEnabled()).toBe(true)
        expect(statusBtn.isEnabled()).toBe(true)
        statusBtn.click()
        expect(availableCB.isEnabled()).toBe(true)
        expect(damagedCB.isEnabled()).toBe(true)
        expect(inUseCB.isEnabled()).toBe(true)
        expect(missingCB.isEnabled()).toBe(true)
        browser.sleep(3000)

        expect(peopleBtn.isEnabled()).toBe(true)
        peopleBtn.click()
        expect(peopleCB.isEnabled()).toBe(true)
        expect(divisionsBtn.isEnabled()).toBe(true)
        expect(manufacturersBtn.isEnabled()).toBe(true)
        manufacturersBtn.click()
        expect(manufacturersCB.isEnabled()).toBe(true)
        expect(categoryBtn.isEnabled()).toBe(true)
        expect(itemTrackingBtn.isEnabled()).toBe(true)
        itemTrackingBtn.click()
        expect(itemTrackingBtnCB1.isEnabled()).toBe(true)
        expect(itemTrackingBtnCB2.isEnabled()).toBe(true)
        browser.sleep(3000)

        browser.executeScript('window.scrollTo(800,0)')
        await browser.actions().click(displayOptionsBtn).perform()
        // displayOptionsBtn.click()
        browser.sleep(3000)
        expect(displayOptionsBtnText.getText()).toEqual('Select up to 5 items to include in your report. Item order can be rearranged by dragging and dropping.')
        expect(modelDescriptionCB.isEnabled()).toBe(true)
        expect(toolNumberCB.isEnabled()).toBe(true)
        expect(daysOnSiteCB.isEnabled()).toBe(true)
        expect(lastSeenCB.isEnabled()).toBe(true)
        expect(valueCB.isEnabled()).toBe(true)
        browser.executeScript('window.scrollTo(0,500)')
        expect(barcodeNumberCB.isEnabled()).toBe(true)
        expect(placeCB.isEnabled()).toBe(true)
        expect(personCB.isEnabled()).toBe(true)
        expect(statusCB.isEnabled()).toBe(true)
        expect(serialNumberCB.isEnabled()).toBe(true)
        expect(categoryCB.isEnabled()).toBe(true)
        expect(divisionCB.isEnabled()).toBe(true)
        expect(manufacturerCB_DB.isEnabled()).toBe(true)
        expect(lastScannedCB.isEnabled()).toBe(true)
        expect(purchaseDateCB.isEnabled()).toBe(true)
        expect(purchaseLocation.isEnabled()).toBe(true)
        expect(coinCellLevel.isEnabled()).toBe(true)
        browser.executeScript('window.scrollTo(800,0)')
        browser.sleep(2000)
        
        await browser.actions().click(displayOptionsBtn).perform()
        browser.sleep(2000)
        await browser.actions().click(displayOptionsBtn).perform()
        expect(list.count()).toBe(17);


       
    })
})