/**
 * Validates if a string is a valid password
 * Requirements: At least 8 characters, one uppercase, one lowercase, one number
 * @param password - The password string to validate
 * @returns true if valid, false otherwise
 */
export const validatePassword = (password: string): boolean => {
  // At least 8 characters, one uppercase, one lowercase, one number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};