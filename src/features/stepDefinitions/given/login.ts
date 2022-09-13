import { Given } from '@cucumber/cucumber';
import { HomeScreen } from '@screenObjects/home';
import { LoginScreen } from '@screenObjects/login';

Given('I go to the Sign In screen', async function () {
  const homeScreen = new HomeScreen();
  await homeScreen.goToSignIn();
});
