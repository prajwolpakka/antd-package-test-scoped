/**
 * Sets a token in localStorage
 * @param token - The token to store
 * @param key - The exact storage key to use (e.g., accessToken, refresh, id, api, customKey)
 */
export const setToken = (token: string, key: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, token);
  }
};

/**
 * Gets a token from localStorage
 * @param key - The exact storage key to use (e.g., accessToken, refresh, id, api, customKey)
 * @returns The token or null if not found
 */
export const getToken = (key: string): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key);
  }
  return null;
};

/**
 * Removes a token from localStorage
 * @param key - The exact storage key to use (e.g., accessToken, refresh, id, api, customKey)
 */
export const removeToken = (key: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};
