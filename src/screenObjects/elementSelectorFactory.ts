import { AndroidSelector, IOSSelector } from '@interfaces/selectors';
import { IElementSelectorFactory, ISelector } from '@interfaces/mobile';
import {
  getButton as getAndroidButton,
  getButtonByDescription as getAndroidButtonByDescription,
  getId as getAndroidId,
  getInput as getAndroidInput,
  getResource as getAndroidResource,
  getText as getAndroidText,
  getToast as getAndroidToast,
} from '@helpers/mobile/android';
import {
  getButton as getIOSButton,
  getId as getIOSId,
  getInput as getIOSInput,
  getText as getIOSText,
} from '@helpers/mobile/ios';

export class ElementSelectorFactory implements IElementSelectorFactory {
  getElement(
    byIOS: IOSSelector,
    byAndroid: AndroidSelector,
    selectors: ISelector,
  ): string {
    const iOS = {
      [IOSSelector.BY_ACCESSIBILITY_ID]: selector => {
        return getIOSId(selector);
      },
      [IOSSelector.BY_BUTTON]: selector => {
        return getIOSButton(selector);
      },
      [IOSSelector.BY_INPUT]: selector => {
        return getIOSInput(selector);
      },
      [IOSSelector.BY_TEXT]: selector => {
        return getIOSText(selector);
      },
    };

    const android = {
      [AndroidSelector.BY_ACCESSIBILITY_ID]: selector => {
        return getAndroidId(selector);
      },
      [AndroidSelector.BY_BUTTON]: selector => {
        return getAndroidButton(selector);
      },
      [AndroidSelector.BY_BUTTON_DESCRIPTION]: selector => {
        return getAndroidButtonByDescription(selector);
      },
      [AndroidSelector.BY_INPUT]: selector => {
        return getAndroidInput(selector);
      },
      [AndroidSelector.BY_INPUTS]: selector => {
        return getAndroidInput(selector);
      },

      [AndroidSelector.BY_TEXT]: selector => {
        return getAndroidText(selector);
      },
      [AndroidSelector.BY_RESOURCE]: selector => {
        return getAndroidResource(selector);
      },
      [AndroidSelector.BY_TOAST]: selector => {
        return getAndroidToast(selector);
      },
    };

    return browser.isIOS
      ? iOS[byIOS](selectors.iOS)
      : android[byAndroid](selectors.android);
  }
}
