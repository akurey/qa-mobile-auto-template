import { AndroidSelector, IOSSelector } from '@interfaces/selectors';
import { IElementSelectorFactory, IScreenInit } from '@interfaces/mobile';

import { ChainablePromiseElement } from 'webdriverio/build/types';
import { ElementSelectorFactory } from '@screenObjects/elementSelectorFactory';
import { clickAndWait } from '@helpers/mobile/actions';
import { home } from './selectors';

export class HomeScreen implements IScreenInit {
  private _elementSelectorFactory: IElementSelectorFactory;
  private signInButton!: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  constructor() {
    this._elementSelectorFactory = new ElementSelectorFactory();
    this.initializeElements();
  }
  initializeElements(): void {
    this.signInButton = $(
      this._elementSelectorFactory.getElement(
        IOSSelector.BY_ACCESSIBILITY_ID,
        AndroidSelector.BY_RESOURCE,
        home.signInButton,
      ),
    );
  }

  async goToSignIn(): Promise<void> {
    await clickAndWait(this.signInButton);
  }
}
