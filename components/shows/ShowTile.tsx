// Components
import { Heading } from '@/components/global';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { IoTicket as Ticket } from 'react-icons/io5';
import { PiBeerBottleFill as Bottle } from 'react-icons/pi';

// Types
import { Show } from '@/lib/types';
import { convertImageUrl } from '@/utils/convert';

type ShowTileProps = {
  show: Show;
};

const renderMonth = (month: number) => {
  switch (month) {
    case 0:
      return 'JAN';
    case 1:
      return 'FEB';
    case 2:
      return 'MAR';
    case 3:
      return 'APR';
    case 4:
      return 'MAY';
    case 5:
      return 'JUN';
    case 6:
      return 'JUL';
    case 7:
      return 'AUG';
    case 8:
      return 'SEP';
    case 9:
      return 'OCT';
    case 10:
      return 'NOV';
    case 11:
      return 'DEC';
    default:
      return;
  }
};

const ShowTile = (props: ShowTileProps) => {
  const {
    title,
    poster,
    date,
    venue,
    city,
    ticketLink,
    tableLink,
    artist
  } = props.show;

  return (
    <div className='aspect-square transition ease-in duration-300 hover:border-white hover:scale-102'>
      <div className='relative h-96 border border-gray-700 rounded-xl z-0'>
        <div className='absolute block top-2 right-2 py-1 px-2 bg-white z-10 text-black rounded font-cooper border border-gray-700'>
          <p className='font-semibold'>{renderMonth(new Date(date).getMonth())}</p>
          <p className='text-center text-2xl -mt-2'>
            {new Date(date).getDate().toString().length === 1 && '0'}
            {new Date(date).getDate().toString()}
          </p>
        </div>
        <NextLink href={ticketLink}>
          <NextImage
            className='w-full h-full rounded-xl'
            src={convertImageUrl(poster) as string}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </NextLink>
      </div>

      <div className='mt-2'>
        <Heading size='md' className='text-center mb-2'>
          {artist}
        </Heading>
        <Heading size='sm' className='text-center'>
          {venue} • {city}
        </Heading>
        <div className='flex space-x-2 w-full justify-center'>
          <NextLink href={ticketLink} className='flex items-center text-blue-500 font-semibold hover:underline'>
            <Ticket className='fill-blue-500 mr-2' /> Tickets
          </NextLink>
          {tableLink && <p>•</p>}
          {tableLink && (
            <NextLink href={tableLink} className='flex items-center text-blue-500 font-semibold hover:underline'>
              <Bottle className='fill-blue-500 mr-2' /> Table Service
            </NextLink>
          )}
        </div>
      </div>
    </div>
  );
};

export { ShowTile };
