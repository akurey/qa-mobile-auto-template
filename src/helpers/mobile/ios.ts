export const getButton = (text: string): string =>
  `-ios predicate string:type == 'XCUIElementTypeButton' && name == '${text}'`;

export const getInput = (text: string): string =>
  `-ios predicate string:type == 'XCUIElementTypeTextField' && name == '${text}'`;

export const getText = (text: string): string =>
  `-ios predicate string:type == 'XCUIElementTypeStaticText' && name == '${text}'`;

export const getId = (text: string): string => `~${text}`;
