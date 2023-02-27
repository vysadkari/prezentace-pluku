import { ReactNode } from "react";

interface PresentationProps {
  children: ReactNode | ReactNode[];
}

const Presentation = ({ children }: PresentationProps) => {
  return (
    <main className='bg-pattern w-screen h-screen flex flex-row py-20 px-32 gap-10 snap-x snap-mandatory overflow-hidden'>
      {children}
    </main>
  );
};

export default Presentation;
