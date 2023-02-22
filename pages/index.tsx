import Presentation from "@/components/Presentation";
import CoDelameSlide from "@/slides/CoDelameSlide";
import IntroSlide from "@/slides/IntroSlide";
import VyzbrojPoziceSlide from "@/slides/VyzbrojPoziceSlide";
import VyzbrojTezkeZbraneSlide from "@/slides/VyzbrojTezkeZbraneSlide";
import OrganizacniStrukturaSlide from "@/slides/OrganizacniStrukturaSlide";
import VyberoveRizeniPopis from "@/slides/VyberoveRizeniPopis";
import VyberoveRizeniLimity from "@/slides/VyberoveRizeniLimity";
import DotazySlide from "@/slides/Dotazy";
import Head from "next/head";

type Task = {
  id: string;
  title: string;
  description: string;
  image: string;
};

type SlideData = {
  id: string;
  component: string;
  props?: object;
};

interface HomeProps {
  slides: SlideData[];
}

const slideComponents: { [index: string]: any } = {
  IntroSlide,
  CoDelameSlide,
  VyzbrojPoziceSlide,
  VyzbrojTezkeZbraneSlide,
  OrganizacniStrukturaSlide,
  VyberoveRizeniPopis,
  VyberoveRizeniLimity,
  DotazySlide,
};

export default function Home({ slides }: HomeProps) {
  return (
    <>
      <Head>
        <title>43. výsadkový pluk</title>
        <meta name='description' content='Prezentace 43. výsadkového pluku' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Presentation>
        {slides.map((slide) => {
          const SlideComponent = slideComponents[slide.component];

          return <SlideComponent key={slide.id} {...slide.props} />;
        })}
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

  const slides: SlideData[] = [
    {
      id: "intro",
      component: "IntroSlide",
    },
    {
      id: "co-delame",
      component: "CoDelameSlide",
      props: {
        tasks,
      },
    },
    {
      id: "vyzbroj-pozice",
      component: "VyzbrojPoziceSlide",
    },
    {
      id: "vyzbroj-tezke-zbrane",
      component: "VyzbrojTezkeZbraneSlide",
    },
    {
      id: "organizacni-struktura",
      component: "OrganizacniStrukturaSlide",
    },
    {
      id: "vyberove-rizeni-popis",
      component: "VyberoveRizeniPopis",
    },
    {
      id: "vyberove-rizeni-limity",
      component: "VyberoveRizeniLimity",
    },
    {
      id: "dotazy",
      component: "DotazySlide",
    },
  ];

  return {
    props: {
      slides,
    },
  };
}
