/**
 * Sets a token in localStorage
 * @param token - The token to store
 * @param type - The type of token (access or refresh)
 */
export const setToken = (token: string, type: 'access' | 'refresh'): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(`${type}Token`, token);
  }
};

/**
 * Gets a token from localStorage
 * @param type - The type of token (access or refresh)
 * @returns The token or null if not found
 */
export const getToken = (type: 'access' | 'refresh'): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(`${type}Token`);
  }
  return null;
};

/**
 * Removes a token from localStorage
 * @param type - The type of token (access or refresh)
 */
export const removeToken = (type: 'access' | 'refresh'): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(`${type}Token`);
  }
};