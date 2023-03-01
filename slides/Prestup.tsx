import { EmailIcon, GlobeIcon, PhoneIcon } from "@/components/Icons";
import Slide from "@/components/Slide";

const Prestup = () => (
  <Slide>
    <Slide.Title>Přestup z jiného útvaru</Slide.Title>

    <Slide.Content className='text-white flex flex-col justify-between'>
      <p className='text-2xl'>
        Podle nařízení NGŠ{" "}
        <span className='text-stone-500'>(Čj. MO 166313/2019-1304)</span> má
        velitel <span className='font-bold'>povinnost umožnit účast</span> na
        výběrovém řízení ke 43. výsadkovému pluku.
      </p>

      <div className='grid grid-cols-3 gap-10'>
        <div className='flex flex-col justify-center items-center p-5 gap-10 text-4xl bg-primary-dark rounded-lg drop-shadow-black'>
          <GlobeIcon className='w-20 h-20 text-stone-400' />
          www.43vysadkovypluk.cz
        </div>

        <div className='flex flex-col justify-center items-center p-5 gap-10 text-4xl bg-primary-dark rounded-lg drop-shadow-black'>
          <EmailIcon className='w-20 h-20 text-stone-400' />
          info@43vysadkovypluk.cz
        </div>

        <div className='flex flex-col justify-center items-center p-5 gap-10 text-4xl bg-primary-dark rounded-lg drop-shadow-black'>
          <PhoneIcon className='w-20 h-20 text-stone-400' />
          973 248 239
        </div>
      </div>
    </Slide.Content>
  </Slide>
);

export default Prestup;
