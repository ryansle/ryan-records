// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { ShowTile } from '@/components/shows';

// Types
import type { Show } from '@/lib/types';

// Utilities
import { useQuery } from 'react-query';
import { fetchShows } from '@/data/fetch';

type ShowsPageProps = {
  shows: Show[];
}

const ShowsPage = (props: ShowsPageProps) => {
  const { data: shows, isLoading } = useQuery('shows', fetchShows, { initialData: props.shows });

  const upcomingShows = shows?.filter((show) => new Date(show.date as string) >= new Date()).sort((a, b) => new Date(b.date as string).getTime() - new Date(a.date as string).getTime());
  const previousShows = shows?.filter((show) => new Date(show.date as string) < new Date()).sort((a, b) => new Date(b.date as string).getTime() - new Date(a.date as string).getTime());

  return (
    <Layout className='space-y-4'>
      {upcomingShows?.length !== 0 && (
        <div>
          <Heading className='mb-4'>Upcoming Shows</Heading>

          <div className='grid grid-cols-12 gap-4'>
            {upcomingShows?.map((show, index) => (
              <div className='col-span-12 md:col-span-3' key={index}>
                <ShowTile show={show as Show} />
              </div>
            ))}
          </div>
        </div>
      )}

      {previousShows?.length !== 0 && (
        <div>
          <Heading className='mb-4'>Previous Shows</Heading>

          <div className='grid grid-cols-12 gap-4'>
            {previousShows?.map((show, index) => (
              <div className='col-span-12 md:col-span-4' key={index}>
                <ShowTile show={show as Show} />
              </div>
            ))}
          </div>
        </div>
      )}
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

export default ShowsPage;
