
describe('Learn More', function(){

    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);

    it('Logging In',  function(){   
        
        browser.get('https://onekeystaging.milwaukeetool.com/')

        launchBtn = element(by.xpath('//a[@title=\'Launch App\']'))
        emailText = element(by.xpath('//input[@name=\'email\']'))
        passText = element(by.xpath('//input[@name=\'password\']'))
        loginbtn = element(by.xpath('//span[@class=\'auth0-label-submit\']'))
        reportbtn = element(by.id('reportsSpanSiteNavDrawer'))
        torqueWrench = element(by.id('torqueReportsSpanSiteNavDrawer'))
        reportSummary = element(by.id('reportSummarySpanTorqueWrench'))
        learnMoreBtn = element(by.id('learnMoreButtonTorqueWrench'))


        launchBtn.click()
        browser.manage().timeouts().implicitlyWait(10000);
        emailText.sendKeys('Demotest2@mailinator.com');
        passText.sendKeys('Test@123');
        loginbtn.click();
        browser.manage().timeouts().implicitlyWait(10000);
        reportbtn.click();
        torqueWrench.click();
        browser.manage().timeouts().implicitlyWait(10000);
        reportSummary.click()
        browser.manage().timeouts().implicitlyWait(10000);
        expect(learnMoreBtn.isEnabled()).toBe(true)

        // PAGE 1
        pageTitle1 = element(by.id('dtwReportSlide1TitleH2Carousel'))
        pageTitle1Mini = element(by.id('dtwReportSlide1TextPCarousel'))
        page1Img = element(by.id('torqueWrenchImgCarousel'))
        page1SubtitleText = element(by.id('dtwReportSlide1SubTitleH3Carousel'))
        page1SubtitleTextMini = element(by.id('dtwReportSlide1SubTextPCarousel'))
        NextPage2Btn = element(by.id('chevronRight'))

        // PAGE 2
        pageTitle2 = element(by.id('dtwReportSlide2TitleH2Carousel'))
        page2Img1 = element(by.id('saveEventsImgCarousel'))
        page2Img1Title = element(by.id('dtwReportSlide2Col1SubTitleH3Carousel'))
        page2Img1SubTitle = element(by.id('dtwReportSlide2Col1SubTextPCarousel'))
        page2Img2 = element(by.id('uploadEventsImgCarousel'))
        page2Img2Title = element(by.id('dtwReportSlide2Col2SubTitleH3Carousel'))
        page2Img2SubTitle = element(by.id('dtwReportSlide2Col2SubTextPCarousel'))
        page2Img3 = element(by.id('buildReportImgCarousel'))
        page2Img3Title = element(by.id('dtwReportSlide2Col3SubTitleH3Carousel'))
        page2Img3SubTitle = element(by.id('dtwReportSlide2Col3SubTextPCarousel'))
        nextPage3Btn = element(by.id('chevronRight'))

        //PAGE 3
        pageTitle3 = element(by.id('dtwReportSlide3TitleH2Carousel'))
        page3Img1 = element(by.id('selectToolsImgCarousel'))
        page3Img1Title = element(by.id('dtwReportSlide3Col1SubTitleH3Carousel'))
        page3Img1SubTitle = element(by.id('dtwReportSlide3Col1SubTextPCarousel'))
        page3Img2 = element(by.id('manageDataImgCarousel'))
        page3Img2Title = element(by.id('dtwReportSlide3Col2SubTitleH3Carousel'))
        page3Img2SubTitle = element(by.id('dtwReportSlide3Col2SubTextPCarousel'))
        page3Img3 = element(by.id('downloadReportImgCarousel'))
        page3Img3Title = element(by.id('dtwReportSlide3Col3SubTitleH3Carousel'))
        page3Img3SubTitle = element(by.id('dtwReportSlide3Col3SubTextPCarousel'))


        // PAGE 1 IMPLEMENTATION
        learnMoreBtn.click()
        browser.sleep(4000)
        expect(pageTitle1.getText()).toEqual("M12™ Digital Torque Wrench Reporting")
        browser.manage().timeouts().implicitlyWait(4000);
        expect(pageTitle1Mini.getText()).toEqual('Getting the most out of your torque wrench.')
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page1Img.isDisplayed()).toBe(true)
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page1SubtitleText.getText()).toEqual('Why make torque wrench reports?')
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page1SubtitleTextMini.getText()).toEqual('Torque reporting allows you to build transparency to your customers or crew. Within minutes, run detailed reports that show proof-of-work and confirm your job has been completed successfully. Then, export your reports as PDF or CSV for easy sharing or record keeping.')
        browser.manage().timeouts().implicitlyWait(4000);
        expect(NextPage2Btn.isEnabled()).toBe(true)
        NextPage2Btn.click()
        browser.sleep(2000)

        // PAGE 2 IMPLEMENTATION
        expect(pageTitle2.getText()).toEqual('Getting started with reports is easy')
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page2Img1.isDisplayed()).toBe(true)
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page2Img1Title.getText()).toEqual('Save events on your tool.')
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page2Img1SubTitle.getText()).toEqual("Once you've finished fastening, press the save button to log the event to your tool's memory.")
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page2Img2.isDisplayed()).toBe(true)
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page2Img2Title.getText()).toEqual('Upload events to your account.')
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page2Img2SubTitle.getText()).toEqual('Connecting to your tool with One-Key will automatically begin reading events and syncing to the web.')
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page2Img3.isDisplayed()).toBe(true)
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page2Img3Title.getText()).toEqual('Build a torque wrench report.')
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page2Img3SubTitle.getText()).toEqual('Once your tool has been added to inventory, log in to the One-Key website to begin building your torque report.')
        browser.manage().timeouts().implicitlyWait(4000);
        expect(nextPage3Btn.isEnabled()).toBe(true)
        nextPage3Btn.click()
        browser.sleep(3000)

        //PAGE 3 IMPLEMENTATION
        expect(pageTitle3.getText()).toEqual('How to build a torque wrench report')
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page3Img1.isDisplayed()).toBe(true)
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page3Img1Title.getText()).toEqual('Select tools for your report.')
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page3Img1SubTitle.getText()).toEqual('Choose from available tools in your inventory to begin building your report.')
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page3Img2.isDisplayed()).toBe(true)
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page3Img2Title.getText()).toEqual('Manage your saved events.')
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page3Img2SubTitle.getText()).toEqual("Determine which events you'd like to appear on your report. Pick a date range or manage individual events.")
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page3Img3.isDisplayed()).toBe(true)
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page3Img3Title.getText()).toEqual('Download your report.')
        browser.manage().timeouts().implicitlyWait(4000);
        expect(page3Img3SubTitle.getText()).toEqual('Select your preferred file format. PDFs and CSVs are available.')        
        browser.sleep(3000)

    })
})