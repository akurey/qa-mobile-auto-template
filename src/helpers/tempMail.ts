import { MD5 } from 'crypto-js';
import { TempMail } from '@interfaces/tempEmail';
import axios from 'axios';
const headers = {
  headers: {
    'x-rapidapi-key': process.env.TEMP_MAIL_API_KEY,
  },
};
export async function getDomains(): Promise<string> {
  const { data } = await axios.get(
    `${process.env.TEMP_MAIL_BASE_URL}/domains/`,
    headers,
  );
  return data[0].trim();
}
export async function getEmails(email: string, delay = 1): Promise<TempMail[]> {
  await sleep(4);
  email = MD5(email).toString();
  const { data } = await axios.get(
    `${process.env.TEMP_MAIL_BASE_URL}/mail/id/${email}/`,
    headers,
  );
  if (data.error || data.length <= 1) {
    await sleep(delay);
    return getEmails(email, delay * 2);
  } else {
    return data;
  }
}
export const readEmail = async (userEmail: string): Promise<string[]> => {
  const emails = await getEmails(userEmail);
  const results = [];
  for (const email of emails) {
    //It will only include the ones that match the Regexp
    const matches = email.mail_text.match(/\/[0-9]{4}/g);
    if (matches != null) {
      results.push(matches[0]);
    }
  }
  return results;
};

function sleep(seconds: number) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
