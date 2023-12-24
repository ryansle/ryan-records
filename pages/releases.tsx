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

  const singles = releases?.filter((release) => release.isSingle);
  const albums = releases?.filter((release) => !release.isSingle);

  return (
    <Layout className='space-y-4'>
      <Heading>Releases</Heading>

      <Text>Keep up to date with all of the newest releases from Ryan Records!</Text>

      {!isLoading && (
        <>
          <Heading size='md'>Singles</Heading>

          <div className='grid grid-cols-12 gap-4'>
            {singles?.map((song, index) => (
              <div className='col-span-12 md:col-span-4' key={index}>
                <MediaTile data={song as Release} />
              </div>
            ))}
          </div>

          {albums?.length !== 0 && (
            <div className='grid grid-cols-12 gap-4'>
              {albums?.map((album, index) => (
                <div className='col-span-12 md:col-span-4' key={index}>
                  <MediaTile data={album as Release} />
                </div>
              ))}
            </div>
          )}
        </>
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
