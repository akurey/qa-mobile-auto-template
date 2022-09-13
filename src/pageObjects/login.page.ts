import { sendKeys } from '@helpers/web';

class LoginPage {
  get usernameInput() {
    return $('input#usernameInput');
  }

  get passwordInput() {
    return $('input#passwordInput');
  }

  get loginBtn() {
    return $('#loginSubmitButton');
  }

  doLogin(email: string, password: string) {
    this.typeEmail(email);
    this.typePassword(password);

    this.loginBtn.click();
  }

  typeEmail(email: string) {
    sendKeys(this.usernameInput, email);
  }

  typePassword(password: string) {
    sendKeys(this.passwordInput, password);
  }
}
export default new LoginPage();
