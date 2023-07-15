import { memo, useMemo } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';
import { cx } from 'classix';

import { Service } from '#models/service.model';

import type { ComponentProps } from 'react';

type Props = ComponentProps<'div'> & {
  service: Service;
};

export const ServiceCard = memo(function ({
  className,
  service,
  ...moreProps
}: Props) {
  const link = useMemo(() => `/services/${service.slug}`, [service]);

  const title = useMemo(() => service.title || '', [service]);

  const excerpt = useMemo(() => service.excerpt || '', [service]);

  const image = useMemo(
    () => !!service.iconImage && getImage(service.iconImage),
    [service],
  );

  return (
    <div
      className={cx('relative py-5 max-w-[292px] w-full', className)}
      {...moreProps}
    >
      <div className='pt-3.5 pb-9 h-[140px] w-full flex justify-center items-center border-b border-[#0054a8]'>
        {image && (
          <GatsbyImage className='relative z-10' image={image} alt={title} />
        )}
        <div className='absolute top-0 left-1/2 -translate-x-1/2 opacity-60'>
          <StaticImage
            src='../../assets/images/services-icon-glow.png'
            alt=''
          />
        </div>
      </div>
      <div className='flex flex-col justify-start items-center pt-9 w-full h-[212px]'>
        <Link to={link} className='hover:no-underline'>
          <h4 className='mb-6 max-w-[170px] w-full text-lg text-center leading-[23px] hover:text-primary-100 transition-colors'>
            {title}
          </h4>
        </Link>
        <p className='max-w-[200px] w-full text-sm'>{excerpt}</p>
      </div>
    </div>
  );
});
