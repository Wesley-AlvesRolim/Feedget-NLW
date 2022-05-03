import { CloseWidgetButton } from "../../CloseWidgetButton";
import successUrl from "../../../assets/success.svg";

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequested,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseWidgetButton />
      </header>

      <div className="w-[304px] py-10 flex flex-col items-center">
        <img src={successUrl} alt="Um 'v' de sucesso." />
        <span className="mt-2 text-xl">Agradecemos o feedback</span>
      </div>

      <button
        onClick={onFeedbackRestartRequested}
        type="button"
        className="py-2 px-6 mb-6 border-transparent rounded-md text-sm leading-6 bg-zinc-800 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
      >
        Quero enviar outro
      </button>
    </>
  );
}
