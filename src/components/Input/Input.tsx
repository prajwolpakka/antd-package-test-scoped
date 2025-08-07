import { Input as AntdInput } from 'antd';
import React from 'react';
import type { InputProps } from './Input.types';

const AntdInputComponent = AntdInput as unknown as React.ComponentType<any>;

export const Input = React.forwardRef<any, InputProps>(function Input(
  { icon, validator, className, ...props },
  ref
) {
  const classes = `custom-input ${className || ''}`;
  return (
    <div className="input-wrapper">
      {icon ? (
        <span className="input-icon">{icon as React.ReactNode}</span>
      ) : null}
      <AntdInputComponent
        ref={ref as any}
        className={classes}
        {...(props as any)}
      />
    </div>
  );
});
