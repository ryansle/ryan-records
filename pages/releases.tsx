// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';

// Types
import type { NextPage } from 'next';

const ReleasesPage: NextPage = () => {
  return (
    <Layout className='space-y-4'>
      <Heading>Releases</Heading>
      <Text>
        This page is still under construction, please check back later...
      </Text>
    </Layout>
  );
};

export default ReleasesPage;
