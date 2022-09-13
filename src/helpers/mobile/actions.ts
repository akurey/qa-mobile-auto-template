import { ChainablePromiseElement } from 'webdriverio/build/types';

export async function getTextAndWait(
  element: ChainablePromiseElement<Promise<WebdriverIO.Element>>,
): Promise<string> {
  await element.waitForExist();
  return (await element.getText()).trim();
}

export async function sendKeys(
  element: ChainablePromiseElement<Promise<WebdriverIO.Element>>,
  text: string,
): Promise<void> {
  await element.clearValue();
  await element.addValue(text);
}

export async function clickAndWait(
  element: ChainablePromiseElement<Promise<WebdriverIO.Element>>,
): Promise<void> {
  await element.waitForExist();
  await element.click();
}
