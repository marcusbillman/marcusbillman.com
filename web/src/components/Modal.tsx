import { createPortal } from 'react-dom';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { useTailwindConfig } from '@/util/tailwind';
import { useMediaQuery } from 'usehooks-ts';

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

  return createPortal(
    <div className="fixed inset-0 z-50 grid place-items-end lg:place-items-center">
      <motion.div
        className="pointer-events-auto w-full overflow-hidden rounded-t-4xl bg-default lg:max-w-3xl lg:rounded-4xl"
        initial={isDesktop ? { opacity: 0, scale: 0.8 } : { y: '100%' }}
        animate={isDesktop ? { opacity: 1, scale: 1 } : { y: 0 }}
        exit={isDesktop ? { opacity: 0, scale: 0.8 } : { y: '100%' }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
      >
        <div className="flex items-center justify-between p-4 lg:border-b lg:border-b-default lg:bg-subtle lg:p-6">
          <h2 className="font-serif text-xl font-medium italic">{title}</h2>
          <Button text="Close" size="small" onClick={onClose} />
        </div>
        <div className="p-4 lg:p-6">{children}</div>
      </motion.div>
      <motion.div
        className="fixed inset-0 -z-10 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        onClick={onClose}
      />
    </div>,
    document.body,
  );
}
