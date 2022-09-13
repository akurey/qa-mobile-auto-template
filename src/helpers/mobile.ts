export function getButton(text: CustomSelector): string {
  let selector = '';
  if (browser.isIOS) {
    selector = `-ios predicate string:type == 'XCUIElementTypeButton' && name CONTAINS '${text.iOS}'`;
  } else {
    selector = `android=new UiSelector().text("${text.android}").className("android.widget.Button")`;
  }

  return selector;
}

export function getInput(text: CustomSelector): string {
  let selector = '';
  if (browser.isIOS) {
    selector = `-ios predicate string:type == 'XCUIElementTypeTextField' && name CONTAINS '${text.iOS}'`;
  } else {
    selector = `android=new UiSelector().text("${text.android}").className("android.widget.EditText")`;
  }

  return selector;
}

export function getText(text: CustomSelector): string {
  let selector = '';
  if (browser.isIOS) {
    selector = `-ios predicate string:type == 'XCUIElementTypeStaticText' name CONTAINS '${text.iOS}'`;
  } else {
    selector = `android=new UiSelector().text("${text.android}").className("android.widget.TextView")`;
  }

  return selector;
}

export function getId(text: CustomSelector): string {
  const selector = `~${text.iOS || text.android}`;
  return selector;
}

export function getTime(text: CustomSelector): string {
  let selector = '';
  if (browser.isIOS) {
    selector = `-ios predicate string:type == 'XCUIElementTypeButton' && name CONTAINS '${text.iOS}'`;
  } else {
    selector = `android=new UiSelector().resourceId("android:id/${text.android}")`;
  }

  return selector;
}

export function getImage(text: CustomSelector): string {
  let selector = '';
  if (browser.isIOS) {
    selector = `-ios predicate string:type == 'XCUIElementTypeImage' && name CONTAINS '${text.iOS}'`;
  } else {
    // TBD
  }

  return selector;
}

type CustomSelector = {
  android: string;
  iOS: string;
};
