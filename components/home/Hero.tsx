// Components
import { Heading } from '@/components/global';

const Hero = () => {
  return (
    <div className='w-full relative h-screen mb-10'>
      <div className='mx-2 space-y-2 absolute text-center align-center flex flex-col justify-center w-full items-center z-30 h-[670px] lg:h-[800px] lg:space-y-6'>
        <Heading className='hidden lg:block' size='2xl'>
          Welcome to Ryan Records.
        </Heading>
        <div className='block lg:hidden mb-4'>
          <Heading size='xl'>
            Welcome to
          </Heading>
          <Heading size='xl'>
            Ryan Records.
          </Heading>
        </div>
        <Heading size='lg'>
          A record label for Ryans, by Ryans.
        </Heading>
        <Heading size='md'>
          Founded by Ryan after the Ryan Rave.
        </Heading>
      </div>

      <video
        className='brightness-75 z-10 w-full border-b border-gray-700'
        src='/dj.mov'
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export { Hero };