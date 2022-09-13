export enum AndroidSelector {
  BY_ACCESSIBILITY_ID = 'accessibilityId',
  BY_BUTTON = 'button',
  BY_BUTTON_DESCRIPTION = 'buttonDescription',
  BY_INPUT = 'input',
  BY_INPUTS = 'inputs',
  BY_TEXT = 'text',
  BY_RESOURCE = 'resource',
  BY_TOAST = 'toast',
}

export enum IOSSelector {
  BY_ACCESSIBILITY_ID = 'accessibilityId',
  BY_BUTTON = 'button',
  BY_INPUT = 'input',
  BY_TEXT = 'text',
}

export interface ISelector {
  android: string;
  ios: string;
}
