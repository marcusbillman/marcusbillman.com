import { useCopyToClipboard } from 'usehooks-ts';
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti';

interface Props {
  text: string;
  children: React.ReactNode;
}

export default function CopyToClipboard({ text, children }: Props) {
  const [copiedText, copy] = useCopyToClipboard();

  function handleClick(event: React.MouseEvent, text: string) {
    copy(text)
      .then(() => {
        toast.success('Copied!');
        confetti({
          origin: {
            x: event.clientX / window.innerWidth || undefined,
            y: event.clientY / window.innerHeight || undefined,
          },
          startVelocity: 20,
        });
      })
      .catch((error) => {
        toast.error("Couldn't copy! 😢");
        console.error(error);
      });
  }

  return (
    <div
      className="w-fit"
      onClick={(event: React.MouseEvent) => handleClick(event, text)}
    >
      {children}
    </div>
  );
}
