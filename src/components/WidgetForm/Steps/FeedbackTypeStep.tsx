import { FeedbackTypes, feedbackTypes } from "..";
import { CloseWidgetButton } from "../../CloseWidgetButton";

interface FeedbackTypeStepProps {
  // eslint-disable-next-line no-unused-vars
  onFeedbackTypeChanged: (type: FeedbackTypes) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe o seu feedback</span>
        <CloseWidgetButton />
      </header>
      <div className="w-full py-8 flex gap-2">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            type="button"
            onClick={() => onFeedbackTypeChanged(key as FeedbackTypes)}
            className="w-24 py-5 rounded-lg border border-transparent bg-zinc-800 flex flex-col flex-1 items-center gap-2 hover:border-brand-500 focus:border-brand-500 focus:outline-0"
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
