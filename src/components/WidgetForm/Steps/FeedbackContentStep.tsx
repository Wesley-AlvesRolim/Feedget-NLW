import { ArrowLeft, Camera } from "phosphor-react";
import { feedbackTypes, FeedbackTypes } from "..";
import { CloseWidgetButton } from "../../CloseWidgetButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackTypes;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const currentFeedbackTypeStep = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <button
          onClick={onFeedbackRestartRequested}
          type="button"
          className="absolute left-5 top-5 text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            className="w-6 h-6"
            src={currentFeedbackTypeStep.image.source}
            alt={currentFeedbackTypeStep.image.alt}
          />
          {currentFeedbackTypeStep.title}
        </span>
        <CloseWidgetButton />
      </header>
      <form className="w-full my-4">
        <textarea
          placeholder="Conte com detalhes o que está acontecendo..."
          className="min-w-[304px] w-full min-h-[112px] rounded-md text-sm text-zinc-100 bg-transparent border-zinc-600 placeholder-zinc-400 resize-none focus:border-brand-500 focus:ring-brand-500 focus:ring-1"
        />

        <footer className="mt-2 flex gap-2">
          <button
            type="button"
            className="p-2 border-transparent rounded-md bg-zinc-800 justify-center items-center hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors"
          >
            <Camera className="w-6 h-6" />
          </button>

          <button
            type="submit"
            className="p-2 border-transparent rounded-md text-sm bg-brand-500 flex-1 justify-center items-center hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors"
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  );
}
