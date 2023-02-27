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

const CoDelame = ({ tasks }: CoDelameProps) => (
  <Slide>
    <Slide.Title>Co děláme</Slide.Title>

    <Slide.Content className='grid grid-cols-5 gap-10'>
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
    </Slide.Content>
  </Slide>
);

export default CoDelame;
