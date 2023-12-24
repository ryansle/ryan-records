// Components
import NextImage from 'next/image';

// Types
import { Show } from '@/lib/types';
import { convertImageUrl } from '@/utils/convert';

type ShowTileProps = {
  show: Show;
}

const ShowTile = (props: ShowTileProps) => {
  const {
    title,
    poster,
    date,
    venue,
    city,
    ticketLink,
    tableLink
  } = props.show;

  return (
    <div className='transition ease-in duration-300 hover:border-white hover:scale-102'>
      <div className='relative h-96 border border-gray-700 rounded-xl '>
        <NextImage
          className='w-full h-full rounded-xl'
          src={convertImageUrl(poster) as string}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export { ShowTile };
