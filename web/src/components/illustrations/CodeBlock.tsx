import type { IllustrationProps } from './index';

export default function CodeBlock({
  transparent = false,
  className,
}: IllustrationProps) {
  return transparent ? (
    <svg
      width="200"
      height="95"
      viewBox="0 0 200 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="1.5"
        y="1.5"
        width="197"
        height="92"
        rx="6.5"
        stroke="#4265E3"
        strokeWidth="3"
      />
      <rect x="16" y="16" width="40" height="3" fill="#4265E3" />
      <rect x="16" y="76" width="20" height="3" fill="#4265E3" />
      <rect x="32" y="31" width="60" height="3" fill="#3551B6" />
      <rect x="32" y="46" width="30" height="3" fill="#3551B6" />
      <rect x="32" y="61" width="40" height="3" fill="#3551B6" />
      <rect x="76" y="61" width="50" height="3" fill="#3551B6" />
      <rect x="66" y="46" width="30" height="3" fill="#4265E3" />
      <rect x="130" y="61" width="50" height="3" fill="#4265E3" />
      <rect x="100" y="46" width="50" height="3" fill="#4265E3" />
      <rect x="96" y="31" width="46" height="3" fill="#4265E3" />
      <rect x="146" y="31" width="30" height="3" fill="#4265E3" />
    </svg>
  ) : (
    <svg
      width="200"
      height="95"
      viewBox="0 0 200 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="1.5"
        y="1.5"
        width="197"
        height="92"
        rx="6.5"
        fill="white"
        stroke="#4265E3"
        strokeWidth="3"
      />
      <rect x="16" y="16" width="40" height="3" fill="#4265E3" />
      <rect x="16" y="76" width="20" height="3" fill="#4265E3" />
      <rect x="32" y="31" width="60" height="3" fill="#3551B6" />
      <rect x="32" y="46" width="30" height="3" fill="#3551B6" />
      <rect x="32" y="61" width="40" height="3" fill="#3551B6" />
      <rect x="76" y="61" width="50" height="3" fill="#3551B6" />
      <rect x="66" y="46" width="30" height="3" fill="#4265E3" />
      <rect x="130" y="61" width="50" height="3" fill="#4265E3" />
      <rect x="100" y="46" width="50" height="3" fill="#4265E3" />
      <rect x="96" y="31" width="46" height="3" fill="#4265E3" />
      <rect x="146" y="31" width="30" height="3" fill="#4265E3" />
    </svg>
  );
}
