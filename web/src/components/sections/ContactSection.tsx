import {
  Copy,
  EnvelopeSimple,
  PaperPlaneTilt,
} from '@phosphor-icons/react/dist/ssr';
import Button from '@/components/Button';
import DotGrid from '@/components/DotGrid';
import CopyToClipboard from '@/components/CopyToClipboard';
import { AnimatePresence } from 'framer-motion';
import ContactFormModal from '@/components/ContactFormModal';
import { useState } from 'react';

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const EMAIL = 'hello@marcusbillman.com';

  return (
    <section className="flex flex-col items-center md:px-4 md:pb-4 lg:px-16 lg:pb-40">
      <div className="relative isolate flex w-full flex-col items-center gap-12 overflow-hidden rounded-2xl bg-subtle px-4 py-16 shadow-lg lg:w-fit lg:rotate-3 lg:gap-16 lg:p-16">
        <h2 className="text-balance text-center text-4xl lg:text-6xl">
          Let's get in touch! 💬
        </h2>
        <div className="flex flex-col items-center gap-4 2xl:flex-row 2xl:gap-8">
          <Button
            text="Open contact form"
            icon={PaperPlaneTilt}
            style="primary"
            onClick={() => setIsModalOpen(true)}
          />
          <AnimatePresence>
            {isModalOpen && (
              <ContactFormModal onClose={() => setIsModalOpen(false)} />
            )}
          </AnimatePresence>
          <div className="text-xl text-subtle lg:text-2xl">or</div>
          <div className="flex flex-col gap-4 rounded-2xl border border-default bg-default p-4 lg:flex-row lg:pl-6">
            <div className="flex items-center gap-2">
              <EnvelopeSimple size={24} className="lg:hidden" />
              <EnvelopeSimple size={32} className="hidden lg:block" />
              <span className="text-xl font-medium lg:text-2xl">{EMAIL}</span>
            </div>
            <div className="flex gap-2 lg:gap-3">
              <CopyToClipboard text={EMAIL}>
                <Button
                  text="Copy"
                  icon={Copy}
                  size="small"
                  className="lg:hidden"
                />
                <Button
                  text="Copy"
                  icon={Copy}
                  size="medium"
                  className="hidden lg:flex"
                />
              </CopyToClipboard>
              <Button
                text="Open"
                href={`mailto:${EMAIL}`}
                style="subtle"
                size="small"
                className="lg:hidden"
              />
              <Button
                text="Open"
                href={`mailto:${EMAIL}`}
                style="subtle"
                size="medium"
                className="hidden lg:flex"
              />
            </div>
          </div>
        </div>

        {/* Backgrounds */}
        <DotGrid />
        <div className='absolute left-[10%] top-[10%] -z-10 aspect-square w-[100%] -translate-x-1/2 -translate-y-1/2 bg-[url("/assets/images/glow-orange.png")] bg-cover bg-center' />
        <div className='absolute bottom-[10%] right-[10%] -z-10 aspect-square w-[100%] translate-x-1/2 translate-y-1/2 bg-[url("/assets/images/glow-blueberry.png")] bg-cover bg-center' />
      </div>
    </section>
  );
}
