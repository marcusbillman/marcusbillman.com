import type { IllustrationProps } from './index';

export default function BrowserIllustration({
  transparent = false,
  className,
}: IllustrationProps) {
  return transparent ? (
    <svg
      width="190"
      height="120"
      viewBox="0 0 190 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="1.5"
        y="1.5"
        width="187"
        height="117"
        rx="6.5"
        stroke="#4265E3"
        strokeWidth="3"
      />
      <path
        d="M88 117V47C88 44.7909 86.2091 43 84 43H18C15.7909 43 14 44.7909 14 47V117"
        stroke="#3551B6"
        strokeWidth="3"
      />
      <circle cx="36.5" cy="68.5" r="8" stroke="#3551B6" strokeWidth="3" />
      <rect
        x="57.5"
        y="68.5"
        width="15"
        height="15"
        stroke="#3551B6"
        strokeWidth="3"
      />
      <path
        d="M38.4067 99.75L47.5 84L56.5933 99.75H38.4067Z"
        stroke="#3551B6"
        strokeWidth="3"
      />
      <path
        d="M13.5 16C13.5 14.6193 14.6193 13.5 16 13.5H173C174.381 13.5 175.5 14.6193 175.5 16V28C175.5 29.3807 174.381 30.5 173 30.5H16C14.6193 30.5 13.5 29.3807 13.5 28V16Z"
        stroke="#4265E3"
        strokeWidth="3"
      />
      <rect x="104" y="71" width="30" height="3" fill="#4265E3" />
      <rect x="138" y="71" width="10" height="3" fill="#4265E3" />
      <rect x="148" y="82" width="20" height="3" fill="#4265E3" />
      <rect x="104" y="82" width="40" height="3" fill="#4265E3" />
    </svg>
  ) : (
    <svg
      width="190"
      height="120"
      viewBox="0 0 190 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="1.5"
        y="1.5"
        width="187"
        height="117"
        rx="6.5"
        fill="white"
        stroke="#4265E3"
        strokeWidth="3"
      />
      <path
        d="M88 117V47C88 44.7909 86.2091 43 84 43H18C15.7909 43 14 44.7909 14 47V117"
        stroke="#3551B6"
        strokeWidth="3"
      />
      <circle cx="36.5" cy="68.5" r="8" stroke="#3551B6" strokeWidth="3" />
      <rect
        x="57.5"
        y="68.5"
        width="15"
        height="15"
        stroke="#3551B6"
        strokeWidth="3"
      />
      <path
        d="M38.4067 99.75L47.5 84L56.5933 99.75H38.4067Z"
        stroke="#3551B6"
        strokeWidth="3"
      />
      <path
        d="M13.5 16C13.5 14.6193 14.6193 13.5 16 13.5H173C174.381 13.5 175.5 14.6193 175.5 16V28C175.5 29.3807 174.381 30.5 173 30.5H16C14.6193 30.5 13.5 29.3807 13.5 28V16Z"
        stroke="#4265E3"
        strokeWidth="3"
      />
      <rect x="104" y="71" width="30" height="3" fill="#4265E3" />
      <rect x="138" y="71" width="10" height="3" fill="#4265E3" />
      <rect x="148" y="82" width="20" height="3" fill="#4265E3" />
      <rect x="104" y="82" width="40" height="3" fill="#4265E3" />
    </svg>
  );
}
