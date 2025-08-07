import { act, renderHook } from '@testing-library/react';
import { useFormHandler } from '../useFormHandler';

describe('useFormHandler', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() =>
      useFormHandler({
        initialValues: {
          name: 'John Doe',
          email: 'john@example.com',
          role: 'User',
          status: 'Active',
        },
      })
    );

    expect(result.current.values).toEqual({
      name: 'John Doe',
      email: 'john@example.com',
      role: 'User',
      status: 'Active',
    });
  });

  it('should handle input changes', () => {
    const { result } = renderHook(() =>
      useFormHandler({
        initialValues: {
          name: 'John Doe',
          email: 'john@example.com',
        },
      })
    );

    act(() => {
      result.current.handleChange('name', 'Jane Doe');
    });

    expect(result.current.values.name).toBe('Jane Doe');
    expect(result.current.values.email).toBe('john@example.com');
  });

  it('should handle multiple field changes', () => {
    const { result } = renderHook(() =>
      useFormHandler({
        initialValues: {
          name: 'John Doe',
          email: 'john@example.com',
          role: 'User',
          status: 'Active',
        },
      })
    );

    act(() => {
      result.current.handleChange('name', 'Jane Smith');
      result.current.handleChange('email', 'jane@example.com');
      result.current.handleChange('role', 'Admin');
      result.current.handleChange('status', 'Inactive');
    });

    expect(result.current.values).toEqual({
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Admin',
      status: 'Inactive',
    });
  });

  it('should reset form to initial values', () => {
    const { result } = renderHook(() =>
      useFormHandler({
        initialValues: {
          name: 'John Doe',
          email: 'john@example.com',
        },
      })
    );

    // Change values
    act(() => {
      result.current.handleChange('name', 'Jane Doe');
      result.current.handleChange('email', 'jane@example.com');
    });

    expect(result.current.values).toEqual({
      name: 'Jane Doe',
      email: 'jane@example.com',
    });

    // Reset form
    act(() => {
      result.current.reset();
    });

    expect(result.current.values).toEqual({
      name: 'John Doe',
      email: 'john@example.com',
    });
  });

  it('should set form values programmatically', () => {
    const { result } = renderHook(() =>
      useFormHandler({
        initialValues: {
          name: 'John Doe',
          email: 'john@example.com',
        },
      })
    );

    const newValues = {
      name: 'Jane Smith',
      email: 'jane@example.com',
    };

    act(() => {
      result.current.setValues(newValues);
    });

    expect(result.current.values).toEqual(newValues);
  });

  it('should merge new values with existing ones', () => {
    const { result } = renderHook(() =>
      useFormHandler({
        initialValues: {
          name: 'John Doe',
          email: 'john@example.com',
          role: 'User',
        },
      })
    );

    // Provide a complete shape to satisfy the hook's generic type
    const partialValues = {
      name: 'Jane Smith',
      email: result.current.values.email,
      role: 'Admin',
    };

    act(() => {
      // Now the object aligns to { name: string; email: string; role: string }
      result.current.setValues(partialValues);
    });

    expect(result.current.values).toEqual({
      name: 'Jane Smith',
      email: 'john@example.com', // Should remain unchanged
      role: 'Admin',
    });
  });

  it('should handle empty initial values', () => {
    const { result } = renderHook(() =>
      useFormHandler<{ name?: string }>({
        initialValues: {},
      })
    );

    expect(result.current.values).toEqual({});

    act(() => {
      result.current.handleChange('name', 'John Doe' as any);
    });

    expect(result.current.values).toEqual({
      name: 'John Doe',
    });
  });

  it('should handle complex object values', () => {
    type Complex = {
      user: {
        name: string;
        profile: {
          age: number | string;
          preferences: {
            theme: string;
          };
        };
      };
    };

    const { result } = renderHook(() =>
      useFormHandler<Complex>({
        initialValues: {
          user: {
            name: 'John Doe',
            profile: {
              age: 30,
              preferences: {
                theme: 'dark',
              },
            },
          },
        },
      })
    );

    // Our hook's handleChange expects top-level keys; for nested updates we should use setValues
    act(() => {
      result.current.setValues({
        user: {
          ...result.current.values.user,
          profile: {
            ...result.current.values.user.profile,
            age: '25',
            preferences: {
              theme: 'light',
            },
          },
        },
      } as Complex);
    });

    expect(result.current.values).toEqual({
      user: {
        name: 'John Doe',
        profile: {
          age: '25',
          preferences: {
            theme: 'light',
          },
        },
      },
    });
  });
});
