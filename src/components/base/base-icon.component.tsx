import { memo, useMemo } from 'react';
import { ArrowSquareDown, ArrowSquareRight } from '@phosphor-icons/react';

import type { Icon, IconProps } from '@phosphor-icons/react';
import type { IconName } from '#models/base.model';

type Props = IconProps & {
  name: IconName;
};

export const BaseIcon = memo(function ({ name, ...moreProps }: Props) {
  const Icon: Icon | null = useMemo(() => {
    switch (name) {
      case 'arrow-square-down':
        return ArrowSquareDown;
      case 'arrow-square-right':
        return ArrowSquareRight;
    }
  }, [name]);

  if (!Icon) {
    return null;
  }

  return <Icon {...moreProps} />;
});
