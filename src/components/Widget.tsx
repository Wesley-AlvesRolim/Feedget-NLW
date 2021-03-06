import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {
  return (
    <Popover className="absolute bottom-5 right-5 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button
        type="button"
        className="h-12 px-3 rounded-full bg-brand-500 text-white flex items-center group"
      >
        <ChatTeardropDots className="h-6 w-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-focus:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2">Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  );
}
