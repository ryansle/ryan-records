import client from '@/data/contentful';

const fetchTalent = async () => {
  const data = await client.getEntries(({ content_type: 'talent' }));

  return data.items.map((entry) => entry.fields);
};

export { fetchTalent };