// Components
import { Heading } from '@/components/global';
import NextLink from 'next/link';
import {
  FaMusic as Music,
  FaInstagram as Instagram
} from 'react-icons/fa';

// Types
import type { ReactNode } from 'react';

type ExternalLinkProps = {
  href: string;
  cta: string;
  icon: ReactNode;
}

const ExternalLink = (props: ExternalLinkProps) => {
  const { href, cta, icon } = props;

  return (
    <NextLink href={href}>
      <button className='rounded px-4 py-2 flex items-center uppercase font-semibold border duration-300 transition ease-linear hover:scale-102'>
        <span className='mr-2'>
          {icon}
        </span>
        <span>
          {cta}
        </span>
      </button>
    </NextLink>
  );
};

const Hero = () => {
  const buttons = [
    {
      href: 'https://www.beatport.com/label/ryan-records/116312',
      icon: <Music />,
      cta: 'Check out our music',
    },
    {
      href: 'https://www.instagram.com/ryanrecordsmusic/',
      icon: <Instagram />,
      cta: 'Follow us on Instagram',
    }
  ];

  return (
    <div className='w-full relative h-screen mb-10'>
      <div className='mx-2 absolute text-center align-center flex flex-col justify-center w-full items-center z-30 h-[670px] lg:h-[800px]'>
        <Heading className='hidden mb-8 lg:block' size='2xl'>
          Welcome to Ryan Records.
        </Heading>
        <div className='block lg:hidden mb-4'>
          <Heading size='xl'>
            Welcome to
          </Heading>
          <Heading size='xl'>
            Ryan Records.
          </Heading>
        </div>
        <Heading size='lg'>
          A record label for Ryans, by Ryans.
        </Heading>
        <Heading size='md'>
          Founded by Ryan after the Ryan Rave.
        </Heading>

        <div className='flex space-x-4 mt-10'>
          {buttons.map((button) => (
            <ExternalLink
              key={button.cta}
              href={button.href}
              cta={button.cta}
              icon={button.icon}
            />
          ))}
        </div>
      </div>

      <video
        className='brightness-50 z-10 w-full border-b border-gray-700'
        src='/dj.mov'
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export { Hero };