import type { ButtonProps as AntdButtonProps } from 'antd/es/button';

export type DesignVariant = 'primary' | 'secondary' | 'danger';

export type ButtonProps = Omit<
  AntdButtonProps,
  'variant' | 'type' | 'danger' | 'loading' | 'className'
> & {
  variant?: DesignVariant;
  loading?: boolean;
  className?: string;
};
