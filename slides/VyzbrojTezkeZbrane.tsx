import Slide from "@/components/Slide";

const VyzbrojTezkeZbrane = () => (
  <Slide>
    <h2 className='text-3xl font-extrabold uppercase text-center bg-gradient-to-r from-black/70 to-primary/70 text-white text-shadow h-[4.5rem] flex flex-row justify-center items-center absolute top-0 inset-x-0'>
      Výzbroj
    </h2>
    <div className='grid grid-cols-3 gap-20 h-full p-10 pt-28'>
      <div className='flex flex-col gap-10'>
        <h3 className='text-2xl text-white font-semibold text-center text-shadow py-2 bg-gradient-to-r from-transparent via-primary-dark to-transparent'>
          Protitankové zbraně
        </h3>

        <div
          className='relative rounded-xl overflow-hidden drop-shadow-black flex flex-row justify-center h-full bg-cover bg-center'
          style={{
            backgroundImage: "url('./images/vyzbroj/carl-gustav-m3.jpg')",
          }}
        >
          <span className='absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-sm text-white flex flex-row items-center justify-center py-2 font-semibold text-xl'>
            Carl Gustav M3
          </span>
        </div>

        <div
          className='relative rounded-xl overflow-hidden drop-shadow-black flex flex-row justify-center h-full bg-cover bg-center'
          style={{
            backgroundImage: "url('./images/vyzbroj/9k113-konkurs.jpg')",
          }}
        >
          <span className='absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-sm text-white flex flex-row items-center justify-center py-2 font-semibold text-xl'>
            9K113 Konkurs
          </span>
        </div>
      </div>

      <div className='flex flex-col gap-10'>
        <h3 className='text-2xl text-white font-semibold text-center text-shadow py-2 bg-gradient-to-r from-transparent via-primary-dark to-transparent'>
          Granátomety
        </h3>

        <div
          className='relative rounded-xl overflow-hidden drop-shadow-black flex flex-row justify-center h-full bg-cover bg-center'
          style={{
            backgroundImage: "url('./images/vyzbroj/cz-805-g1.jpg')",
          }}
        >
          <span className='absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-sm text-white flex flex-row items-center justify-center py-2 font-semibold text-xl'>
            CZ 805 G1
          </span>
        </div>

        <div
          className='relative rounded-xl overflow-hidden drop-shadow-black flex flex-row justify-center h-full bg-cover bg-center'
          style={{
            backgroundImage: "url('./images/vyzbroj/ags-17.jpg')",
          }}
        >
          <span className='absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-sm text-white flex flex-row items-center justify-center py-2 font-semibold text-xl'>
            AGS-17
          </span>
        </div>
      </div>

      <div className='flex flex-col gap-10'>
        <h3 className='text-2xl text-white font-semibold text-center text-shadow py-2 bg-gradient-to-r from-transparent via-primary-dark to-transparent'>
          Minomety
        </h3>

        <div
          className='relative rounded-xl overflow-hidden drop-shadow-black flex flex-row justify-center h-full bg-cover bg-center'
          style={{
            backgroundImage: "url('./images/vyzbroj/antos-lr.jpg')",
          }}
        >
          <span className='absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-sm text-white flex flex-row items-center justify-center py-2 font-semibold text-xl'>
            ANTOS-LR
          </span>
        </div>

        <div
          className='relative rounded-xl overflow-hidden drop-shadow-black flex flex-row justify-center h-full bg-cover bg-center'
          style={{
            backgroundImage: "url('./images/vyzbroj/expal-mx2-km.jpg')",
          }}
        >
          <span className='absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-sm text-white flex flex-row items-center justify-center py-2 font-semibold text-xl'>
            Expal MX2-KM
          </span>
        </div>
      </div>
    </div>
  </Slide>
);

export default VyzbrojTezkeZbrane;
