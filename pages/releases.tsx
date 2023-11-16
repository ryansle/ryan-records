// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { MediaTile } from '@/components/releases/MediaTile';

// Types
import type { Release } from '@/lib/types';

// Utilities
import { useQuery } from 'react-query';
import { fetchReleases } from '@/data/fetch';

type ReleasesPageProps = {
  releases: Release[];
}

const ReleasesPage = (props: ReleasesPageProps) => {
  const { data: releases, isLoading } = useQuery('articles', fetchReleases, { initialData: props.releases });

  return (
    <Layout className='space-y-4'>
      <Heading>Releases</Heading>

      {!isLoading && (
        <div className='grid grid-cols-12'>
          {releases?.map((song, index) => (
            <div className='col-span-12 md:col-span-4' key={index}>
              <MediaTile data={song as Release} />
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export async function getServerSideProps() {
  const releases = await fetchReleases();

  return {
    props: {
      releases,
    }
  };
}

export default ReleasesPage;
