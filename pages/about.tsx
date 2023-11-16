// Components
import { Layout } from '@/components/navigation';
import { Heading, Text, Divider } from '@/components/global';
import { ArtistCard } from '@/components/about';
import NextLink from 'next/link';
import NextImage from 'next/image';

// Types
import type { Talent } from '@/lib/types';

// Utilities
import { useQuery } from 'react-query';
import { fetchTalent } from '@/data/fetch';

type AboutPageProps = {
  talent: Talent[];
}

const AboutPage = (props: AboutPageProps) => {
  const { data: talent, isLoading } = useQuery('articles', fetchTalent, { initialData: props.talent });

  return (
    <Layout>
      <Heading className='mb-4'>About Us</Heading>
      <div className='grid grid-cols-2 flex items-center justify-between'>
        <div className='col-span-2 space-y-4 mb-4 md:col-span-1 md:mb-0'>
          <Text>
            On September 2nd, 2023,{' '}
            <NextLink
              href='https://www.ryanmeetup.com'
              className='text-blue-500 font-semibold hover:underline'
            >
              Ryan Meetup
            </NextLink>{' '}
            in collaboration with{' '}
            <NextLink
              href='https://www.youtube.com/@RyanTheLeader/featured'
              className='text-blue-500 font-semibold hover:underline'
            >
              Ryan Leader
            </NextLink>{' '}
            hosted the very first Ryan Rave in Los Angeles, CA. In doing so, they brought together five DJs named Ryan from around the country to spin at the Ryan Rave. After an incredible evening of Ryan, Ryan music, and more, the Ryan DJs yearned for more.
          </Text>
          <Text>
            They continued collaborating following the Ryan Rave, and Ryan Records was born, with the five Ryan DJs as its founding members.
          </Text>
        </div>
        <div className='col-span-2 flex justify-end md:col-span-1'>
          <NextImage
            src='/ryanrave.webp'
            className='rounded-xl'
            alt='Ryan Rave'
            width={500}
            height={300}
          />
        </div>
      </div>

      <Divider />

      <Heading className='text-center mb-10'>
        Meet our Talented Ryan Artists
      </Heading>
      {!isLoading && (
        <div className='grid grid-cols-12 gap-4 pt-4'>
          {talent?.map((artist, index) => (
            <div className='col-span-6 md:col-span-4' key={index}>
              <ArtistCard talent={artist as Talent} />
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export async function getServerSideProps() {
  const talent = await fetchTalent();

  return {
    props: {
      talent,
    }
  };
}

export default AboutPage;