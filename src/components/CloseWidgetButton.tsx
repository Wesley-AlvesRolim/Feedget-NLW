import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseWidgetButton() {
  return (
    <Popover.Button
      title="Fechar o formulário de feedback."
      className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-100"
    >
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  );
}
