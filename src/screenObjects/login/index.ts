import { AndroidSelector, IOSSelector } from '@interfaces/selectors';
import { IElementSelectorFactory, IScreenInit } from '@interfaces/mobile';
import {
  clickAndWait,
  getTextAndWait,
  sendKeys,
} from '@helpers/mobile/actions';

import { ChainablePromiseElement } from 'webdriverio/build/types';
import { ElementSelectorFactory } from '@screenObjects/elementSelectorFactory';
import { login } from './selectors';

export class LoginScreen implements IScreenInit {
  private _elementSelectorFactory: IElementSelectorFactory;
  private emailInput!: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private passwordInput!: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private loginBtn!: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private popUpOkBtn!: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private failedLogInTxt!: ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  >;

  constructor() {
    this._elementSelectorFactory = new ElementSelectorFactory();
    this.initializeElements();
  }
  initializeElements(): void {
    this.emailInput = $(
      this._elementSelectorFactory.getElement(
        IOSSelector.BY_ACCESSIBILITY_ID,
        AndroidSelector.BY_RESOURCE,
        login.emailInput,
      ),
    );
    this.passwordInput = $(
      this._elementSelectorFactory.getElement(
        IOSSelector.BY_ACCESSIBILITY_ID,
        AndroidSelector.BY_RESOURCE,
        login.passwordInput,
      ),
    );
    this.loginBtn = $(
      this._elementSelectorFactory.getElement(
        IOSSelector.BY_ACCESSIBILITY_ID,
        AndroidSelector.BY_RESOURCE,
        login.loginBtn,
      ),
    );
    this.popUpOkBtn = $(
      this._elementSelectorFactory.getElement(
        IOSSelector.BY_ACCESSIBILITY_ID,
        AndroidSelector.BY_ACCESSIBILITY_ID,
        login.popUpOkBtn,
      ),
    );
    this.failedLogInTxt = $(
      this._elementSelectorFactory.getElement(
        IOSSelector.BY_TEXT,
        AndroidSelector.BY_TOAST,
        login.failedLogInTxt,
      ),
    );
  }
  async doLogin(email: string, password: string): Promise<void> {
    await sendKeys(this.emailInput, email);
    await sendKeys(this.passwordInput, password);
    await clickAndWait(this.loginBtn);
  }
  async isSignInBtnEnabled(): Promise<boolean> {
    return this.loginBtn.isEnabled();
  }
  async getFailedLoginText(): Promise<string> {
    return await getTextAndWait(this.failedLogInTxt);
  }

  async closeOkPopUp(): Promise<void> {
    await clickAndWait(this.popUpOkBtn);
  }
}
