import client from '@/data/contentful';

const fetchTalent = async () => {
  const data = await client.getEntries(({ content_type: 'talent' }));

  return data.items.map((entry) => entry.fields);
};

const fetchReleases = async () => {
  const data = await client.getEntries(({ content_type: 'releases' }));

  return data.items.map((entry) => entry.fields);
};

const fetchSocials = async () => {
  const data = await client.getEntries(({ content_type: 'socials' }));

  return data.items.map((entry) => entry.fields);
};

const fetchShows = async () => {
  // @ts-ignore
  const data = await client.getEntries(({ content_type: 'shows', order: '-sys.createdAt' }));

  return data.items.map((entry) => entry.fields);
};
export {
  fetchTalent,
  fetchReleases,
  fetchSocials,
  fetchShows
};