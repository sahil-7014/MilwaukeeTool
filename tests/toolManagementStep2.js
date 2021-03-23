describe('Milwaukee Website', function () {

    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);

    it('Verifying Tool Management Page', async function () {

        browser.get('https://onekeystaging.milwaukeetool.com/')

        launchBtn = element(by.xpath('//a[@title=\'Launch App\']'))
        emailText = element(by.xpath('//input[@name=\'email\']'))
        passText = element(by.xpath('//input[@name=\'password\']'))
        loginbtn = element(by.xpath('//span[@class=\'auth0-label-submit\']'))
        reportbtn = element(by.id('reportsSpanSiteNavDrawer'))
        toolManagement = element(by.id('toolManagementSpanSiteNavDrawer'))
        toolManagementText = element(by.xpath("//div[@id='title-reports'][' Tool Management ']"))
        learnMoreBtn = element(by.xpath("//span[normalize-space()='Learn more']"))
        reportSummary = element(by.xpath("//span[@class='ok-icons icon-ok_graph_increase']"))

        groupByToggle = element(by.xpath("//mat-panel-description//mat-slide-toggle"))
        groupBYSubText = element(by.xpath("//p[contains(text(),'Organize data')]"))
        topLevelBtn = element(by.xpath("//div//mat-select//span//span[.='Places']"))
        topLevelBtnCount = element.all(by.xpath("//div[@id='cdk-overlay-0']//div//mat-option"))
        topLevelPlaces = element(by.xpath("//div[@id='cdk-overlay-0']//mat-option//span[.='Places']"))
        topLevelPeople = element(by.xpath("//div[@id='cdk-overlay-0']//mat-option//span[.='People']"))
        topLevelStatus = element(by.xpath("//div[@id='cdk-overlay-0']//mat-option//span[.='Status']"))
        topLevelCategory = element(by.xpath("//div[@id='cdk-overlay-0']//mat-option//span[.='Category']"))
        topLevelDivision = element(by.xpath("//div[@id='cdk-overlay-0']//mat-option//span[.='Division']"))

        secondaryLevelBtn = element(by.xpath("//div//mat-select//span//span[.='None']"))
        secondaryLevelBtnCount = element.all(by.xpath("//div[@id='cdk-overlay-1']//div//mat-option"))
        secondaryLevelNone = element(by.xpath("//div[@id='cdk-overlay-1']//mat-option//span[.='None']"))
        secondaryLevelPlaces = element(by.xpath("//div[@id='cdk-overlay-1']//mat-option//span[.='Places']"))
        secondaryLevelPeople = element(by.xpath("//div[@id='cdk-overlay-1']//mat-option//span[.='People']"))
        secondaryLevelStatus = element(by.xpath("//div[@id='cdk-overlay-1']//mat-option//span[.='Status']"))
        secondaryLevelCategory = element(by.xpath("//div[@id='cdk-overlay-1']//mat-option//span[.='Category']"))
        secondaryLevelDivision = element(by.xpath("//div[@id='cdk-overlay-1']//mat-option//span[.='Division']"))
        var EC = protractor.ExpectedConditions;

        totalItemsText = element(by.xpath("//div[@class='table-summary']//span[@class='total']"))
        totalPeopleText = element(by.xpath("//div[@class='table-summary']//span[@class='total unique ng-star-inserted']"))

        filterByText = element(by.id('filterByLabelFilters'))

        commonlyUsedPanel = element(by.id('commonlyUsedPanelTitleFilters'))
        markedMissingCB = element(by.id('commonlyUsedSelectedTotalSpanFilters'))
        marketMissingImg = element(by.css("img[src='assets/img/reports/empty-state-none.png']"))
        marketMissingText = element(by.tagName("h4"))
        marketMissingSubText = element(by.xpath("//p[contains(text(),'Using too many filters and group by items')]"))
        marketMissingCancel = element(by.xpath("//div[@class='mat-chip-list-wrapper']//mat-chip//mat-icon['cancel']"))

        itemTrackingBtn = element(by.id('oneKeyExpansionFilters'))
        itemTrackingBtnCB1 = element(by.xpath("//span[.=' One-Key Tools ']"))
        oneKeyToolChip = element(by.xpath("//div[@class='mat-chip-list-wrapper']//mat-chip//div[' One-Key Tools ']"))
        oneKeyToolChipCancel = element(by.xpath("//div[@class='mat-chip-list-wrapper']//mat-chip//mat-icon['cancel']"))


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

        await groupByToggle.click()
        await browser.sleep(2000)
        await expect(groupBYSubText.getText()).toEqual('Organize data by selecting up to two levels of groups')
        await browser.sleep(1000)
        await topLevelBtn.click()
        await expect(topLevelBtnCount.count()).toBe(5);

        await expect(topLevelPlaces.isEnabled()).toBe(true)
        await expect(topLevelPeople.isEnabled()).toBe(true)
        await expect(topLevelStatus.isEnabled()).toBe(true)
        await expect(topLevelCategory.isEnabled()).toBe(true)
        await expect(topLevelDivision.isEnabled()).toBe(true)
        await browser.actions().doubleClick(reportSummary).perform()

        await secondaryLevelBtn.click()
        await expect(secondaryLevelBtnCount.count()).toBe(6);
        await expect(secondaryLevelNone.isEnabled()).toBe(true)
        await expect(secondaryLevelPlaces.isEnabled()).toBe(true)
        await expect(secondaryLevelPeople.isEnabled()).toBe(true)
        await expect(secondaryLevelStatus.isEnabled()).toBe(true)
        await expect(secondaryLevelCategory.isEnabled()).toBe(true)
        await expect(secondaryLevelDivision.isEnabled()).toBe(true)
        // browser.wait(EC.elementToBeClickable(secondaryLevelPlaces), 5000);
        await secondaryLevelPeople.click()
        await browser.sleep(2000)

        await expect(totalItemsText.isDisplayed()).toBe(true)
        await expect(totalPeopleText.isDisplayed()).toBe(true)
        await expect(totalPeopleText.getText()).toEqual('1 People')
        await browser.executeScript('window.scrollTo(0,500)')

        await itemTrackingBtn.click()
        await itemTrackingBtnCB1.click()
        await browser.sleep(2000)
        await browser.executeScript('window.scrollTo(800,0)')
        await browser.sleep(2000)
        // expect(oneKeyToolChip.getText()).toEqual('One-Key Tools')
        await expect(oneKeyToolChip.isEnabled()).toBe(true)
        await oneKeyToolChipCancel.click()

        await browser.sleep(1000)
        await commonlyUsedPanel.click()
        await markedMissingCB.click()
        await browser.sleep(3000)
        await expect(marketMissingImg.isDisplayed()).toBe(true)
        await expect(marketMissingText.getText()).toEqual('No Items Match Search Criteria')
        await expect(marketMissingSubText.getText()).toEqual('Using too many filters and group by items can yield no results that fit your search criteria. Try removing some categories for better results.')
        await marketMissingCancel.click()
        await browser.sleep(5000)

    })
})