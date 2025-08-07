import * as React from 'react';
import { Button as AntdButton } from 'antd';
import type { ButtonProps, DesignVariant } from './Button.types';

function mapVariant(variant?: DesignVariant): {
  type?: 'link' | 'text' | 'default' | 'primary' | 'dashed';
  danger?: boolean;
  extraClass?: string;
} {
  if (!variant) return { extraClass: '' };
  switch (variant) {
    case 'primary':
      return { type: 'primary', danger: false, extraClass: 'btn-primary' };
    case 'secondary':
      return { type: 'default', danger: false, extraClass: 'btn-secondary' };
    case 'danger':
      return { type: 'primary', danger: true, extraClass: 'btn-danger' };
    default:
      return { extraClass: '' };
  }
}

const AntdButtonComponent = AntdButton as unknown as React.ComponentType<any>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ variant, loading, className, ...props }, ref) {
    const mapped = mapVariant(variant);
    const classes = [mapped.extraClass, className]
      .filter(Boolean)
      .join(' ')
      .trim();

    return (
      <AntdButtonComponent
        ref={ref as any}
        className={classes || undefined}
        type={mapped.type}
        danger={mapped.danger}
        loading={loading}
        {...(props as any)}
      />
    );
  }
);
