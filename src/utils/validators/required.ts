/**
 * Validates if a value is not empty
 * @param value - The value to validate
 * @returns true if not empty, false otherwise
 */
export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};