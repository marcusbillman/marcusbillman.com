interface Props {
  transparent?: boolean;
  className?: string;
}

export default function Phone({ transparent = false, className }: Props) {
  return transparent ? (
    <svg
      width="70"
      height="120"
      viewBox="0 0 70 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="1.5"
        y="1.5"
        width="67"
        height="117"
        rx="8.5"
        stroke="#4265E3"
        strokeWidth="3"
      />
      <circle cx="26" cy="86" r="4.5" stroke="#3551B6" strokeWidth="3" />
      <rect
        x="39.5"
        y="87.5"
        width="9"
        height="9"
        stroke="#3551B6"
        strokeWidth="3"
      />
      <path
        d="M26.7369 105.25L31.5 97L36.2631 105.25H26.7369Z"
        stroke="#3551B6"
        strokeWidth="3"
      />
      <path
        d="M59 117V73.6296C59 71.625 57.375 70 55.3704 70H14.6296C12.625 70 11 71.625 11 73.6296V117"
        stroke="#3551B6"
        strokeWidth="3"
      />
      <rect x="9" y="25" width="30" height="3" fill="#4265E3" />
      <rect x="43" y="25" width="10" height="3" fill="#4265E3" />
      <rect x="9" y="43" width="20" height="3" fill="#4265E3" />
      <rect x="9" y="34" width="40" height="3" fill="#4265E3" />
    </svg>
  ) : (
    <svg
      width="70"
      height="120"
      viewBox="0 0 70 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="1.5"
        y="1.5"
        width="67"
        height="117"
        rx="8.5"
        fill="white"
        stroke="#4265E3"
        strokeWidth="3"
      />
      <circle cx="26" cy="86" r="4.5" stroke="#3551B6" strokeWidth="3" />
      <rect
        x="39.5"
        y="87.5"
        width="9"
        height="9"
        stroke="#3551B6"
        strokeWidth="3"
      />
      <path
        d="M26.7369 105.25L31.5 97L36.2631 105.25H26.7369Z"
        stroke="#3551B6"
        strokeWidth="3"
      />
      <path
        d="M59 117V73.6296C59 71.625 57.375 70 55.3704 70H14.6296C12.625 70 11 71.625 11 73.6296V117"
        stroke="#3551B6"
        strokeWidth="3"
      />
      <rect x="9" y="25" width="30" height="3" fill="#4265E3" />
      <rect x="43" y="25" width="10" height="3" fill="#4265E3" />
      <rect x="9" y="43" width="20" height="3" fill="#4265E3" />
      <rect x="9" y="34" width="40" height="3" fill="#4265E3" />
    </svg>
  );
}
