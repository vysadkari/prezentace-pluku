import { ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
  background?: string;
  centered?: boolean;
}

interface TitleProps {
  children: ReactNode;
}

interface ContentProps {
  children: ReactNode;
  className?: string;
}

const Slide = ({ children, background, centered }: SlideProps) => {
  return (
    <div
      className={`${
        background ? "bg-cover" : "bg-stone-900"
      } w-full h-full rounded-3xl ${
        centered ? "flex flex-col justify-center items-center gap-10" : ""
      } snap-center shrink-0 drop-shadow-black overflow-hidden relative`}
      style={{
        backgroundImage: background ? `url(${background})` : "none",
      }}
    >
      {children}
    </div>
  );
};

const Title = ({ children }: TitleProps) => (
  <h2 className='text-3xl font-extrabold uppercase text-center bg-gradient-to-r from-black/70 to-primary/70 text-white text-shadow h-[4.5rem] flex flex-row justify-center items-center absolute top-0 inset-x-0'>
    {children}
  </h2>
);

const Content = ({ children, className }: ContentProps) => (
  <div className={`w-full h-full p-10 pt-28 ${className}`}>{children}</div>
);

Slide.Title = Title;
Slide.Content = Content;

export default Slide;
