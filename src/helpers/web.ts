const standardTimeout = 8000;

export function sendKeys(element: WebdriverIO.Element, text: string): void {
  element.waitForDisplayed({ timeout: standardTimeout })
  if (text.trim() === '') {
    element.click()
    element.keys('Enter')
  } else {
    element.clearValue()
    element.addValue(text)
  }
}

export function waitBrowser(url: string): void {
  browser.waitUntil(() => browser.getUrl() === url,
    { timeout: standardTimeout, timeoutMsg: 'expected url to be redirected after 8s' })
}

export function waitText(element: WebdriverIO.Element, text: string): void {
  browser.waitUntil(() => element.getText() === text,
    { timeout: standardTimeout, timeoutMsg: `expected text to be ${text} after 8s` })
}

export function waitPagetoLoad(): void {
  browser.waitUntil(() => browser.execute(
    () => document.readyState
  ) === 'complete',
    { timeout: 10000, timeoutMsg: 'Page did not load successfuly' })
}

export function clickAndWait(element: WebdriverIO.Element): void {
  waitPagetoLoad()
  element.waitForExist({ timeout: standardTimeout })
  element.click()
}

export function getTextAndWait(element: WebdriverIO.Element): string {
  waitPagetoLoad()

  element.waitForDisplayed(({ timeout: standardTimeout }))

  return element.getText()
}

export function clickAndWaitForEnabled(element: WebdriverIO.Element): void {
  element.waitForEnabled({ timeout: standardTimeout })
  element.click()
}

export function clickAndWaitForDisplayed(element: WebdriverIO.Element): void {
  waitPagetoLoad()
  element.waitForDisplayed({ timeout: standardTimeout })
  element.click()
}

export function scrollAndWait(element: WebdriverIO.Element): void {
  element.waitForExist({ timeout: standardTimeout })
  element.scrollIntoView()
  element.click()
}

export function random(element: Array<WebdriverIO.Element>): number {
  return Math.floor(Math.random() * (element.length - 1))
}

export function waitForElements(element: Array<WebdriverIO.Element>): void {
  browser.waitUntil(() => element.map((elem) => elem.isDisplayed()).length >= 1)
}

