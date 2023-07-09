import { memo, useMemo } from 'react';
import { ArrowSquareDown } from '@phosphor-icons/react';

import type { Icon, IconProps } from '@phosphor-icons/react';

export type IconName = 'arrow-square-down';

type Props = IconProps & {
  name: IconName;
};

export const BaseIcon = memo(function ({ name, ...moreProps }: Props) {
  const Icon: Icon | null = useMemo(() => {
    switch (name) {
      case 'arrow-square-down':
        return ArrowSquareDown;
    }
  }, [name]);

  if (!Icon) {
    return null;
  }

  return <Icon {...moreProps} />;
});
