import { useState } from "react";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
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

export type FeedbackTypes = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleFeedbackRestart() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="w-[calc(100vw-2rem)] p-4 mb-4 rounded-2xl bg-zinc-900 relative flex flex-col items-center shadow-lg md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleFeedbackRestart}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackSent={() => {
                setFeedbackSent(true);
              }}
              onFeedbackRestartRequested={handleFeedbackRestart}
            />
          )}
        </>
      )}

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
