// Components
import { Heading } from '@/components/global';
import { SiBeatport as Beatport } from 'react-icons/si';
import { FaSpotify as Spotify } from 'react-icons/fa';
import NextImage from 'next/image';
import NextLink from 'next/link';

// Types
import type { Release } from '@/lib/types';
import { convertImageUrl } from '@/utils/convert';

type MediaTileProps = {
  data: Release;
}

const MediaTile = (props: MediaTileProps) => {
  const {
    title,
    spotifyLink,
    beatportLink,
    coverArt,
    artist
  } = props.data;

  const iconStyle = 'w-6 h-6'

  const streaming = [
    { url: spotifyLink, icon: <Spotify className={iconStyle} /> },
    { url: beatportLink, icon: <Beatport className={iconStyle} /> },
  ];

  return (
    <div className='border flex flex-col items-center justify-center border-gray-700 rounded-xl h-full transition ease-in duration-300 hover:border-white hover:scale-102'>
      <div className='relative w-full flex items-center justify-center rounded-xl h-80 overflow-hidden bg-center'>
        <div className='w-full h-full brightness-30'>
          <NextImage
            src={convertImageUrl(coverArt)}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='absolute w-full inset-x-0 text-white text-xs text-center leading-4 flex items-center justify-center flex-col px-8'>
          <Heading size='2xl'>{title}</Heading>
          <Heading size='md'>{artist}</Heading>
          <div className='flex space-x-4 mt-2'>
            {streaming.map((platform, index) => (
              <div key={index}>
                {platform.url && (
                  <NextLink href={platform.url}>
                    {platform.icon}
                  </NextLink>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { MediaTile };
