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
  const { name, location, headshot } = props.talent;

  return (
    <div className='flex flex-col justify-center items-center'>
      <NextImage
        className='rounded-full object-cover'
        src={convertImageUrl(headshot)}
        width={250}
        height={100}
        alt={name}
      />
      <Heading className='text-center mt-4'>
        {name}
      </Heading>
      <Text size='sm' className='flex items-center'>
        <Pin className='mr-2' /> {location}
      </Text>
    </div>
  );
};

export { ArtistCard };