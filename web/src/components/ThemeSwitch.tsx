import type { Icon } from '@phosphor-icons/react/dist/lib/types';

import { useEffect } from 'react';
import { ArrowsClockwise, Moon, Sun } from '@phosphor-icons/react/dist/ssr';
import { toast } from 'sonner';
import { useLocalStorage } from 'usehooks-ts';

export type Theme = 'light' | 'dark' | 'system';

export default function ThemeSwitch() {
  const [value, setValue] = useLocalStorage<Theme>('theme', 'system');

  useEffect(() => {
    if (value === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else if (value === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('light', 'dark');
    }
  }, [value]);

  return (
    <div
      role="radiogroup"
      aria-label="Colour theme"
      className="flex items-center rounded-full bg-subtle p-2"
    >
      <SwitchSegment
        icon={Sun}
        label="Light theme"
        isSelected={value === 'light'}
        onChange={() => {
          setValue('light');
          toast.success('Switched to light theme');
        }}
      />
      <SwitchSegment
        icon={Moon}
        label="Dark theme"
        isSelected={value === 'dark'}
        onChange={() => {
          setValue('dark');
          toast.success('Switched to dark theme');
        }}
      />
      <SwitchSegment
        icon={ArrowsClockwise}
        label="Sync with device"
        isSelected={value === 'system'}
        onChange={() => {
          setValue('system');
          toast.success('Syncing with your device theme');
        }}
      />
    </div>
  );
}

interface SwitchSegmentProps {
  icon: Icon;
  label: string;
  isSelected: boolean;
  onChange?: () => void;
}

function SwitchSegment({
  icon: IconComponent,
  label,
  isSelected,
  onChange,
}: SwitchSegmentProps) {
  return (
    <div
      className={`${isSelected ? 'bg-default' : 'text-subtle'} relative grid size-12 place-items-center rounded-full transition-colors focus-within:ring hover:text-default`}
    >
      <input
        type="radio"
        role="radio"
        name="theme"
        checked={isSelected}
        aria-label={label}
        className={`${isSelected ? 'cursor-default' : 'cursor-pointer'} absolute inset-0 opacity-0`}
        onChange={onChange}
      />
      <IconComponent size={24} />
    </div>
  );
}
