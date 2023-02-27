import Slide from "@/components/Slide";

const VyzbrojPozice = () => (
  <Slide>
    <Slide.Title>Výzbroj</Slide.Title>

    <Slide.Content className='grid grid-cols-3 gap-20'>
      <div className='flex flex-col gap-10'>
        <h3 className='text-2xl text-white font-semibold text-center text-shadow py-2 bg-gradient-to-r from-transparent via-primary-dark to-transparent'>
          Střelec
        </h3>

        <div
          className='relative rounded-xl overflow-hidden drop-shadow-black flex flex-row justify-center h-full bg-cover bg-center'
          style={{
            backgroundImage: "url('./images/vyzbroj/glock-17.jpg')",
          }}
        >
          <span className='absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-sm text-white flex flex-row items-center justify-center py-2 font-semibold text-xl'>
            Glock 17
          </span>
        </div>

        <div
          className='relative rounded-xl overflow-hidden drop-shadow-black flex flex-row justify-center h-full bg-cover bg-center'
          style={{
            backgroundImage: "url('./images/vyzbroj/cz-bren-2.jpg')",
          }}
        >
          <span className='absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-sm text-white flex flex-row items-center justify-center py-2 font-semibold text-xl'>
            CZ BREN 2
          </span>
        </div>
      </div>

      <div className='flex flex-col gap-10'>
        <h3 className='text-2xl text-white font-semibold text-center text-shadow py-2 bg-gradient-to-r from-transparent via-primary-dark to-transparent'>
          Kulometník
        </h3>

        <div
          className='relative rounded-xl overflow-hidden drop-shadow-black flex flex-row justify-center h-full bg-cover bg-center'
          style={{
            backgroundImage: "url('./images/vyzbroj/glock-17.jpg')",
          }}
        >
          <span className='absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-sm text-white flex flex-row items-center justify-center py-2 font-semibold text-xl'>
            Glock 17
          </span>
        </div>

        <div
          className='relative rounded-xl overflow-hidden drop-shadow-black flex flex-row justify-center h-full bg-cover bg-center'
          style={{
            backgroundImage: "url('./images/vyzbroj/minimi-mk48.jpg')",
          }}
        >
          <span className='absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-sm text-white flex flex-row items-center justify-center py-2 font-semibold text-xl'>
            Minimi Mk48
          </span>
        </div>
      </div>

      <div className='flex flex-col gap-10'>
        <h3 className='text-2xl text-white font-semibold text-center text-shadow py-2 bg-gradient-to-r from-transparent via-primary-dark to-transparent'>
          Řidič
        </h3>

        <div
          className='relative rounded-xl overflow-hidden drop-shadow-black flex flex-row justify-center h-full bg-cover bg-center'
          style={{
            backgroundImage: "url('./images/vyzbroj/glock-17.jpg')",
          }}
        >
          <span className='absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-sm text-white flex flex-row items-center justify-center py-2 font-semibold text-xl'>
            Glock 17
          </span>
        </div>

        <div
          className='relative rounded-xl overflow-hidden drop-shadow-black flex flex-row justify-center h-full bg-cover bg-center'
          style={{
            backgroundImage: "url('./images/vyzbroj/benelli-m3t.jpg')",
          }}
        >
          <span className='absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-sm text-white flex flex-row items-center justify-center py-2 font-semibold text-xl'>
            Benelli M3T
          </span>
        </div>
      </div>
    </Slide.Content>
  </Slide>
);

export default VyzbrojPozice;
