// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { ContactForm } from '@/components/contact';

// Types
import type { NextPage } from 'next';

const ContactPage: NextPage = () => {
  return (
    <Layout className='space-y-4'>
      <Heading>Contact Us</Heading>
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
