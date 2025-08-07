import React from 'react';
import { Card as AntdCard } from 'antd';
import type { CardProps } from './Card.types';

const AntdCardComponent = AntdCard as unknown as React.ComponentType<any>;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { header, footer, children, ...props },
  ref
) {
  return (
    <AntdCardComponent title={header} ref={ref as any} {...(props as any)}>
      {children as React.ReactNode}
      {footer ? (
        <div className="card-footer">{footer as React.ReactNode}</div>
      ) : null}
    </AntdCardComponent>
  );
});
