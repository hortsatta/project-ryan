import cx from 'classix';
import { StaticImage } from 'gatsby-plugin-image';

import { useMemo, type ComponentProps } from 'react';

type Props = ComponentProps<'section'> & {
  title: string;
  contentHtml?: string | TrustedHTML;
};

const styles = { height: window.innerHeight };

export function WelcomeSection({
  className,
  title,
  contentHtml,
  ...moreProps
}: Props) {
  return (
    <section
      style={styles}
      className={cx(
        className,
        'relative pt-20 min-h-[767px] max-h-[929px] bg-backdrop overflow-hidden',
      )}
      {...moreProps}
    >
      <div className='pt-[146px]'>
        {/* Backdrop grids */}
        <div className='absolute top-0 flex flex-col justify-start items-center w-full h-full'>
          <div className='relative flex-1 w-full bg-[url(/images/bg-grid.png)]'>
            <div className='absolute bottom-0 w-full h-[140px] bg-gradient-to-t from-backdrop from-10% via-backdrop/60 via-80% to-transparent opacity-80' />
          </div>
          <div className='shrink-0 w-full h-[162px] bg-[url(/images/bg-grid-perspective.png)] bg-top bg-no-repeat bg-cover' />
        </div>
        <div className='relative mx-auto px-4 max-w-main z-10'>
          <div className='relative flex justify-between items-start z-10'>
            <div className='pt-3.5 w-full max-w-[570px]'>
              <h2 className='mb-10 text-[2.5rem] leading-[50px]'>{title}</h2>
              <div
                dangerouslySetInnerHTML={{ __html: contentHtml as string }}
              />
            </div>
            <div className='relative'>
              {/* Welcome window */}
              <div className='relative -mt-5 drop-shadow-2xl'>
                <StaticImage
                  src='../../assets/images/welcome-window.png'
                  alt='welcome window'
                />
                <div className='absolute bottom-[26px] left-[53px] w-4 h-5 bg-secondary rounded-sm animate-cursor-blink' />
              </div>
              <div className='absolute top-[68px] right-[18px]'>
                {/* Jetpack */}
                <div className='relative z-10 animate-float'>
                  <StaticImage
                    className='relative'
                    src='../../assets/images/jetpack-human.png'
                    alt='human with jetpack'
                  />
                  {/* Boost */}
                  <div className='absolute bottom-[89px] right-[24px]'>
                    <StaticImage
                      className='animate-boost'
                      src='../../assets/images/jetpack-boost.png'
                      alt='jetpack boost'
                    />
                  </div>
                  {/* Boost ring */}
                  <div className='absolute bottom-[145px] right-[20px] opacity-70'>
                    <StaticImage
                      className='animate-boost-ring'
                      src='../../assets/images/jetpack-boost-ring.png'
                      alt='jetpack boost ring'
                    />
                  </div>
                </div>
                {/* Beam */}
                <div className='absolute top-[149px] right-[35px]'>
                  <div className='w-[23px] h-[500px] bg-[url(/images/jetpack-beam.png)] bg-repeat-y' />
                  <div className='absolute -bottom-[40px] -right-[49px] w-[120px] h-[119px] animate-beam-end'>
                    <StaticImage
                      src='../../assets/images/beam-end.png'
                      alt='beam end'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Backdrop glow */}
          <div className='absolute w-[810px] h-[760px] -top-16 left-1/2 -translate-x-1/2'>
            <StaticImage
              className='w-full h-full'
              src='../../assets/images/glow.png'
              alt=''
              objectFit='cover'
            />
          </div>
        </div>
        {/* Divider beam */}
        <div className='absolute -bottom-[7px] w-full h-[23px] bg-[url(/images/divider-beam.png)] bg-repeat-x' />
      </div>
    </section>
  );
}
