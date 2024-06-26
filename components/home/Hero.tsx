// Components
import NextImage from 'next/image';
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
      <button className='rounded px-4 py-2 flex items-center uppercase font-semibold border-gray-600 border duration-300 transition ease-linear hover:scale-102 hover:border-white'>
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
  // TODO: theme buttons cooler
  const buttons = [
    {
      href: 'https://www.beatport.com/label/ryan-records/116312',
      icon: <Music />,
      cta: 'Music',
    },
    {
      href: 'https://www.instagram.com/ryanrecordsmusic/',
      icon: <Instagram />,
      cta: 'Instagram',
    }
  ];

  return (
    <div className='w-full relative h-screen mb-10 overflow-x-hidden'>
      <video
        className='brightness-50 z-10 w-full border-b border-gray-700 object-cover absolute h-screen w-screen top-0 left-0'
        src='https://i.imgur.com/2kpVPna.mp4'
        autoPlay
        loop
        muted
        playsInline
      />

      <div className='mx-2 w-full absolute text-center flex flex-col items-center content-center justify-center z-20 h-screen'>
        <NextImage
          className='mb-5 -mt-32'
          src='/logo.png'
          alt='Ryan Records Logo'
          width={80}
          height={100}
        />
        <div className='font-cooper'>
          <h2 className='text-display2 lg:text-5xl xl:hidden'>
            Welcome to
          </h2>
          <h1 className='text-5xl flex lg:text-7xl'>
            <span className='hidden xl:block'>Welcome to&nbsp;</span>
            Ryan Records.
          </h1>
          <h3 className='text-xl mt-10 lg:text-display3'>
            A record label for Ryans, by Ryans.
          </h3>
          <h3 className='text-lg mt-2 lg:text-xl xl:text-3xl'>
            Founded by Ryan after the Ryan Rave.
          </h3>
        </div>

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
    </div>
  );
};

export { Hero };