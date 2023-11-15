import client from '@/data/contentful';

const fetchTalent = async () => {
  const data = await client.getEntries(({ content_type: 'talent' }));

  return data.items.map((entry) => entry.fields);
};

const fetchReleases = async () => {
  const data = await client.getEntries(({ content_type: 'releases' }));

  return data.items.map((entry) => entry.fields);
};

export { fetchTalent, fetchReleases };