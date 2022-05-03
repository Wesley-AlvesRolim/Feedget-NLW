import { FeedbackTypes } from "..";
import { CloseWidgetButton } from "../../CloseWidgetButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackTypes;
}

export function FeedbackContentStep({
  feedbackType,
}: FeedbackContentStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">{feedbackType}</span>
        <CloseWidgetButton />
      </header>
      <div className="w-full py-8 flex gap-2">
        <textarea name="" id="" cols={30} rows={10} />
      </div>
    </>
  );
}
