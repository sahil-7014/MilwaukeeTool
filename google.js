describe('enter search', function(){
    it('enter something', function(){
        browser.get('https://www.google.com/');
        element(by.xpath('//input[@class=\'gLFyf gsfi\']')).sendKeys('What is Protractor?');
        // var query = element(by.xpath('//*[@id="q"]'));
        // expect(query = 'What is Protractor?'); 
        browser.sleep();
  });
});