this.aboutPage = function (browser) {
    browser
      .url('https://codeyourfuture.co/')
      .waitForElementVisible('body', 1000)
      .click('ul.nav>li')
      .waitForElementVisible('.section-description > h2', 1000)
      .assert.containsText('.section-description > h2', 'About US')
      .assert.containsText('.section-description', 'We are a non-profit organisation supporting refugees with the dream of becoming developers.')
      .end();
  };