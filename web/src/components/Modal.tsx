import { createPortal } from 'react-dom';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { useTailwindConfig } from '@/util/tailwind';
import { useMediaQuery } from 'usehooks-ts';
import { useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from '@/util/document';
import { X } from '@phosphor-icons/react/dist/ssr';

interface Props {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ title, onClose, children }: Props) {
  const resolvedTailwindConfig = useTailwindConfig();

  const isDesktop = useMediaQuery(
    `(min-width: ${resolvedTailwindConfig.theme.screens.lg})`,
  );

  // Disable body scrolling while modal is open
  useEffect(() => {
    disableBodyScroll();
    return () => enableBodyScroll();
  }, []);

  function handleClose() {
    enableBodyScroll();
    onClose();
  }

  return createPortal(
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center"
        initial={isDesktop ? { opacity: 0, scale: 0.8 } : { y: '100%' }}
        animate={isDesktop ? { opacity: 1, scale: 1 } : { y: 0 }}
        exit={isDesktop ? { opacity: 0, scale: 0.8 } : { y: '100%' }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
      >
        <div className="pointer-events-auto fixed bottom-0 z-[60] flex h-fit max-h-[95vh] w-full flex-col overflow-hidden rounded-t-4xl bg-default lg:bottom-auto lg:max-w-3xl lg:rounded-4xl">
          <div className="flex items-center justify-between p-4 lg:border-b lg:border-b-default lg:p-6">
            <h2 className="font-serif text-xl font-medium italic">{title}</h2>
            <Button
              text="Close"
              icon={X}
              iconSide="right"
              size="small"
              style="subtle"
              onClick={handleClose}
            />
          </div>
          <div className="overflow-y-auto p-4 lg:p-6">{children}</div>
        </div>
      </motion.div>
      <motion.div
        className="fixed inset-0 z-50 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        onClick={handleClose}
      />
    </>,
    document.body,
  );
}
