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

        selectTools = element(by.xpath('//div [.=\'Select tools\' and @class=\'mat-step-text-label ng-star-inserted\']'))
        formatReport = element(by.xpath('//div[.=\' Format report\' and @class=\'mat-step-label\']'))
        downloadOption = element(by.xpath('//div[.=\'Choose download options\' and @class=\'mat-step-label\']'))

        //Filters
        filterSelector = element(by.id('filterSelectorDivTorqueWrench'))
        filterNumber = element(by.xpath('//div[@class=\'filters-count\']'))
        filterText = element(by.xpath('//div[@class=\'filter-selector-text\']'))
        filterDropdown = element(by.xpath('//mat-icon[.=\' arrow_drop_down \']'))

        // Search
        searchInput = element(by.id('searchInputTorqueWrench'))
        searchBtn = element(by.id('searchButtonTorqueWrench'))
        dateRangeText = element(by.id('dateRangeDivTorqueWrench'))
        dateRangeToggle = (element(by.id('dateRangeMatSlideToggleTorqueWrench'))) 
        toolSelected = element(by.id('itemsSelectedDivTorqueWrench'))
        clearAll = element(by.id('clearAllATorqueWrench'))
        reportSummary = element(by.id('reportSummarySpanTorqueWrench'))
        reportImg = element(by.xpath('//span[@class=\'ok-icons icon-ok_graph_increase\']'))
        totalTools = element(by.id('selectedItemsSpanTorqueWrench'))
        totalEvents = element(by.id('totalEventsSpanTorqueWrench'))
        successfulEvents = element(by.id('totalSuccessfulEventsSpanTorqueWrench'))
        eventsOutOfRange = element(by.id('totalEventsOutOfRangeSpanTorqueWrench'))
        emptyTorque = element(by.id('emptyListPTorqueWrench'))

        torqueWrenchIMG = element(by.id('noTorqueAvailableImgTorqueWrench'))
        torqueWrenchIMGText = element(by.id('noTorqueAvailableH4TorqueWrench'))
        torqueWrenchIMGAdd = element(by.id('noTorqueAvailablePTorqueWrench'))

        nextBTN = element(by.id('nextSpanDirectionalButtons'))
        previewReport = element(by.xpath('//div [@class=\'stepper-header\']'))


        ////////////////////////////////////////////////////////////////////////////////////////////////////////////

        launchBtn.click()
        browser.manage().timeouts().implicitlyWait(10000);
        emailText.sendKeys('Demotest2@mailinator.com');
        passText.sendKeys('Test@123');
        loginbtn.click();
        browser.sleep(2000)
        reportbtn.click();
        torqueWrench.click();
        browser.manage().timeouts().implicitlyWait(10000);
        reportSummary.click()
        browser.manage().timeouts().implicitlyWait(10000);

        expect(selectTools.getText()).toEqual('Select tools')
        browser.manage().timeouts().implicitlyWait(2000)
        expect(formatReport.getText()).toEqual('Format report')
        expect(formatReport.isEnabled()).toBe(true)
        browser.manage().timeouts().implicitlyWait(2000)
        expect(downloadOption.getText()).toEqual('Choose download options')
        expect(downloadOption.isEnabled()).toBe(true)
        browser.manage().timeouts().implicitlyWait(2000)
        expect(filterSelector.isEnabled()).toBe(true)
        expect(filterNumber.getText()).toEqual('0')
        expect(filterText.getText()).toEqual('Filters')
        expect(filterDropdown.isEnabled()).toBe(true)
        browser.manage().timeouts().implicitlyWait(2000)


        expect(searchInput.isPresent()).toBe(true)
        browser.manage().timeouts().implicitlyWait(2000)
        expect(searchBtn.isEnabled()).toBe(true)
        browser.manage().timeouts().implicitlyWait(2000)
        expect(dateRangeText.getText()).toEqual('Date Range (optional)')
        expect(dateRangeToggle.isEnabled()).toBe(true)
        browser.manage().timeouts().implicitlyWait(2000)
        expect(toolSelected.getText()).toEqual('0tools selected')
        browser.manage().timeouts().implicitlyWait(2000)
        expect(clearAll.getText()).toEqual('Clear all')
        expect(clearAll.isEnabled()).toBe(true)
        browser.manage().timeouts().implicitlyWait(2000)
        expect(reportSummary.getText()).toEqual('Report summary')
        expect(reportImg.isDisplayed()).toBe(true)
        browser.manage().timeouts().implicitlyWait(2000)
        expect(totalTools.getText()).toEqual('0\nTotal Tools')
        browser.manage().timeouts().implicitlyWait(2000)
        expect(totalEvents.getText()).toEqual('0\nTotal events')
        browser.manage().timeouts().implicitlyWait(2000)
        expect(successfulEvents.getText()).toEqual('0\nSuccessful events')
        browser.manage().timeouts().implicitlyWait(2000)
        expect(eventsOutOfRange.getText()).toEqual('0\nEvents out of range')
        browser.sleep(3000)
        expect(torqueWrenchIMG.isDisplayed()).toBe(true)
        browser.sleep(2000)
        expect(torqueWrenchIMGText.getText()).toEqual('No torque wrenches available')
        browser.sleep(2000)
        expect(torqueWrenchIMGAdd.getText()).toEqual('Add your torque wrenches to your inventory so you can begin building your report.')

        expect(nextBTN.isEnabled()).toBe(true)
        browser.manage().timeouts().implicitlyWait(2000)
        expect(previewReport.isEnabled()).toBe(true)
        browser.manage().timeouts().implicitlyWait(2000)


    })
})