import Image from "next/image";

import Slide from "@/components/Slide";

const IntroSlide = () => (
  <Slide background='/images/intro.jpg' centered>
    <Image
      src='/images/43vp.svg'
      alt='43. výsadkový pluk'
      width={300}
      height={300}
    />
    <h1 className='text-white bg-black/70 text-center text-4xl font-extrabold uppercase py-10 backdrop-blur-sm w-full'>
      43. výsadkový pluk
    </h1>
  </Slide>
);

export default IntroSlide;
