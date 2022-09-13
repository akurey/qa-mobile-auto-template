import * as criptoJS from 'crypto-js';
import * as faker from 'faker';

export function generateEmail(): string {
  return faker.internet.email();
}
export function generateName(): string {
  return faker.name.findName();
}
export function generateZipCode(): string {
  return faker.address.zipCode();
}
export function generatePastDate(): string {
  return faker.date.past().toLocaleDateString();
}
