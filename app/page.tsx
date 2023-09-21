// Types
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { FaTools as Tools } from 'react-icons/fa';

// Types
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <div className='space-y-2'>
        <Heading size='lg'>
          Welcome to Ryan Records.
        </Heading>
        <Heading size='sm'>
          A record label for Ryans, by Ryans.
        </Heading>
      </div>

      <div className='flex items-center justify-center mt-20 flex-col text-center'>
        <Tools className='w-24 h-24 mb-4' />
        <div className='space-y-2'>
          <Text size='lg'>
            This website is still under active development.
          </Text>
          <Text size='lg'>
            Check back later.
          </Text>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;