// Types
import { Heading } from '@/components/global';
import { ShowTile } from '@/components/shows';
import { Layout } from '@/components/navigation';
import { Hero } from '@/components/home';

// Types
import type { Show } from '@/lib/types';

// Utilities
import { useQuery } from 'react-query';
import { fetchShows } from '@/data/fetch';

type HomePageProps = {
  shows: Show[];
}

const HomePage = (props: HomePageProps) => {
  const { data: shows, isLoading } = useQuery('shows', fetchShows, { initialData: props.shows });

  const upcomingShows = shows?.filter((show) => new Date(show.date as string) >= new Date()).sort((a, b) => new Date(b.date as string).getTime() - new Date(a.date as string).getTime());

  return (
    <Layout margins='none'>
      <Hero />
      <div className='px-4 lg:px-32 xl:px-72 3xl:px-[400px] 4xl:px-[650px]'>
        {upcomingShows?.length !== 0 && (
          <div>
            <Heading className='mb-4'>Featured Shows</Heading>

            <div className='grid grid-cols-12 gap-4'>
              {upcomingShows?.map((show, index) => (
                <div className='col-span-12 md:col-span-3' key={index}>
                  <ShowTile show={show as Show} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const shows = await fetchShows();

  return {
    props: {
      shows,
    }
  };
}

export default HomePage;