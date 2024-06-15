interface Props {
  transparent?: boolean;
  className?: string;
}

export default function Dropdown({ transparent = false, className }: Props) {
  return transparent ? (
    <svg
      width="141"
      height="66"
      viewBox="0 0 141 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="1.73761"
        y="1.5"
        width="137"
        height="63"
        rx="2.5"
        stroke="#4265E3"
        strokeWidth="3"
      />
      <path
        d="M127.238 19L121.238 13L115.238 19"
        stroke="#4265E3"
        strokeWidth="3"
      />
      <rect x="16.2376" y="33" width="60" height="3" fill="#3551B6" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.23761 44H137.238V63H3.23761V44ZM16.2376 52H52.2376V55H16.2376V52ZM71.2376 52H56.2376V55H71.2376V52Z"
        fill="#3551B6"
      />
      <rect x="16.2376" y="14" width="50" height="3" fill="#3551B6" />
    </svg>
  ) : (
    <svg
      width="141"
      height="66"
      viewBox="0 0 141 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="1.73761"
        y="1.5"
        width="137"
        height="63"
        rx="2.5"
        fill="white"
        stroke="#4265E3"
        strokeWidth="3"
      />
      <path
        d="M127.238 19L121.238 13L115.238 19"
        stroke="#4265E3"
        strokeWidth="3"
      />
      <rect x="16.2376" y="33" width="60" height="3" fill="#3551B6" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.23761 44H137.238V63H3.23761V44ZM16.2376 52H52.2376V55H16.2376V52ZM71.2376 52H56.2376V55H71.2376V52Z"
        fill="#3551B6"
      />
      <rect x="16.2376" y="14" width="50" height="3" fill="#3551B6" />
    </svg>
  );
}
