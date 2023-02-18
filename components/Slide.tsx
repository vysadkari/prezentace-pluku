import { ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
  background?: string;
  centered?: boolean;
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

export default Slide;
