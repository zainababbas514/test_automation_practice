const { defineConfig } = require("cypress")

module.exports = defineConfig({
    reporter: "cypress-mochawesome-reporter",

    reporterOptions: {
        charts: true,
        reportPageTitle: "DemoQA Test Automation",
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false
    },

    e2e: {
        video: true,
        screenshotOnRunFailure: true,

        setupNodeEvents(on, config) {
            require("cypress-mochawesome-reporter/plugin")(on)
        },

        baseUrl: "https://testautomationpractice.blogspot.com/"
    }
})