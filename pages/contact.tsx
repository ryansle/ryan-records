// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { ContactForm } from '@/components/contact';

// Types
import type { NextPage } from 'next';

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <Heading className='mb-4'>Contact Us</Heading>
      <Text className='mb-10'>
        Is your name Ryan? Wanna make music with other Ryans? Get in contact with the Ryans at Ryan Records Music and let&apos;s chat!
      </Text>
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
