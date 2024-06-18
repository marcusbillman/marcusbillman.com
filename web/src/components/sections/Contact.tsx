import {
  Copy,
  EnvelopeSimple,
  PaperPlaneTilt,
} from '@phosphor-icons/react/dist/ssr';
import Button from '@/components/Button';
import DotGrid from '@/components/DotGrid';
import { useCopyToClipboard } from 'usehooks-ts';
import toast, { Toaster } from 'react-hot-toast';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copiedText, copy] = useCopyToClipboard();
  const email = 'hello@marcusbillman.com';

  function handleClickCopy(event: React.MouseEvent, text: string) {
    copy(text)
      .then(() => {
        toast.success('Copied!');
        confetti({
          origin: {
            x: event.clientX / window.innerWidth,
            y: event.clientY / window.innerHeight,
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
    <section className="flex flex-col items-center md:px-4 lg:px-16">
      <Toaster position="bottom-center" toastOptions={{ duration: 3000 }} />
      <div className="relative isolate flex w-full flex-col items-center gap-12 overflow-hidden rounded-2xl bg-subtle px-4 py-16 shadow-lg lg:w-fit lg:rotate-3 lg:gap-16 lg:p-16">
        <h2 className="text-balance text-center text-4xl lg:text-6xl">
          Let's get in touch! 💬
        </h2>
        <div className="flex flex-col items-center gap-4 2xl:flex-row 2xl:gap-8">
          <Button
            text="Open contact form"
            icon={PaperPlaneTilt}
            style="primary"
          />
          <div className="text-xl text-subtle lg:text-2xl">or</div>
          <div className="flex flex-col gap-4 rounded-2xl border border-default bg-default px-4 py-4 lg:flex-row lg:px-6">
            <div className="flex items-center gap-2">
              <EnvelopeSimple size={24} />
              <span className="text-xl lg:text-2xl">{email}</span>
            </div>
            <div className="flex gap-2 lg:gap-3">
              <div className="lg:hidden">
                <Button
                  text="Copy"
                  icon={Copy}
                  size="small"
                  onClick={(event: React.MouseEvent) =>
                    handleClickCopy(event, email)
                  }
                />
              </div>
              <div className="hidden lg:block">
                <Button
                  text="Copy"
                  icon={Copy}
                  size="medium"
                  onClick={(event: React.MouseEvent) =>
                    handleClickCopy(event, email)
                  }
                />
              </div>
              <div className="lg:hidden">
                <Button
                  text="Open"
                  href={`mailto:${email}`}
                  style="subtle"
                  size="small"
                />
              </div>
              <div className="hidden lg:block">
                <Button
                  text="Open"
                  href={`mailto:${email}`}
                  style="subtle"
                  size="medium"
                />
              </div>
            </div>
          </div>
        </div>
        <div className='absolute left-[10%] top-[10%] -z-10 aspect-square w-[100%] -translate-x-1/2 -translate-y-1/2 bg-[url("/assets/images/glow-orange.png")] bg-cover bg-center' />
        <div className='absolute bottom-[10%] right-[10%] -z-10 aspect-square w-[100%] translate-x-1/2 translate-y-1/2 bg-[url("/assets/images/glow-blueberry.png")] bg-cover bg-center' />
        <DotGrid />
      </div>
    </section>
  );
}
