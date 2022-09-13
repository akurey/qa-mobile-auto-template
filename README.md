# Test Automation Framework

Centralized repository for QA Automated Testing

Technology Stack: Webdriver.io, Appium, WebDriverJS, Chai & CucumberJS

Contains an example of a test for the Carely Family App login feature

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development of each test cases and testing purposes.

## Prerequisites

1. Install Homebrew: `https://brew.sh/`
2. NVM Website `https://github.com/nvm-sh/nvm`
3. Run the following commands: `nvm install` and `nvm use`
4. Install Node Packages: `npm i` or `yarn`

## Setting up

- You need to have XCode and Android Studio installed and set up your devices for testing

- To install appium follow the guide `https://docs.google.com/document/d/1FD7HlTBf-A-PdbBNeNE1q-rNg65RWsXUuWcZqOZX2o8/edit?usp=sharing`

- Java 9: `https://www.oracle.com/java/technologies/javase/javase9-archive-downloads.html`

- After you have successfuly set up Appium, you need to change add to the root of the project a file named .env and define the following in it

- Appium user guide `https://docs.google.com/document/d/1ab-0GnURw9emkvKkfyiozfnhMAOsXDAExCJd1Fh6cio/edit?usp=sharing`

```
PROJECT='The name of the project'
BROWSER='the browser to use'
IOS_APP='the path were the ios .app file is'
ANDROID_APP='the path were the android .apk file is'
IOS_DEVICE='the name of the ios device'
ANDROID_DEVICE='the name of the android device'
TEMP_MAIL_BASE_URL='If you are using temp mail, this is the API BASE URL'
TEMP_MAIL_API_KEY='The security key needed to access to the Temp Mail EPs'
```

# Folder Structure

This Automation framework follows the Page Object Model standard,

Web Objects are located in `/src/pageObjects`
Mobile Objects are located in `/src/screenObjects`

Other locations:

`/src/features`: Contain all the definition of the tests, and step definitions

`/src/helpers`: Contain select functions to get elements either on android or ios, also contain gestures to perform on the devices, as well as actions to perform on the elements

`/src/interfaces`: Contain the needed interfaces or types.

`/src/config`: Contains the necesary info to execute the tests on certain device, with certain apk, timeout parameters...

# Useful commands

Inside the `package.json` are scripts declared to run common tasks:

- `npm run web`: Will start testing Web tests
- `npm run ios`: Will start testing iOS device tests
- `npm run android`: Will start testing Android device tests
- `npm run android:dev`: Will start testing Android device tests but only the ones with the @Dev tag
- `npm run ios:dev`: Will start testing iOS device tests but only the ones with the @Dev tag
- `npm run lint`: Will lint all the `*.js` & `*.ts` files based on the `.eslintrc` configuration.

# Gherkin lint

To aid the correct formatting of the feature documents we use gherking lint, to enable it:

- command + shift + p
- select "Preferences: Open Workspace Settings"
- add to that file the following

```
{"cucumberautocomplete.formatConfOverride": {
    "Ability": 0,
    "Business Need": 0,
    "Feature:": 0,
    "Scenario:": 1,
    "Background:": 1,
    "Scenario Outline:": 1,
    "Examples:": 2,
    "Given": 2,
    "When": 2,
    "Then": 2,
    "And": 3,
    "But": 3,
    "\\*": 2,
    "\\|": 2,
    "\"\"": 2,
    "#": "relative",
    "@": "relative"
},
"editor.formatOnSave":true
}
```
