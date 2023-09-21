// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';

// Types
import type { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <Layout className='space-y-4'>
      <Heading>About Us</Heading>
      <Text>
        This page is still under construction, please check back later...
      </Text>
    </Layout>
  );
};

export default AboutPage;
