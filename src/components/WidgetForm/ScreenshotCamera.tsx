import { useState } from "react";
import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { Loading } from "../Loading";

interface ScreenshotCameraProps {
  screenshot: string | null;
  // eslint-disable-next-line no-unused-vars
  onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotCamera({
  screenshot,
  onScreenshotTook,
}: ScreenshotCameraProps) {
  const [isTakingAScreenshot, setIsTakingAScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingAScreenshot(true);

    const html = document.querySelector("html")!;
    const canvas = await html2canvas(html, {});
    const base64Image = canvas.toDataURL("image/png");

    onScreenshotTook(base64Image);
    setIsTakingAScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        onClick={() => onScreenshotTook(null)}
        type="button"
        className="w-10 h-10 p-1 border-transparent rounded-md flex justify-end items-end text-zinc-400 hover:bg-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 180,
        }}
      >
        <Trash />
      </button>
    );
  }

  return (
    <button
      onClick={handleTakeScreenshot}
      type="button"
      className="p-2 border-transparent rounded-md bg-zinc-800 justify-center items-center hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors"
    >
      {isTakingAScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
}
