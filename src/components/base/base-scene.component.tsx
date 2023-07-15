import { cx } from 'classix';
import { ComponentProps } from 'react';

export function BaseScene({
  className,
  children,
  ...moreProps
}: ComponentProps<'div'>) {
  return (
    <div
      className={cx('px-4 pt-[80px] mx-auto max-w-main', className)}
      {...moreProps}
    >
      {children}
    </div>
  );
}
