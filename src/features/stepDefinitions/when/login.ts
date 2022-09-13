import { LoginScreen } from '@screenObjects/login';
import { TouchIdScreen } from '@screenObjects/touch-id';
import { When } from '@cucumber/cucumber';

When(
  'I login with email {string} and password {string}',
  async function (email: string, password: string) {
    const loginScreen = new LoginScreen();
    await loginScreen.doLogin(email, password);
  },
);
When('I skip touch ID', async function () {
  const touchIdScreen = new TouchIdScreen();
  await touchIdScreen.skipTouchId();
});
