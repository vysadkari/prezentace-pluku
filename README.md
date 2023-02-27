Prezentace sloužící k představení 43. výsadkového pluku

## Spuštění

1. Stáhnout repozitář
2. Nainstalovat závislosti: `yarn`
   - Vyžaduje nainstalovaný [yarn](https://yarnpkg.com/getting-started/install)
3. Spustit vývojový server: `yarn dev`
4. Otevřít adresu [http://localhost:3000](http://localhost:3000)

## Struktura

- **components/\***: Komponenty pro ikonky, prezentaci a slidy
- **pages/index.tsx**: Vstupní bod prezentace
- **slides/\***: Komponenty se slidy
- **styles/globals.css**: CSS styly

## Přidání nového slidu

Nejprve je potřeba vytvořit nový soubor (například `UkazkovySlide.tsx`) ve složce `slides`, který bude obsahovat a exportovat komponentu se slidem. Pro začátek může posloužit tato šablona:

```tsx
import Slide from "@/components/Slide";

const UkazkovySlide = () => (
  <Slide>
    <Slide.Title>Ukázkový slide</Slide.Title>

    <Slide.Content>{/* Obsah slidu */}</Slide.Content>
  </Slide>
);

export default UkazkovySlide;
```

Poté ji stačí v souboru `pages/index.tsx` naimportovat:

```tsx
import UkazkovySlide from "@/slides/UkazkovySlide";
```

Přidat do objektu `slideComponents`:

```tsx
const slideComponents: { [index: string]: any } = {
  // ...
  UkazkovySlide,
};
```

Ve funkci `getStaticProps` přidat záznam do pole `slides`:

```tsx
const slides: SlideData[] = [
  // ...
  {
    id: "ukazka",
    component: "UkazkovySlide",
  },
];
```

## Export

Pro používání bez webového serveru (např. z flash disku) je třeba prezentaci exportovat do HTML. K tomu je potřeba dvou příkazů:

```
yarn build
yarn export
```

Výsledek bude poté uložen ve složce `out`.
