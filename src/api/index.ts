import { config } from './config';

/**
 * Gets a countries list.
 */
export async function getCountries() {
  try {
    const result = await fetch(`${config.API_URL}`);
    return await result.json();
  } catch(e) {
    return e;
  }
}