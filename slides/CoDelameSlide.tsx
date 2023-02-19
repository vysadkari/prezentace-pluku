import Slide from "@/components/Slide";

type Task = {
  id: string;
  title: string;
  description: string;
  image: string;
};

interface CoDelameProps {
  tasks: Task[];
}

const CoDelameSlide = ({ tasks }: CoDelameProps) => (
  <Slide>
    <h2 className='text-3xl font-extrabold uppercase text-center bg-gradient-to-r from-black/70 to-primary/70 text-white text-shadow h-[4.5rem] flex flex-row justify-center items-center absolute top-0 inset-x-0'>
      Co děláme
    </h2>
    <div className='grid grid-cols-5 h-full p-10 pt-28 gap-10'>
      {tasks.map((task) => (
        <div
          key={task.id}
          className='bg-cover bg-center rounded-xl drop-shadow-black overflow-hidden border-t border-stone-800 relative'
          style={{
            backgroundImage: `url('${task.image}')`,
          }}
        >
          <h3 className='absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-sm text-white flex flex-row items-center justify-center py-2 font-semibold text-xl'>
            {task.title}
          </h3>
        </div>
      ))}
    </div>
  </Slide>
);

export default CoDelameSlide;
