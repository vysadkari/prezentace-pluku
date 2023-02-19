import Slide from "@/components/Slide";
import { ChevronRightIcon, WarningIcon } from "@/components/Icons";
import Image from "next/image";

const VyberoveRizeniPopis = () => (
  <Slide>
    <h2 className='text-3xl font-extrabold uppercase text-center bg-gradient-to-r from-black/70 to-primary/70 text-white text-shadow h-[4.5rem] flex flex-row justify-center items-center absolute top-0 inset-x-0'>
      Výběrové řízení
    </h2>

    <div className='grid grid-cols-3 gap-20 h-full p-10 pt-28'>
      <div className='flex flex-col justify-between gap-5'>
        <div className='flex flex-col gap-5'>
          <h3 className='text-2xl text-white font-semibold text-center text-shadow py-2 bg-gradient-to-r from-transparent via-primary-dark to-transparent'>
            První den
          </h3>
          <ul className='text-white text-xl flex flex-col gap-2'>
            <li className='flex flex-row items-center gap-2'>
              <ChevronRightIcon className='w-5 h-5 text-stone-500 relative top-px' />
              Fyzické přezkoušení
              <WarningIcon className='w-5 h-5 text-primary-light relative top-[2px]' />
            </li>
            <li className='flex flex-row items-center gap-2'>
              <ChevronRightIcon className='w-5 h-5 text-stone-500 relative top-px' />
              Překážková dráha
            </li>
            <li className='flex flex-row items-center gap-2'>
              <ChevronRightIcon className='w-5 h-5 text-stone-500 relative top-px' />
              Buddy run
            </li>
            <li className='flex flex-row items-center gap-2'>
              <ChevronRightIcon className='w-5 h-5 text-stone-500 relative top-px' />
              Plavání
            </li>
            <li className='flex flex-row items-center gap-2'>
              <ChevronRightIcon className='w-5 h-5 text-stone-500 relative top-px' />
              Pohovor s psychology
            </li>
            <li className='flex flex-row items-center gap-2 text-stone-500'>
              <ChevronRightIcon className='w-5 h-5 text-stone-500 relative top-px' />
              Konec pro kategorii &ldquo;B&rdquo;
            </li>
          </ul>
        </div>

        <div className='grid grid-cols-2 gap-5'>
          <Image
            src='/images/vyberove-rizeni/fyzicke-prezkouseni.jpg'
            width={500}
            height={333}
            alt='Fyzické přezkoušení'
            className='rounded-xl drop-shadow-black'
          />
          <Image
            src='/images/vyberove-rizeni/prekazkova-draha.jpg'
            width={500}
            height={333}
            alt='Překážková dráha'
            className='rounded-xl drop-shadow-black'
          />
          <Image
            src='/images/vyberove-rizeni/buddy-run.jpg'
            width={500}
            height={333}
            alt='Buddy run'
            className='rounded-xl drop-shadow-black'
          />
          <Image
            src='/images/vyberove-rizeni/plavani.jpg'
            width={500}
            height={333}
            alt='Plavání'
            className='rounded-xl drop-shadow-black'
          />
        </div>
      </div>

      <div className='flex flex-col justify-between gap-5'>
        <div className='flex flex-col gap-5'>
          <h3 className='text-2xl text-white font-semibold text-center text-shadow py-2 bg-gradient-to-r from-transparent via-primary-dark to-transparent'>
            Druhý den
          </h3>
          <ul className='text-white text-xl flex flex-col gap-2'>
            <li className='flex flex-row items-center gap-2'>
              <ChevronRightIcon className='w-5 h-5 text-stone-500 relative top-px' />
              Běh s kládou
            </li>
            <li className='flex flex-row items-center gap-2'>
              <ChevronRightIcon className='w-5 h-5 text-stone-500 relative top-px' />
              Překážková dráha v družstvu
            </li>
            <li className='flex flex-row items-center gap-2'>
              <ChevronRightIcon className='w-5 h-5 text-stone-500 relative top-px' />
              Zrychlený přesun na 10 km
              <WarningIcon className='w-5 h-5 text-primary-light relative top-[2px]' />
            </li>
            <li className='flex flex-row items-center gap-2'>
              <ChevronRightIcon className='w-5 h-5 text-stone-500 relative top-px' />
              Pohovor s psychology
            </li>
          </ul>
        </div>

        <div className='grid grid-cols-2 gap-5'>
          <Image
            src='/images/vyberove-rizeni/beh-s-kladou.jpg'
            width={500}
            height={333}
            alt='Běh s kládou'
            className='rounded-xl drop-shadow-black'
          />
          <Image
            src='/images/vyberove-rizeni/prekazkova-draha-klada.jpg'
            width={500}
            height={333}
            alt='Překážková dráha v družstvu'
            className='rounded-xl drop-shadow-black'
          />
          <Image
            src='/images/vyberove-rizeni/zrychleny-presun.jpg'
            width={500}
            height={333}
            alt='Zrychlený přesun'
            className='rounded-xl drop-shadow-black'
          />
          <Image
            src='/images/vyberove-rizeni/pohovor-s-psychology.jpg'
            width={500}
            height={333}
            alt='Pohovor s psychology'
            className='rounded-xl drop-shadow-black'
          />
        </div>
      </div>

      <div className='flex flex-col justify-between gap-5'>
        <div className='flex flex-col gap-5'>
          <h3 className='text-2xl text-white font-semibold text-center text-shadow py-2 bg-gradient-to-r from-transparent via-primary-dark to-transparent'>
            Třetí den
          </h3>
          <ul className='text-white text-xl flex flex-col gap-2'>
            <li className='flex flex-row items-center gap-2'>
              <ChevronRightIcon className='w-5 h-5 text-stone-500 relative top-px' />
              35 km pochod se zátěží
            </li>
            <li className='flex flex-row items-center gap-2'>
              <ChevronRightIcon className='w-5 h-5 text-stone-500 relative top-px' />
              Esej
            </li>
            <li className='flex flex-row items-center gap-2'>
              <ChevronRightIcon className='w-5 h-5 text-stone-500 relative top-px' />
              Pohovor s psychology
            </li>
            <li className='flex flex-row items-center gap-2'>
              <ChevronRightIcon className='w-5 h-5 text-stone-500 relative top-px' />
              Běh s nosítky
            </li>
          </ul>
        </div>

        <div className='grid grid-cols-2 gap-5'>
          <Image
            src='/images/vyberove-rizeni/pochod-2.jpg'
            width={500}
            height={333}
            alt='35 km pochod se zátěží'
            className='rounded-xl drop-shadow-black'
          />
          <Image
            src='/images/vyberove-rizeni/pochod.jpg'
            width={500}
            height={333}
            alt='35 km pochod se zátěží'
            className='rounded-xl drop-shadow-black'
          />
          <Image
            src='/images/vyberove-rizeni/nositka.jpg'
            width={500}
            height={333}
            alt='Běh s nosítky'
            className='rounded-xl drop-shadow-black'
          />
          <Image
            src='/images/vyberove-rizeni/zaver.jpg'
            width={500}
            height={333}
            alt='Závěr'
            className='rounded-xl drop-shadow-black'
          />
        </div>
      </div>
    </div>
  </Slide>
);

export default VyberoveRizeniPopis;
