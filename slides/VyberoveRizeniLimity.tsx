import { XMarkIcon } from "@/components/Icons";
import Slide from "@/components/Slide";
import { useState } from "react";

type DisciplineLimits = {
  [gender: string]: [string, string][];
  m: [string, string][];
  f: [string, string][];
};

type Limits = {
  lehsedy: DisciplineLimits;
  kliky: DisciplineLimits;
  shyby: DisciplineLimits;
  vydrz: DisciplineLimits;
  beh: DisciplineLimits;
};

const limits: Limits = {
  lehsedy: {
    m: [
      ["46", "46"],
      ["45", "45"],
      ["40", "40"],
      ["39", "39"],
      ["34", "34"],
      ["-", "-"],
    ],
    f: [
      ["40", "40"],
      ["33", "33"],
      ["30", "30"],
      ["25", "25"],
      ["22", "22"],
      ["-", "-"],
    ],
  },
  kliky: {
    m: [
      ["28", "28"],
      ["27", "27"],
      ["24", "24"],
      ["22", "22"],
      ["19", "19"],
      ["-", "-"],
    ],
    f: [
      ["-", "-"],
      ["-", "-"],
      ["-", "-"],
      ["-", "-"],
      ["-", "-"],
      ["-", "-"],
    ],
  },
  shyby: {
    m: [
      ["10", "10"],
      ["9", "9"],
      ["8", "8"],
      ["7", "7"],
      ["6", "6"],
      ["-", "-"],
    ],
    f: [
      ["-", "-"],
      ["-", "-"],
      ["-", "-"],
      ["-", "-"],
      ["-", "-"],
      ["-", "-"],
    ],
  },
  vydrz: {
    m: [
      ["-", "-"],
      ["-", "-"],
      ["-", "-"],
      ["-", "-"],
      ["-", "-"],
      ["-", "-"],
    ],
    f: [
      ["0:30", "0:30"],
      ["0:28", "0:28"],
      ["0:22", "0:22"],
      ["0:14", "0:14"],
      ["0:10", "0:10"],
      ["-", "-"],
    ],
  },
  beh: {
    m: [
      ["2 800", "2 800"],
      ["2 700", "2 700"],
      ["2 600", "2 600"],
      ["2 500", "2 500"],
      ["2 300", "2 300"],
      ["2 100", "2 100"],
    ],
    f: [
      ["2 300", "2 300"],
      ["2 200", "2 200"],
      ["2 100", "2 100"],
      ["2 000", "2 000"],
      ["1 900", "1 900"],
      ["1 800", "1 800"],
    ],
  },
};

