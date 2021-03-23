let beforeLogin = require('../Pages/beforeLogin');

describe('verifying Home', function(){

    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);

    it('verifying WhyoneKey', async function(){
        
    await browser.get('https://onekeystaging.milwaukeetool.com/')

    onekeyLogo = element(by.css('img[src="/-/media/OneKey/logo-onekey--small.svg?mh=84&la=en&mw=155&hash=4B31249F0AD01AAB8B89B6F94ED5537F1605AE33"]'))
    milwaukeeLogo = element(by.css('img[src="/-/media/Feature/Identity/logo-milwaukee.png?mh=50&la=en&h=49&w=90&mw=90&hash=6D00DDD1E578F2156DC81EBDD35E56511231CA7E"]'))
    backgroundImg = element(by.css('img[src="/-/media/OneKey/OK-Two-devices-mockup_03_web_noshadow.png?h=388&w=581&la=en&hash=181F88AB13F9915C9997F370891539522A6463E0"]'))
    homeText = element(by.linkText('Home'))
    launchBtn = element(by.linkText('Launch App'))
    whyonekeyBtn = element(by.linkText('Why One-Key'))
    connectedtoolsBtn = element(by.linkText('One-Key Connected Tools'))
    resourcesBtn = element(by.linkText('Resources'))
    supportBtn = element(by.linkText('support'))
    addLink = element(by.linkText('you can add links now!'))
    learnmoreBtn = element(by.linkText('Learn More'))
    playvideoBtn = element(by.partialLinkText('Play Video'))
    frontText = element(by.xpath('//h3[@class=\'two-col__title\']'))
    smallText = element(by.xpath('/html/body/main/div[2]/div/div[1]/div/div/p'))
    featureIcon1 = element(by.css('img[src="/-/media/OneKey/Icons/icon-radar/radar_icon_dark.png?h=101&w=96&la=en&hash=AEE4D7B0FDC10F9DDDCE36AF9C8C46F194375975"]'))
    featureIcon2 = element(by.css('img[src="/-/media/OneKey/Icons/icon-drill2/drill_icon_dark.png?h=110&w=121&la=en&hash=B08C309F42E8B8F1B6CD645DEA9ECA058FE3B48B"]'))
    featureIcon3 = element(by.css('img[src="/-/media/OneKey/Icons/icon-computer/computer_icon_dark.png?h=99&w=110&la=en&hash=CE01E69A7AA8BFC57AD3D17191B07C6BF6969449"]'))


    expect(onekeyLogo.isDisplayed()).toBe(true);
    browser.manage().timeouts().implicitlyWait(4000);
    expect(milwaukeeLogo.isDisplayed()).toBe(true);
    browser.manage().timeouts().implicitlyWait(4000);
    expect(backgroundImg.isDisplayed()).toBe(true);
    browser.manage().timeouts().implicitlyWait(4000);
    expect(homeText.getText()).toEqual('Home')
    browser.manage().timeouts().implicitlyWait(4000);
    expect(launchBtn.getText()).toEqual('Launch App')
    browser.manage().timeouts().implicitlyWait(4000);
    expect(whyonekeyBtn.getText()).toEqual('Why One-Key')
    browser.manage().timeouts().implicitlyWait(4000);
    expect(connectedtoolsBtn.getText()).toEqual('One-Key Connected Tools')
    browser.manage().timeouts().implicitlyWait(4000);
    expect(resourcesBtn.getText()).toEqual('Resources')
    browser.manage().timeouts().implicitlyWait(4000);
    expect(addLink.isEnabled()).toBe(true)
    expect(addLink.getText()).toEqual('you can add links now!')
    browser.manage().timeouts().implicitlyWait(4000);
    expect(learnmoreBtn.getText()).toEqual('Learn More')
    browser.manage().timeouts().implicitlyWait(4000);
    expect(playvideoBtn.getText()).toEqual('Play Video')
    browser.manage().timeouts().implicitlyWait(4000);
    expect(frontText.getText()).toEqual('Connected Solutions, Advancing the Job')
    browser.manage().timeouts().implicitlyWait(4000);
    expect(smallText.getText()).toEqual('Small setbacks cause big problems. Solve them with ONE‑KEY™ - a tool and equipment platform that helps jobs run smoother, with fewer headaches along the way. [you can add links now!]')
    browser.manage().timeouts().implicitlyWait(4000);

    })
})
