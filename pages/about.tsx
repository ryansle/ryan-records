// Components
import { Layout } from '@/components/navigation';
import { Heading, Text, Divider } from '@/components/global';
import { ArtistCard } from '@/components/about';
import { FaInstagram as Instagram } from 'react-icons/fa';
import { SiBeatport as Beatport } from 'react-icons/si';
import NextLink from 'next/link';
import NextImage from 'next/image';

// Types
import type { Talent, SocialMedia } from '@/lib/types';

// Utilities
import { useQuery } from 'react-query';
import { fetchSocials, fetchTalent } from '@/data/fetch';

type AboutPageProps = {
  talent: Talent[];
  socials: SocialMedia[];
}

const AboutPage = (props: AboutPageProps) => {
  const { data: talent, isLoading: isLoadingTalent } = useQuery('talent', fetchTalent, { initialData: props.talent });
  const { data: socials, isLoading: isLoadingSocials } = useQuery('socials', fetchSocials, { initialData: props.socials });

  const renderIcon = (platform: string) => {
    switch (platform) {
      case 'Instagram':
        return <Instagram />;
      case 'Beatport':
        return <Beatport />;
      default:
        return;
    }
  };

  return (
    <Layout>
      <Heading className='mb-4'>About Us</Heading>
      <div className='grid grid-cols-12 flex items-center justify-between'>
        <div className='col-span-12 space-y-4 mb-4 md:col-span-7 md:mb-0'>
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
            hosted the very first Ryan Rave in Los Angeles, California. In doing so, they brought together five DJs named Ryan from around the country to spin at the Ryan Rave. After an incredible evening of Ryan, Ryan music, and more, JADIP wanted to take things one step further, and founded Ryan Records.
          </Text>
          <Text>
            Since then, this group of Ryan DJs has continued to collaborate with one another in order to show the world what Ryans are truly capable of.
          </Text>
          <Heading size='md'>
            Follow us on...
          </Heading>
          {!isLoadingSocials && (
            <div className='flex space-x-2'>
              {socials?.map((social, index) => (
                <NextLink
                  key={index}
                  href={social.url as string}
                >
                  <button className='flex items-center px-4 py-2 border transition duration-300 ease-in-out rounded-xl font-semibold border-gray-700 hover:scale-102 hover:border-white '>
                    <span className='mr-2'>{renderIcon(social.platform as string)}</span>
                    <span>{social.platform as string}</span>
                  </button>
                </NextLink>
              ))}
            </div>
          )}
        </div>
        <div className='col-span-12 md:col-span-1' />
        <div className='hidden col-span-12 flex justify-center md:block md:col-span-4'>
          <NextImage
            src='/raveposter.png'
            className='rounded-xl'
            alt='Ryan Rave'
            width={290}
            height={200}
          />
        </div>
      </div>

      <Divider />

      <Heading className='text-center mb-10'>
        Meet our Talented Ryan Artists
      </Heading>
      {!isLoadingTalent && (
        <div className='grid grid-cols-12 gap-4 pt-4'>
          {talent?.map((artist, index) => (
            <div className='col-span-12 mb-4 md:col-span-4' key={index}>
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
  const socials = await fetchSocials();

  return {
    props: {
      talent,
      socials,
    }
  };
}

export default AboutPage;