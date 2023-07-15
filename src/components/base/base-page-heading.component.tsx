import { memo } from 'react';
import { cx } from 'classix';

import type { ComponentProps } from 'react';

type Props = ComponentProps<'h1'> & {
  as?: any;
};

export const BasePageHeading = memo(function ({
  className,
  as: As = 'h1',
  children,
}: Props) {
  return <As className={cx('mb-8 text-center', className)}>{children}</As>;
});
