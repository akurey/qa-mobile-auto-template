import { CareFeedScreen } from '@screenObjects/care-feed';
import { LoginScreen } from '@screenObjects/login';
import { Then } from '@cucumber/cucumber';
import { assert } from 'chai';

Then('I must be on the Care Feed screen', async function () {
  const careFeedScreen = new CareFeedScreen();
  assert.equal(await careFeedScreen.getCareFeedTitleText(), 'Care Feed');
});

Then('The Sign in button must be disabled', async function () {
  const loginScreen = new LoginScreen();
  assert.isFalse(await loginScreen.isSignInBtnEnabled());
});
Then('A Credentials error message must be shown', async function () {
  const loginScreen = new LoginScreen();
  const assertMsg =
    browser.isIOS === true ? 'Login failed' : 'Your credentials are wrong!';
  const actualMsg = await loginScreen.getFailedLoginText();
  if (browser.isIOS) {
    await loginScreen.closeOkPopUp();
  }
  assert.equal(actualMsg, assertMsg);
});
