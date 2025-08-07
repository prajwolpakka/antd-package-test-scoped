import { useState } from 'react';

export interface UseFormHandlerProps<T> {
  initialValues: T;
  validators?: Partial<Record<keyof T, (value: any) => string | null>>;
}

export function useFormHandler<T extends Record<string, any>>({
  initialValues,
  validators = {},
}: UseFormHandlerProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleChange = (key: keyof T, value: any) => {
    setValues((prev) => ({ ...prev, [key]: value }));

    // Run validator if provided
    if (validators[key]) {
      const error = validators[key]!(value);
      setErrors((prev) => ({ ...prev, [key]: error || null }));
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    let isValid = true;

    for (const key in validators) {
      if (validators[key as keyof T]) {
        const error = validators[key as keyof T]!(values[key as keyof T]);
        if (error) {
          newErrors[key as keyof T] = error;
          isValid = false;
        }
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  return {
    values,
    errors,
    handleChange,
    reset,
    validate,
    setValues,
  };
}
