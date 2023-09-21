// Components
import { Header, Footer } from '@/components/navigation';

// Types
import type { ReactNode } from 'react';

type LayoutProps = {
  className?: string;
  children: ReactNode;
};

const Layout = (props: LayoutProps) => {
  const { className, children } = props;

  return (
    <main>
      <Header />
      <section className={`${className} text-white h-full py-8 px-4 flex flex-col overflow-hidden bg-gradient-to-b from-neutral-900 to-black lg:px-32 xl:px-72 3xl:px-[400px] 4xl:px-[650px]`}>
        {children}
      </section>
      <Footer />
    </main>
  );
};

export { Layout };