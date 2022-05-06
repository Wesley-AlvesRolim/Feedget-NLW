import { FormEvent, useState } from "react";
import { ArrowLeft } from "phosphor-react";
import { feedbackTypes, FeedbackTypes } from "..";
import { CloseWidgetButton } from "../../CloseWidgetButton";
import { ScreenshotCamera } from "../ScreenshotCamera";
import { api } from "../../../services/api";
import { Loading } from "../../Loading";

interface FeedbackContentStepProps {
  feedbackType: FeedbackTypes;
  onFeedbackSent: () => void;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackSent,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const currentFeedbackTypeStep = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    setIsSendingFeedback(true);

    await api.post("/feedbacks", {
      type: feedbackType,
      comment,
      screenshot,
    });

    setIsSendingFeedback(false);
    onFeedbackSent();
  }

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

      <form className="w-full my-4" onSubmit={handleSubmitFeedback}>
        <textarea
          onChange={(event) => setComment(event.target.value)}
          placeholder="Conte com detalhes o que está acontecendo..."
          className="sm:min-w-[304px] w-full min-h-[112px] rounded-md text-sm text-zinc-100 bg-transparent border-zinc-600 placeholder-zinc-400 resize-none focus:border-brand-500 focus:ring-brand-500 focus:ring-1"
        />

        <footer className="mt-2 flex gap-2">
          <ScreenshotCamera
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            disabled={comment.length === 0 || isSendingFeedback}
            className="p-2 border-transparent rounded-md text-sm bg-brand-500 flex-1 justify-center items-center hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50  disabled:hover:bg-brand-500 transition-colors"
          >
            {isSendingFeedback ? <Loading /> : "Enviar Feedback"}
          </button>
        </footer>
      </form>
    </>
  );
}
