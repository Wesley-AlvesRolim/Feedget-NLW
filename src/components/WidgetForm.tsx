import { CloseWidgetButton } from "./CloseWidgetButton";

export function WidgetForm() {
  return (
    <div className="w-[calc(100vw-2rem)] p-4 mb-4 rounded-2xl bg-zinc-900 relative flex flex-col items-center shadow-lg md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe o seu feedback</span>
        <CloseWidgetButton />
      </header>

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
