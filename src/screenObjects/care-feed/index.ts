import { AndroidSelector, IOSSelector } from '@interfaces/selectors';
import { IElementSelectorFactory, IScreenInit } from '@interfaces/mobile';

import { ChainablePromiseElement } from 'webdriverio/build/types';
import { ElementSelectorFactory } from '@screenObjects/elementSelectorFactory';
import { careFeed } from './selectors';
import { getTextAndWait } from '@helpers/mobile/actions';

export class CareFeedScreen implements IScreenInit {
  private _elementSelectorFactory: IElementSelectorFactory;
  private careFeedScreenTitle!: ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  >;

  constructor() {
    this._elementSelectorFactory = new ElementSelectorFactory();
    this.initializeElements();
  }
  initializeElements(): void {
    this.careFeedScreenTitle = $(
      this._elementSelectorFactory.getElement(
        IOSSelector.BY_TEXT,
        AndroidSelector.BY_ACCESSIBILITY_ID,
        careFeed.careFeedScreenTitle,
      ),
    );
  }
  async getCareFeedTitleText(): Promise<string> {
    return await getTextAndWait(this.careFeedScreenTitle);
  }
}
