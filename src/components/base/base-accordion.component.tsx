import { memo } from 'react';

import type { ComponentProps } from 'react';
import type { AccordionItem } from '#models/base.model';
import { cx } from 'classix';
import { BaseIcon } from './base-icon.component';

type Props = ComponentProps<'div'> & {
  items: AccordionItem[];
};

export const BaseAccordion = memo(function ({
  className,
  items,
  ...moreProps
}: Props) {
  return (
    <div className={cx('hs-accordion-group', className)} {...moreProps}>
      {items.map(({ title, content }, index) => (
        <div
          key={`key-${index}`}
          className='hs-accordion py-0 hs-accordion-active:py-4 first:!pt-0 transition-[padding]'
          id={`accordion-item-${index}`}
        >
          <button
            className='hs-accordion-toggle hs-accordion-active:text-primary-100 group py-1 inline-flex
              items-center gap-x-2 w-full text-left text-white/80 transition hover:text-primary-100'
            aria-controls={`accordion-item-${index}`}
          >
            <BaseIcon
              name='plus-square'
              className='hs-accordion-active:hidden hs-accordion-active:fill-primary-100 hs-accordion-active:group-hover:fill-primary-100
                block fill-white/80 group-hover:fill-primary-100'
            />
            <BaseIcon
              name='minus-square'
              className='hs-accordion-active:block hs-accordion-active:fill-primary-100 hs-accordion-active:group-hover:fill-primary-100
                hidden fill-white/80 group-hover:fill-primary-100'
            />
            {title}
          </button>
          <div
            id={`accordion-item-${index}`}
            className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
            aria-labelledby={`accordion-item-${index}`}
          >
            {content}
          </div>
        </div>
      ))}
    </div>
  );
});
