// Components
import { FaInstagram as Instagram } from 'react-icons/fa';
import { SiBeatport as Beatport } from 'react-icons/si';
import { Heading } from '@/components/global';
import { MobileMenu } from '@/components/navigation';
import NextLink from 'next/link';
import NextImage from 'next/image';

const Header = () => {
  const routes = [
    { text: 'About', href: '/about' },
    { text: 'Releases', href: '/releases' },
    { text: 'Shows', href: '/shows' },
    { text: 'Contact Us', href: '/contact' },
  ];

  const socials = [
    {
      href: 'https://www.instagram.com/ryanrecordsmusic/',
      icon: <Instagram className='h-8 w-8' color='white' />,
      name: 'Instagram',
    },
    {
      href: 'https://www.beatport.com/label/ryan-records/116312',
      icon: <Beatport className='h-8 w-8' color='white' />,
      name: 'Beatport',
    }
  ];

  return (
    <header className='flex justify-between items-center py-5 px-4 border-b border-gray-700 bg-black sticky relative top-0 right-0 left-0 z-50 lg:px-32 xl:px-72 3xl:px-[400px] 4xl:px-[650px]'>
      <div className='flex space-x-4 items-center'>
        <NextImage
          src='/logo.png'
          alt='Ryan Records Logo'
          height={30}
          width={30}
        />
        <NextLink href='/'>
          <Heading className='block lg:hidden' size='sm'>RYAN RECORDS</Heading>
          <Heading className='hidden lg:block'>RYAN RECORDS</Heading>
        </NextLink>
      </div>
      <div className='space-x-4 flex items-center'>
        <div className='hidden md:block space-x-4 flex items-center'>
          {routes.map((route) => (
            <NextLink
              className='font-semibold tracking-wide text-white'
              key={route.href}
              href={route.href}
            >
              {route.text}
            </NextLink>
          ))}
        </div>

        <div className='hidden md:flex md:space-x-4 md:block'>
          {socials.map((channel, index) => (
            <NextLink key={index} href={channel.href}>
              {channel.icon}
            </NextLink>
          ))}
        </div>

        <div className='md:hidden'>
          <MobileMenu content={routes} socials={socials} />
        </div>
      </div>
    </header>
  );
};

export { Header };