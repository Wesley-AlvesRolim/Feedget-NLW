import { CloseWidgetButton } from "./CloseWidgetButton";

import bugImageUrl from "../assets/bug.svg";
import ideaImageUrl from "../assets/idea.svg";
import thoughtImageUrl from "../assets/thought.svg";

const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      alt: "Bug, ou em português: inseto",
      source: bugImageUrl,
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      alt: "Imagem de uma lâmpada",
      source: ideaImageUrl,
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      alt: "Imagem de uma nuvem de pensamento",
      source: thoughtImageUrl,
    },
  },
};

export function WidgetForm() {
  return (
    <div className="w-[calc(100vw-2rem)] p-4 mb-4 rounded-2xl bg-zinc-900 relative flex flex-col items-center shadow-lg md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe o seu feedback</span>
        <CloseWidgetButton />
      </header>

      <div className="w-full py-8 flex gap-2">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            type="button"
            className="w-24 py-5 rounded-lg border border-transparent bg-zinc-800 flex flex-col flex-1 items-center gap-2 hover:border-brand-500 focus:border-brand-500 focus:outline-0"
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>

      <footer className="text-xs text-neutral-400">
        Feito com ❤ por
        <a
          className="ml-1 underline underline-offset-2"
          href="https://rocketseat.com.br"
          target="_blank"
          rel="noreferrer"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
