const express = require('express');
const { Key, By, Builder, until } = require('selenium-webdriver');
require('chromedriver');
const axios = require('axios');
const { MongoClient } = require('mongodb');
const { v4: uuidv4 } = require('uuid');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 3000;

// Grab environment variables for MongoDB and other credentials
const mongoUri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME;
const collectionName = process.env.MONGO_COLLECTION_NAME;
const email = process.env.EMAIL;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

async function runSeleniumScript() {
    let driver = await new Builder().forBrowser('chrome').build();
    let result = {
        topics: [],
        dateTime: new Date(),
        ipAddress: '',
        uniqueId: uuidv4()
    };

    try {
        await driver.get('https://x.com');

        // Let's find the 'Sign in' link and make sure it's clickable
        let signInButton = await driver.wait(until.elementLocated(By.partialLinkText('Sign in')), 20000);
        await driver.wait(until.elementIsVisible(signInButton), 20000);
        await driver.wait(until.elementIsEnabled(signInButton), 20000);

        // Scroll into view if necessary
        await driver.executeScript("arguments[0].scrollIntoView(true);", signInButton);

        // Now, let's click the 'Sign in' link
        await signInButton.click();

        // Wait for the login page to load up
        await driver.wait(until.titleContains('Log in'), 20000);
        let title = await driver.getTitle();

        if (!title.includes("Log in")) {
            console.log('Failed to load login page');
            return result;
        }

        console.log('Login page loaded');

        // Enter email
        let emailField = await driver.wait(until.elementLocated(By.name('text')), 20000);
        await emailField.sendKeys(email, Key.RETURN);

        // Check for unusual login activity pop-up
        let unusualActivityPopUp;
        try {
            unusualActivityPopUp = await driver.wait(until.elementLocated(By.name('text')), 5000);
        } catch (error) {
            unusualActivityPopUp = null;
        }

        if (unusualActivityPopUp) {
            console.log('Unusual login activity pop-up found, entering username.');
            try {
                await unusualActivityPopUp.clear(); // Clear the field first
                await unusualActivityPopUp.sendKeys('Akatsuki___Pain', Key.RETURN);
            } catch (staleElementError) {
                console.log('Stale element error occurred, attempting to re-locate the element.');
                // Re-locate the element
                unusualActivity}
            }
        }
    }