export interface ISelector {
  android: string;
  iOS: string;
}

export interface IElementSelectorFactory {
  getElement(byIOS: string, byAndroid: string, selector: ISelector): string;
}

export interface IScreenInit {
  initializeElements(): void;
}
