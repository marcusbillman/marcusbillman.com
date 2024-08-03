import { twJoin } from 'tailwind-merge';

import t from '@/utils/i18n';

export default function ThemeSwitch() {
  const language = import.meta.env.PUBLIC_LOCALE || 'en';

  function hrefWithBaseUrl(newBaseUrl: string) {
    return window.location.href.replace(window.location.origin, newBaseUrl);
  }

  return (
    <div
      aria-label={t('navigation.languageSwitch.label')}
      className="flex items-center rounded-full bg-subtle p-2"
    >
      <SwitchSegment
        icon="🇬🇧"
        label={t('navigation.languageSwitch.english')}
        isSelected={language === 'en'}
        href={hrefWithBaseUrl('https://marcusbillman.com')}
      />
      <SwitchSegment
        icon="🇸🇪"
        label={t('navigation.languageSwitch.swedish')}
        isSelected={language === 'sv'}
        href={hrefWithBaseUrl('https://marcusbillman.se')}
      />
    </div>
  );
}

interface SwitchSegmentProps {
  icon: string;
  label: string;
  isSelected: boolean;
  href: string;
}

function SwitchSegment({ icon, label, isSelected, href }: SwitchSegmentProps) {
  return (
    <a
      href={href}
      title={label}
      aria-label={label}
      aria-hidden={isSelected}
      tabIndex={isSelected ? -1 : 0}
      className={twJoin(
        'group grid size-12 place-items-center rounded-full transition-colors focus:ring',
        isSelected && 'pointer-events-none bg-default',
      )}
    >
      <span
        aria-hidden
        className={twJoin(
          'text-xl transition-opacity group-hover:opacity-100 group-focus:opacity-100 lg:text-2xl',
          !isSelected && 'opacity-50',
        )}
      >
        {icon}
      </span>
    </a>
  );
}
