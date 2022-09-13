import { AndroidSelector, IOSSelector } from '@interfaces/selectors';
import { IElementSelectorFactory, IScreenInit } from '@interfaces/mobile';

import { ChainablePromiseElement } from 'webdriverio/build/types';
import { ElementSelectorFactory } from '@screenObjects/elementSelectorFactory';
import { clickAndWait } from '@helpers/mobile/actions';
import { touchId } from './selectors';

export class TouchIdScreen implements IScreenInit {
  private _elementSelectorFactory: IElementSelectorFactory;
  private doLaterLink!: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private notificationsDontAllowBtn!: ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  >;

  constructor() {
    this._elementSelectorFactory = new ElementSelectorFactory();
    this.initializeElements();
  }
  initializeElements(): void {
    this.doLaterLink = $(
      this._elementSelectorFactory.getElement(
        IOSSelector.BY_ACCESSIBILITY_ID,
        AndroidSelector.BY_RESOURCE,
        touchId.doLaterLink,
      ),
    );
    this.notificationsDontAllowBtn = $(
      this._elementSelectorFactory.getElement(
        IOSSelector.BY_BUTTON,
        AndroidSelector.BY_RESOURCE,
        touchId.notificationsDontAllowBtn,
      ),
    );
  }
  async skipTouchId(): Promise<void> {
    if (await browser.isIOS) {
      await clickAndWait(this.notificationsDontAllowBtn);
    }
    await clickAndWait(this.doLaterLink);
  }
}
