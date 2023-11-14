// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { ArtistCard } from '@/components/about';

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
    <Layout className='space-y-4'>
      <Heading>About Us</Heading>
      <Text>
        This page is still under construction, please check back later...
      </Text>

      <Heading>
        Talent
      </Heading>
      <div className='grid grid-cols-12 gap-4'>
        {talent?.map((artist, index) => (
          <div className='col-span-6' key={index}>
            <ArtistCard talent={artist as Talent} />
          </div>
        ))}
      </div>
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