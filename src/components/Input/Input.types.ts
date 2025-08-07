import type { InputProps as AntdInputProps } from 'antd/es/input';

export interface InputProps extends AntdInputProps {
  icon?: React.ReactNode;
  validator?: (value: string) => boolean;
}