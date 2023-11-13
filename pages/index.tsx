// Types
import { Layout } from '@/components/navigation';
import { Hero } from '@/components/home';

// Types
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Layout margins='none'>
      <Hero />
    </Layout>
  );
};

export default HomePage;