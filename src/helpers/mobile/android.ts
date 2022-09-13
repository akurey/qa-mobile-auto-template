export const getButton = (selector: string): string =>
  `android=new UiSelector().text("${selector}").className("android.widget.Button")`;

export const getButtonByDescription = (selector: string): string =>
  `android=new UiSelector().description("${selector}").className("android.widget.Button")`;

export const getInput = (selector: string): string =>
  `android=new UiSelector().text("${selector}").className("android.widget.EditText")`;

export const getInputs = (): string =>
  `android=new UiSelector().className("android.widget.EditText")`;

export const getText = (selector: string): string =>
  `android=new UiSelector().textContains("${selector}").className("android.widget.TextView")`;

export const getId = (selector: string): string => `~${selector}`;

export const getResource = (selector: string): string =>
  `android=new UiSelector().resourceId("${selector}")`;

export const getToast = (selector: string): string =>
  `android=new UiSelector().text("${selector}").className("android.widget.Toast")`;
