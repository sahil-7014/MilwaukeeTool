describe('windows demo', function () {

    it('How to handle window', function () {

        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);

        browser.manage().timeouts().implicitlyWait(3000)

        browser.waitForElementDisplayed = function(element){
            return browser.wait(() => (element.isDisplayed()), 6000)
            
        }

        browser.waitForElement = function(element){
            return browser.wait(() => (element.isPresent()), 6000)
            
        }

        browser.get('http://demo.automationtesting.in/Windows.html');
        browser.waitForElementDisplayed = function(element){
            return browser.wait(() => (element.isDisplayed()), 6000)
            
        }
        element(by.xpath('//*[@id=\'Tabbed\']/a/button')).click();
        browser.waitForElementDisplayed = function(element){
            return browser.wait(() => (element.isDisplayed()), 6000)
            
        }
        var winHandles = browser.getAllWindowHandles();
        winHandles.then(function (handles) {

            var parentWindow = handles[0];
            var tabbedWindow = handles[1];

            browser.switchTo().window(tabbedWindow);

            browser.close()

            browser.switchTo().window(parentWindow);
            browser.waitForElementDisplayed = function(element){
                return browser.wait(() => (element.isDisplayed()), 8000)
                
            }

            browser.getTitle().then(title => {
                console.log("tabbed window title is :" + title);
            })
        })

    })
})


