// Components
import NextLink from 'next/link';
import NextImage from 'next/image';
import { Heading, Text } from '@/components/global';
import { FaMapPin as Pin } from 'react-icons/fa';

// Types
import type { Talent } from '@/lib/types';

// Utilities
import { convertImageUrl } from '@/utils/convert';

type ArtistCardProps = {
  talent: Talent;
}

const ArtistCard = (props: ArtistCardProps) => {
  const { name, location, headshot, biography } = props.talent;

  return (
    <div className='border p-4 rounded border-gray-700'>
      <div className='flex'>
        <NextImage
          className='rounded-xl object-cover'
          src={convertImageUrl(headshot)}
          width={200}
          height={100}
          alt={name}
        />

        <div className='ml-4 space-y-4'>
          <Heading size='md'>{name}</Heading>
          <Text size='xs'>
            {biography}
          </Text>
          <Text size='xs' className='flex items-center text-white'>
            <Pin className='mr-2 fill-white' /> {location}
          </Text>
        </div>
      </div>
    </div>
  );
};

export { ArtistCard };