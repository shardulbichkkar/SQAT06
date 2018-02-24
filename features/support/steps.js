const { Given, When, Then } = require('cucumber') //This is how you declare Cumumber and it's methods Given. WHen THen 
const chai = require('chai') // Chai is just an assertion package.    URL: https://www.npmjs.com/package/chai   URL: http://chaijs.com/
const should = chai.should() //Here we only want to use should component of chai below in line#27

"use strict";
//THIS PROGRAM EXECUTES AS AN ASYNCHRONOUS PROGRAM - ALL LINES EXECUTE AT THE SAME TIME

Given('I go to duck duck go', function(callback) {
  this.browser
    .init()
    .url('https://duckduckgo.com/').then(function() {
      callback();// Callback will make sure that it ___________________
    })
})

When('I search for WebdriverIO', function(callback) {
  this.browser
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage').then(function(){
      callback();
    })
})

Then('I should see the search results', function(callback) {
  this.browser
    .getTitle().then(function(result){
        result.should.equal("WebeeeeedriverIO at DuckDuckGo"); //This line is your ASSERTION LINE - result. is actual result and "WebDriver....." is expected result
        callback();
  }).catch(function(error){ //this function returns and error    // catch is like the try-catch block to catch exceptions 
    callback(error); // I want this error to surface up. 
  }) // Asynchronous prgramming you have to be really explicit about what you want to do and when 
})