import { useRef } from "react";
import Image from "next/image";
import Xarrow from "react-xarrows";

import Slide from "@/components/Slide";

const OrganizacniStruktura = () => {
  const plukIcon = useRef(null);
  const stabIcon = useRef(null);
  const komandaIcon = useRef(null);
  const azIcon = useRef(null);
  const szIcon = useRef(null);
  const sbpIcon = useRef(null);
  const szvIcon = useRef(null);
  const slzIcon = useRef(null);
  const sbvIcon = useRef(null);
  const svpIcon = useRef(null);
  const zodIcon = useRef(null);

  return (
    <Slide>
      <h2 className='text-3xl font-extrabold uppercase text-center bg-gradient-to-r from-black/70 to-primary/70 text-white text-shadow h-[4.5rem] flex flex-row justify-center items-center absolute top-0 inset-x-0'>
        Organizační struktura
      </h2>
      <div className='flex flex-col h-full p-10 pt-28 justify-between'>
        <div className='flex flex-row justify-between'>
          <div ref={plukIcon} className='pr-10'>
            <Image
              src='./images/struktura/43vp.svg'
              width={300}
              height={300}
              alt='43. výsadkový pluk'
              className='drop-shadow-black'
            />
          </div>
          <div
            ref={stabIcon}
            className='flex flex-col gap-2 items-center justify-center pl-10'
          >
            <Image
              src='./images/struktura/stab.svg'
              width={200}
              height={200}
              alt='Velení a štáb pluku'
              className='drop-shadow-black border border-black'
            />
            <span className='text-white text-center text-shadow font-semibold'>
              Velení a štáb
            </span>
          </div>
        </div>

        <div className='grid grid-cols-9 gap-10'>
          <div
            className='flex flex-col items-center justify-center gap-2 pt-5'
            ref={komandaIcon}
          >
            <div className='grid grid-cols-5'>
              <Image
                src='./images/struktura/1k.svg'
                width={100}
                height={100}
                alt='1. komando'
                className='drop-shadow-black border border-black z-30 grid-area-[1_1_3_3]'
              />
              <Image
                src='./images/struktura/2k.svg'
                width={100}
                height={100}
                alt='2. komando'
                className='drop-shadow-black border border-black z-20 grid-area-[2_2_4_4]'
              />
              <Image
                src='./images/struktura/3k.svg'
                width={100}
                height={100}
                alt='3. komando'
                className='drop-shadow-black border border-black z-10 grid-area-[3_3_5_5]'
              />
              <Image
                src='./images/struktura/4k.svg'
                width={100}
                height={100}
                alt='4. komando'
                className='drop-shadow-black border border-black z-0 grid-area-[4_4_6_6]'
              />
            </div>
            <span className='text-white text-center text-shadow font-semibold'>
              1K - 4K
            </span>
          </div>

          <div
            ref={azIcon}
            className='pt-5 flex flex-col items-center justify-center gap-2'
          >
            <Image
              src='./images/struktura/5k.svg'
              width={100}
              height={100}
              alt='5. komando (AZ)'
              className='drop-shadow-black w-full border border-black aspect-square'
            />
            <span className='text-white text-center text-shadow font-semibold'>
              5K (AZ)
            </span>
          </div>

          <div
            ref={szIcon}
            className='flex flex-col items-center justify-center gap-2 pt-5'
          >
            <Image
              src='./images/struktura/sz.svg'
              width={100}
              height={100}
              alt='Středisko zbraní'
              className='drop-shadow-black w-full border border-black aspect-square'
            />
            <span className='text-white text-center text-shadow font-semibold'>
              SZ
            </span>
          </div>

          <div
            ref={sbpIcon}
            className='flex flex-col items-center justify-center gap-2 pt-5'
          >
            <Image
              src='./images/struktura/sbp.svg'
              width={100}
              height={100}
              alt='Středisko bojové podpory'
              className='drop-shadow-black w-full border border-black aspect-square'
            />
            <span className='text-white text-center text-shadow font-semibold'>
              SBP
            </span>
          </div>

          <div
            ref={szvIcon}
            className='flex flex-col items-center justify-center gap-2 pt-5'
          >
            <Image
              src='./images/struktura/szv.svg'
              width={100}
              height={100}
              alt='Středisko zabezpečení velení'
              className='drop-shadow-black w-full border border-black aspect-square'
            />
            <span className='text-white text-center text-shadow font-semibold'>
              SZV
            </span>
          </div>

          <div
            ref={slzIcon}
            className='flex flex-col items-center justify-center gap-2 pt-5'
          >
            <Image
              src='./images/struktura/slz.svg'
              width={100}
              height={100}
              alt='Středisko logistického zabezpečení'
              className='drop-shadow-black w-full border border-black aspect-square'
            />
            <span className='text-white text-center text-shadow font-semibold'>
              SLZ
            </span>
          </div>

          <div
            ref={sbvIcon}
            className='flex flex-col items-center justify-center gap-2 pt-5'
          >
            <Image
              src='./images/struktura/sbv.svg'
              width={100}
              height={100}
              alt='Středisko bojového výcviku'
              className='drop-shadow-black w-full border border-black aspect-square'
            />
            <span className='text-white text-center text-shadow font-semibold'>
              SBV
            </span>
          </div>

          <div
            ref={svpIcon}
            className='flex flex-col items-center justify-center gap-2 pt-5'
          >
            <Image
              src='./images/struktura/svp.svg'
              width={100}
              height={100}
              alt='Středisko výsadkové přípravy'
              className='drop-shadow-black w-full border border-black aspect-square'
            />
            <span className='text-white text-center text-shadow font-semibold'>
              SVP
            </span>
          </div>

          <div
            ref={zodIcon}
            className='flex flex-col items-center justify-center gap-2 pt-5'
          >
            <Image
              src='./images/struktura/zod.svg'
              width={100}
              height={100}
              alt='Zdravotnický odřad'
              className='drop-shadow-black w-full border border-black aspect-square'
            />
            <span className='text-white text-center text-shadow font-semibold'>
              ZOD
            </span>
          </div>
        </div>
      </div>

      <Xarrow
        start={plukIcon}
        end={stabIcon}
        dashness
        startAnchor='right'
        endAnchor='left'
        color='#44403c'
      />
      <Xarrow
        start={stabIcon}
        end={komandaIcon}
        startAnchor='bottom'
        endAnchor='top'
        color='#44403c'
        curveness={0.5}
      />
      <Xarrow
        start={stabIcon}
        end={azIcon}
        startAnchor='bottom'
        endAnchor='top'
        color='#44403c'
        curveness={0.5}
      />
      <Xarrow
        start={stabIcon}
        end={szIcon}
        startAnchor='bottom'
        endAnchor='top'
        color='#44403c'
        curveness={0.5}
      />
      <Xarrow
        start={stabIcon}
        end={sbpIcon}
        startAnchor='bottom'
        endAnchor='top'
        color='#44403c'
        curveness={0.5}
      />
      <Xarrow
        start={stabIcon}
        end={szvIcon}
        startAnchor='bottom'
        endAnchor='top'
        color='#44403c'
        curveness={0.5}
      />
      <Xarrow
        start={stabIcon}
        end={slzIcon}
        startAnchor='bottom'
        endAnchor='top'
        color='#44403c'
        curveness={0.5}
      />
      <Xarrow
        start={stabIcon}
        end={svpIcon}
        startAnchor='bottom'
        endAnchor='top'
        color='#44403c'
        curveness={0.5}
      />
      <Xarrow
        start={stabIcon}
        end={sbvIcon}
        startAnchor='bottom'
        endAnchor='top'
        color='#44403c'
        curveness={0.5}
      />
      <Xarrow
        start={stabIcon}
        end={svpIcon}
        startAnchor='bottom'
        endAnchor='top'
        color='#44403c'
        curveness={0.5}
      />
      <Xarrow
        start={stabIcon}
        end={zodIcon}
        startAnchor='bottom'
        endAnchor='top'
        color='#44403c'
        curveness={0.5}
      />
    </Slide>
  );
};

export default OrganizacniStruktura;
