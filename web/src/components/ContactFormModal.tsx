import { CircleNotch, PaperPlaneTilt } from '@phosphor-icons/react/dist/ssr';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { useState } from 'react';
import { motion, useAnimate } from 'framer-motion';
import toast from 'react-hot-toast';
import { useForm } from '@formspree/react';
import confetti from 'canvas-confetti';

interface Props {
  onClose: () => void;
}

export default function ContactFormModal({ onClose }: Props) {
  const [isDirty, setIsDirty] = useState(false);
  const [hasWarned, setHasWarned] = useState(false);
  const [scope, animate] = useAnimate();
  const [state, handleSubmit] = useForm(import.meta.env.PUBLIC_FORMSPREE_ID);

  function handleClose() {
    if (!isDirty) return onClose();
    if (hasWarned) return onClose();

    shakeForm();
    toast.error('Click again to discard message');
    setHasWarned(true);
  }

  function handleChange() {
    setIsDirty(true);
    setHasWarned(false);
  }

  if (state.succeeded) {
    toast.success('Message sent!');
    confetti();
    onClose();
  }

  function shakeForm() {
    animate(
      scope.current,
      { x: [-10, 10, -10, 10, -10, 10, 0] },
      { duration: 0.5 },
    );
  }

  return (
    <Modal title="Contact form" onClose={handleClose}>
      <form
        className={`relative flex flex-col gap-6 transition-opacity`}
        ref={scope}
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        {state.submitting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-default text-subtle"
          >
            <CircleNotch size={32} className="animate-spin" />
            <p>Sending...</p>
          </motion.div>
        )}
        <div className="flex flex-col-reverse gap-2">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Super Cool Person"
            disabled={state.submitting}
            className="peer rounded-lg border border-default px-4 py-3 text-xl transition-colors placeholder:text-subtle focus:border-primary"
          />
          <label
            htmlFor="name"
            className="block transition-colors peer-focus:font-serif peer-focus:font-medium peer-focus:italic peer-focus:text-primary"
          >
            Your name
          </label>
        </div>
        <div className="flex flex-col-reverse gap-2">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="super.cool@email.com"
            disabled={state.submitting}
            className="peer rounded-lg border border-default px-4 py-3 text-xl transition-colors placeholder:text-subtle focus:border-primary"
          />
          <label
            htmlFor="email"
            className="block transition-colors peer-focus:font-serif peer-focus:font-medium peer-focus:italic peer-focus:text-primary"
          >
            Your email
          </label>
        </div>
        <div className="flex flex-col-reverse gap-2">
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Hi! I’ve got this cool idea..."
            disabled={state.submitting}
            className="peer rounded-lg border border-default px-4 py-3 text-xl transition-colors placeholder:text-subtle focus:border-primary"
          />
          <label
            htmlFor="message"
            className="block transition-colors peer-focus:font-serif peer-focus:font-medium peer-focus:italic peer-focus:text-primary"
          >
            Message
          </label>
        </div>
        <Button
          text="Send message"
          icon={PaperPlaneTilt}
          style="primary"
          type="submit"
          disabled={state.submitting}
          className="w-full lg:w-fit"
        />
      </form>
    </Modal>
  );
}
