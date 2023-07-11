import { memo } from 'react';
import { cx } from 'classix';
import { StaticImage } from 'gatsby-plugin-image';

import { BaseIcon } from '#components/base/base-icon.component';
import { ServiceCard } from '#components/service/service-card.component';

import type { ComponentProps } from 'react';
import type { Service } from '#models/service.model';
import { BaseButtonLink } from '#components/base/base-button-link.component';

type Props = ComponentProps<'section'> & {
  services: Service[];
  title: string;
  contentHtml?: string | TrustedHTML;
};

export const HomeOurServicesSection = memo(function ({
  className,
  services,
  title,
  contentHtml,
  ...moreProps
}: Props) {
  return (
    <div className='relative'>
      <section
        className={cx('mt-[212px] px-4 mx-auto max-w-main', className)}
        {...moreProps}
      >
        <div className='rounded-2xl overflow-hidden drop-shadow-2xl shadow-[inset_0px_0px_8px_2px_rgba(255,255,255,0.2)]'>
          {/* Services */}
          <div className='flex justify-center items-start px-5 bg-primary-300/30'>
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                className='before:content-[""] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-px 
                  before:h-[calc(100%-40px)] before:border-r before:border-[#0054a8] last:before:border-transparent'
                service={service}
              />
            ))}
          </div>
          {/* Header */}
          <div className='relative pt-9 pb-6 bg-accent/30'>
            <div className='relative flex flex-col justify-start items-center mx-auto max-w-[750px] w-full z-10'>
              <h3 className='mb-4 text-center'>{title}</h3>
              <div
                className='text-center'
                dangerouslySetInnerHTML={{ __html: contentHtml as string }}
              />
              <BaseButtonLink className='mt-2' to='/services' variant='ghost'>
                <span className='text-default'>Explore Further</span>
                <BaseIcon name='arrow-square-right' size={22} />
              </BaseButtonLink>
            </div>
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2'>
              <StaticImage src='../../assets/images/services-glow.png' alt='' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});
