// Types
import { Layout } from '@/components/navigation';
import { Hero } from '@/components/home';
import { Text } from '@/components/global';

// Types
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Layout margins='none'>
      <Hero />
      <div className='px-4 lg:px-32 xl:px-72 3xl:px-[400px] 4xl:px-[650px]'>
        <Text>
          The rest of this page is still under construction. Please check back later.
        </Text>
      </div>
    </Layout>
  );
};

export default HomePage;