const VyberoveRizeniLimity = () => {
  const [gender, setGender] = useState("m");
  const [ageCategory, setAgeCategory] = useState(0);

  return (
    <Slide>
      <h2 className='text-3xl font-extrabold uppercase text-center bg-gradient-to-r from-black/70 to-primary/70 text-white text-shadow h-[4.5rem] flex flex-row justify-center items-center absolute top-0 inset-x-0'>
        Výběrové řízení
      </h2>

      <div className='grid grid-cols-3 gap-10 h-full p-10 pt-28'>
        <div className='flex flex-col gap-10'>
          <div className='grid grid-cols-2 gap-5'>
            <button
              className={`py-5 rounded-xl text-xl flex items-center justify-center ${
                gender === "m"
                  ? "bg-white text-stone-900"
                  : "bg-transparent text-white hover:bg-white/10 transition-colors duration-100"
              }`}
              onClick={() => setGender("m")}
            >
              <span>muž</span>
            </button>

            <button
              className={`py-5 rounded-xl text-xl flex items-center justify-center ${
                gender === "f"
                  ? "bg-white text-stone-900"
                  : "bg-transparent text-white hover:bg-white/10 transition-colors duration-100"
              }`}
              onClick={() => setGender("f")}
            >
              <span>žena</span>
            </button>
          </div>

          <div className='grid grid-cols-3 gap-5'>
            <button
              className={`py-3 rounded-xl transition-colors duration-100 ${
                ageCategory === 0
                  ? "bg-white text-stone-900"
                  : "bg-transparent text-white hover:bg-white/10"
              }`}
              onClick={() => setAgeCategory(0)}
            >
              {gender === "m" ? "do 30 let" : "do 25 let"}
            </button>
            <button
              className={`py-3 rounded-xl transition-colors duration-100 ${
                ageCategory === 1
                  ? "bg-white text-stone-900"
                  : "bg-transparent text-white hover:bg-white/10"
              }`}
              onClick={() => setAgeCategory(1)}
            >
              {gender === "m" ? "31 - 35 let" : "26 - 30 let"}
            </button>
            <button
              className={`py-3 rounded-xl transition-colors duration-100 ${
                ageCategory === 2
                  ? "bg-white text-stone-900"
                  : "bg-transparent text-white hover:bg-white/10"
              }`}
              onClick={() => setAgeCategory(2)}
            >
              {gender === "m" ? "36 - 40 let" : "31 - 35 let"}
            </button>
            <button
              className={`py-3 rounded-xl transition-colors duration-100 ${
                ageCategory === 3
                  ? "bg-white text-stone-900"
                  : "bg-transparent text-white hover:bg-white/10"
              }`}
              onClick={() => setAgeCategory(3)}
            >
              {gender === "m" ? "41 - 45 let" : "36 - 40 let"}
            </button>
            <button
              className={`py-3 rounded-xl transition-colors duration-100 ${
                ageCategory === 4
                  ? "bg-white text-stone-900"
                  : "bg-transparent text-white hover:bg-white/10"
              }`}
              onClick={() => setAgeCategory(4)}
            >
              {gender === "m" ? "46 - 50 let" : "41 - 45 let"}
            </button>
            <button
              className={`py-3 rounded-xl transition-colors duration-100 ${
                ageCategory === 5
                  ? "bg-white text-stone-900"
                  : "bg-transparent text-white hover:bg-white/10"
              }`}
              onClick={() => setAgeCategory(5)}
            >
              {gender === "m" ? "50 let a starší" : "46 let a starší"}
            </button>
          </div>
        </div>

        <div className='col-span-2'>
          <div className='border border-dashed border-stone-700 text-white rounded-xl p-5'>
            <table className='table-auto w-full border-separate border-spacing-5'>
              <thead className='text-2xl'>
                <tr>
                  <th></th>
                  <th>Bojová část</th>
                  <th>Zabezpečení a štáb</th>
                </tr>
              </thead>
              <tbody className='text-lg'>
                <tr>
                  <td>
                    <span className='font-semibold'>Leh - sedy</span>{" "}
                    <span className='text-stone-400'>za minutu</span>
                  </td>
                  <td className='text-center'>
                    {limits["lehsedy"][gender][ageCategory][0] === "-" ? (
                      <XMarkIcon className='w-6 h-6 text-stone-400 mx-auto' />
                    ) : (
                      limits["lehsedy"][gender][ageCategory][0]
                    )}
                  </td>
                  <td className='text-center'>
                    {limits["lehsedy"][gender][ageCategory][1] === "-" ? (
                      <XMarkIcon className='w-6 h-6 text-stone-400 mx-auto' />
                    ) : (
                      limits["lehsedy"][gender][ageCategory][1]
                    )}
                  </td>
                </tr>

                <tr>
                  <td>
                    <span className='font-semibold'>Kliky</span>{" "}
                    <span className='text-stone-400'>za 30 vteřin</span>
                  </td>
                  <td className='text-center'>
                    {limits["kliky"][gender][ageCategory][0] === "-" ? (
                      <XMarkIcon className='w-6 h-6 text-stone-400 mx-auto' />
                    ) : (
                      limits["kliky"][gender][ageCategory][0]
                    )}
                  </td>
                  <td className='text-center'>
                    {limits["kliky"][gender][ageCategory][1] === "-" ? (
                      <XMarkIcon className='w-6 h-6 text-stone-400 mx-auto' />
                    ) : (
                      limits["kliky"][gender][ageCategory][1]
                    )}
                  </td>
                </tr>

                <tr className={gender === "m" ? "table-row" : "hidden"}>
                  <td>
                    <span className='font-semibold'>Shyby</span>
                  </td>
                  <td className='text-center'>
                    {limits["shyby"][gender][ageCategory][0] === "-" ? (
                      <XMarkIcon className='w-6 h-6 text-stone-400 mx-auto' />
                    ) : (
                      limits["shyby"][gender][ageCategory][0]
                    )}
                  </td>
                  <td className='text-center'>
                    {limits["shyby"][gender][ageCategory][1] === "-" ? (
                      <XMarkIcon className='w-6 h-6 text-stone-400 mx-auto' />
                    ) : (
                      limits["shyby"][gender][ageCategory][1]
                    )}
                  </td>
                </tr>

                <tr className={gender === "f" ? "table-row" : "hidden"}>
                  <td>
                    <span className='font-semibold'>Výdrž ve shybu</span>
                  </td>
                  <td className='text-center'>
                    {limits["vydrz"][gender][ageCategory][0] === "-" ? (
                      <XMarkIcon className='w-6 h-6 text-stone-400 mx-auto' />
                    ) : (
                      limits["vydrz"][gender][ageCategory][0]
                    )}
                  </td>
                  <td className='text-center'>
                    {limits["vydrz"][gender][ageCategory][1] === "-" ? (
                      <XMarkIcon className='w-6 h-6 text-stone-400 mx-auto' />
                    ) : (
                      limits["vydrz"][gender][ageCategory][1]
                    )}
                  </td>
                </tr>

                <tr>
                  <td>
                    <span className='font-semibold'>Běh</span>{" "}
                    <span className='text-stone-400'>na 12 minut</span>
                  </td>
                  <td className='text-center'>
                    {limits["beh"][gender][ageCategory][0] === "-" ? (
                      <XMarkIcon className='w-6 h-6 text-stone-400 mx-auto' />
                    ) : (
                      limits["beh"][gender][ageCategory][0]
                    )}
                  </td>
                  <td className='text-center'>
                    {limits["beh"][gender][ageCategory][1] === "-" ? (
                      <XMarkIcon className='w-6 h-6 text-stone-400 mx-auto' />
                    ) : (
                      limits["beh"][gender][ageCategory][1]
                    )}
                  </td>
                </tr>

                <tr>
                  <td>
                    <span className='font-semibold'>Plavání</span>{" "}
                    <span className='text-stone-400'>na 300 metrů</span>
                  </td>
                  <td className='text-center'>9 minut</td>
                  <td className='text-center'>uplavat</td>
                </tr>

                <tr>
                  <td>
                    <span className='font-semibold'>Překážková dráha</span>
                  </td>
                  <td className='text-center'>1:45 minut</td>
                  <td className='text-center'>3 minuty</td>
                </tr>

                <tr>
                  <td>
                    <span className='font-semibold'>Zrychlený přesun</span>{" "}
                    <span className='text-stone-400'>na 10 kilometrů</span>
                  </td>
                  <td className='text-center'>90 minut</td>
                  <td className='text-center'>
                    <XMarkIcon className='w-6 h-6 text-stone-400 mx-auto' />
                  </td>
                </tr>

                <tr>
                  <td>
                    <span className='font-semibold'>Pěší přesun</span>{" "}
                    <span className='text-stone-400'>na 35 kilometrů</span>
                  </td>
                  <td className='text-center'>8 hodin</td>
                  <td className='text-center'>
                    <XMarkIcon className='w-6 h-6 text-stone-400 mx-auto' />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default VyberoveRizeniLimity;
