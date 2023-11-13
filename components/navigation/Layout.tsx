// Components
import { Header, Footer } from '@/components/navigation';

// Types
import type { ReactNode } from 'react';

type LayoutProps = {
  className?: string;
  children: ReactNode;
  margins?: '' | 'none';
};

const Layout = (props: LayoutProps) => {
  const { className, children, margins = '' } = props;

  return (
    <main>
      <Header />
      <section className={`${className} text-white h-full flex flex-col overflow-hidden bg-gradient-to-b from-neutral-900 to-black ${margins === 'none' ? '' : 'px-4 py-8 lg:px-32 xl:px-72 3xl:px-[400px] 4xl:px-[650px]'}`}>
        {children}
      </section>
      <Footer />
    </main>
  );
};

export { Layout };
