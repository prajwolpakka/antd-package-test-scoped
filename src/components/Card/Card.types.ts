import type { CardProps as AntdCardProps } from 'antd/es/card';

export interface CardProps extends AntdCardProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
}