import Presentation from "@/components/Presentation";
import Slide from "@/components/Slide";
import Head from "next/head";
import Image from "next/image";

type Task = {
  id: string;
  title: string;
  description: string;
  image: string;
};

interface HomeProps {
  tasks: Task[];
}

export default function Home({ tasks }: HomeProps) {
  return (
    <>
      <Head>
        <title>43. výsadkový pluk</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Presentation>
        <Slide background='/images/intro.jpg' centered>
          <Image
            src='/images/43vp.svg'
            alt='43. výsadkový pluk'
            width={300}
            height={300}
          />
          <h1 className='text-white bg-black/70 text-center text-4xl font-extrabold uppercase py-10 backdrop-blur-sm w-full'>
            43. výsadkový pluk
          </h1>
        </Slide>

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
      </Presentation>
    </>
  );
}

export async function getStaticProps() {
  const tasks: Task[] = [
    {
      id: "vzdusne-vysadkove-operace",
      title: "Vzdušně-výsadkové operace",
      description:
        "Útok ze zálohy na statický cíl nepřítele s následným stažením do vlastní sestavy.",
      image: "/images/co-delame/vzdusne-vysadkove-operace.jpg",
    },
    {
      id: "operace-v-tylu-nepritele",
      title: "Operace v týlu nepřítele",
      description:
        "Dlouhodobé operace prováděné výsadkáři v hloubce nepřátelské sestavy proti citlivým cílům.",
      image: "/images/co-delame/operace-v-tylu-nepritele.jpg",
    },
    {
      id: "vyhledej-a-znic",
      title: "Vyhledej a znič",
      description:
        "Operace malých výsadkových jednotek s cílem navázání kontaktu se silami nepřítele s jejich následným zničením.",
      image: "/images/co-delame/vyhledej-a-znic.jpg",
    },
    {
      id: "boj-na-zdrzenou",
      title: "Boj na zdrženou",
      description:
        "Defenzivní činnost, při které výsadkáři prováděním léček a přepadů získávají čas pro hlavní obranné síly.",
      image: "/images/co-delame/boj-na-zdrzenou.jpg",
    },

    {
      id: "prepadove-operace",
      title: "Přepadové operace",
      description:
        "Útok ze zálohy na statický cíl nepřítele s následným stažením do vlastní sestavy.",
      image: "/images/co-delame/prepadove-operace.jpg",
    },

    {
      id: "lecky",
      title: "Léčky",
      description:
        "Překvapivý útok ze zamaskovaných pozic na pohybující se nebo dočasně zastavený cíl nepřítele.",
      image: "/images/co-delame/lecky.jpg",
    },
    {
      id: "ovladnuti",
      title: "Ovládnutí",
      description:
        "Překvapivý útok na nepřátelský objekt bez následného stažení s cílem jeho dalšího využití vlastními silami.",
      image: "/images/co-delame/ovladnuti.jpg",
    },

    {
      id: "stabilizacni-operace",
      title: "Stabilizační operace",
      description:
        "Využití vojenských schopností v konfliktech nízké intenzity, a to poradenskou nebo protipovstaleckou činností.",
      image: "/images/co-delame/stabilizacni-operace.jpg",
    },

    {
      id: "evakuace-nekombatantu",
      title: "Evakuace nekombatantů",
      description:
        "Evakuaci českých občanů zpět do vlasti, například kvůli vnitřnímu ozbrojenému konfliktu nebo přírodní katastrofě.",
      image: "/images/co-delame/evakuace-nekombatantu.jpg",
    },

    {
      id: "zachrana-leteckych-osadek",
      title: "Záchrana leteckých osádek",
      description:
        "Operace s cílem záchrany sestřelených nebo havarovaných leteckých osádek z týlu nepřítele.",
      image: "/images/co-delame/zachrana-leteckych-osadek.jpg",
    },
  ];

  return {
    props: {
      tasks,
    },
  };
}
