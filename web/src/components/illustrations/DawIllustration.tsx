import type { IllustrationProps } from './index';

export default function DawIllustration({
  transparent = false,
  className,
}: IllustrationProps) {
  return transparent ? (
    <svg
      width="219"
      height="115"
      viewBox="0 0 219 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.7664 5.5L55.4985 8.5H23C20.2386 8.5 18 10.7386 18 13.5V21.5H15V13.5C15 9.08172 18.5817 5.5 23 5.5H53.7664ZM15 56.5V68.0652C16.0068 68.0801 17.0067 68.0979 18 68.1188V56.5H15ZM201 56.5V77.5921L204 78.1636V56.5H201ZM204 21.5V13.5C204 9.08172 200.418 5.5 196 5.5H65.3134L63.5814 8.5H196C198.761 8.5 201 10.7386 201 13.5V21.5H204ZM18 71.1195C17.0071 71.0985 16.0072 71.0806 15 71.0656V106.5C15 110.918 18.5817 114.5 23 114.5H196C200.418 114.5 204 110.918 204 106.5V81.2175L201 80.6461V106.5C201 109.261 198.761 111.5 196 111.5H23C20.2386 111.5 18 109.261 18 106.5V71.1195Z"
        fill="var(--illustration-secondary)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M155.5 69.5001C155.5 70.3562 155.285 71.1619 154.906 71.8664L208.533 82.0812C208.511 81.8905 208.5 81.6966 208.5 81.5C208.5 80.6441 208.715 79.8384 209.094 79.134L155.467 68.9192C155.489 69.1098 155.5 69.3037 155.5 69.5001ZM135.493 72.6247C139.45 71.4403 143.037 71.0162 145.698 70.8962C145.569 70.4531 145.5 69.9847 145.5 69.5001C145.5 68.937 145.593 68.3957 145.765 67.8906C142.893 68.0067 138.974 68.4514 134.632 69.7507C126.684 72.1295 117.348 77.3702 110.481 88.5964C111.506 88.8004 112.418 89.3176 113.113 90.044C119.53 79.6244 128.161 74.8187 135.493 72.6247ZM10.5 69.5002C10.5 70.0284 10.4181 70.5374 10.2663 71.0154C46.5748 71.2561 73.1693 74.5301 104.624 92.3896C104.854 91.3742 105.393 90.4761 106.138 89.7994C74.0315 71.5628 46.847 68.2572 10.2759 68.0154C10.4215 68.4845 10.5 68.9831 10.5 69.5002Z"
        fill="var(--illustration-primary)"
      />
      <circle
        cx="5.5"
        cy="69.5"
        r="3.5"
        stroke="var(--illustration-secondary)"
        strokeWidth="3"
      />
      <circle
        cx="109.5"
        cy="93.5"
        r="3.5"
        stroke="var(--illustration-secondary)"
        strokeWidth="3"
      />
      <circle
        cx="150.5"
        cy="69.5"
        r="3.5"
        stroke="var(--illustration-secondary)"
        strokeWidth="3"
      />
      <circle
        cx="213.5"
        cy="81.5"
        r="3.5"
        stroke="var(--illustration-secondary)"
        strokeWidth="3"
      />
      <rect
        x="1.5"
        y="23"
        width="216"
        height="32"
        rx="2.5"
        stroke="var(--illustration-primary)"
        strokeWidth="3"
      />
      <rect
        x="6.5"
        y="27.5"
        width="25"
        height="3"
        fill="var(--illustration-secondary)"
      />
      <rect
        x="33.837"
        y="32.5"
        width="22"
        height="3"
        fill="var(--illustration-secondary)"
      />
      <rect
        x="62.837"
        y="37.5"
        width="38"
        height="3"
        fill="var(--illustration-secondary)"
      />
      <rect
        x="102.5"
        y="32.5"
        width="10"
        height="3"
        fill="var(--illustration-secondary)"
      />
      <rect
        x="114.5"
        y="47.5"
        width="10"
        height="3"
        fill="var(--illustration-secondary)"
      />
      <rect
        x="126.5"
        y="42.5"
        width="10"
        height="3"
        fill="var(--illustration-secondary)"
      />
      <rect
        x="138.5"
        y="37.5"
        width="10"
        height="3"
        fill="var(--illustration-secondary)"
      />
      <rect
        x="150.5"
        y="32.5"
        width="25"
        height="3"
        fill="var(--illustration-secondary)"
      />
      <rect
        x="177.5"
        y="37.5"
        width="35"
        height="3"
        fill="var(--illustration-secondary)"
      />
      <path
        d="M59.5 12.5V102.5"
        stroke="var(--illustration-secondary)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M65.6021 2L59.5399 12.5L53.4778 2L65.6021 2Z"
        stroke="var(--illustration-primary)"
        strokeWidth="3"
      />
    </svg>
  ) : (
    <svg
      width="219"
      height="115"
      viewBox="0 0 219 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="15"
        y="5.5"
        width="189"
        height="109"
        rx="8"
        fill="var(--bg-default)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.7664 5.5L55.4985 8.5H23C20.2386 8.5 18 10.7386 18 13.5V21.5H15V13.5C15 9.08172 18.5817 5.5 23 5.5H53.7664ZM15 56.5V68.0652C16.0068 68.0801 17.0067 68.0979 18 68.1188V56.5H15ZM201 56.5V77.5921L204 78.1636V56.5H201ZM204 21.5V13.5C204 9.08172 200.418 5.5 196 5.5H65.3134L63.5814 8.5H196C198.761 8.5 201 10.7386 201 13.5V21.5H204ZM18 71.1195C17.0071 71.0985 16.0072 71.0806 15 71.0656V106.5C15 110.918 18.5817 114.5 23 114.5H196C200.418 114.5 204 110.918 204 106.5V81.2175L201 80.6461V106.5C201 109.261 198.761 111.5 196 111.5H23C20.2386 111.5 18 109.261 18 106.5V71.1195Z"
        fill="var(--illustration-secondary)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M155.5 69.5001C155.5 70.3562 155.285 71.1619 154.906 71.8664L208.533 82.0812C208.511 81.8905 208.5 81.6966 208.5 81.5C208.5 80.6441 208.715 79.8384 209.094 79.134L155.467 68.9192C155.489 69.1098 155.5 69.3037 155.5 69.5001ZM135.493 72.6247C139.45 71.4403 143.037 71.0162 145.698 70.8962C145.569 70.4531 145.5 69.9847 145.5 69.5001C145.5 68.937 145.593 68.3957 145.765 67.8906C142.893 68.0067 138.974 68.4514 134.632 69.7507C126.684 72.1295 117.348 77.3702 110.481 88.5964C111.506 88.8004 112.418 89.3176 113.113 90.044C119.53 79.6244 128.161 74.8187 135.493 72.6247ZM10.5 69.5002C10.5 70.0284 10.4181 70.5374 10.2663 71.0154C46.5748 71.2561 73.1693 74.5301 104.624 92.3896C104.854 91.3742 105.393 90.4761 106.138 89.7994C74.0315 71.5628 46.847 68.2572 10.2759 68.0154C10.4215 68.4845 10.5 68.9831 10.5 69.5002Z"
        fill="var(--illustration-primary)"
      />
      <circle
        cx="5.5"
        cy="69.5"
        r="3.5"
        fill="var(--bg-default)"
        stroke="var(--illustration-secondary)"
        strokeWidth="3"
      />
      <circle
        cx="109.5"
        cy="93.5"
        r="3.5"
        fill="var(--bg-default)"
        stroke="var(--illustration-secondary)"
        strokeWidth="3"
      />
      <circle
        cx="150.5"
        cy="69.5"
        r="3.5"
        fill="var(--bg-default)"
        stroke="var(--illustration-secondary)"
        strokeWidth="3"
      />
      <circle
        cx="213.5"
        cy="81.5"
        r="3.5"
        fill="var(--bg-default)"
        stroke="var(--illustration-secondary)"
        strokeWidth="3"
      />
      <rect y="21.5" width="219" height="35" rx="4" fill="var(--bg-default)" />
      <rect
        x="1.5"
        y="23"
        width="216"
        height="32"
        rx="2.5"
        stroke="var(--illustration-primary)"
        strokeWidth="3"
      />
      <rect
        x="6.5"
        y="27.5"
        width="25"
        height="3"
        fill="var(--illustration-secondary)"
      />
      <rect
        x="33.837"
        y="32.5"
        width="22"
        height="3"
        fill="var(--illustration-secondary)"
      />
      <rect
        x="62.837"
        y="37.5"
        width="38"
        height="3"
        fill="var(--illustration-secondary)"
      />
      <rect
        x="102.5"
        y="32.5"
        width="10"
        height="3"
        fill="var(--illustration-secondary)"
      />
      <rect
        x="114.5"
        y="47.5"
        width="10"
        height="3"
        fill="var(--illustration-secondary)"
      />
      <rect
        x="126.5"
        y="42.5"
        width="10"
        height="3"
        fill="var(--illustration-secondary)"
      />
      <rect
        x="138.5"
        y="37.5"
        width="10"
        height="3"
        fill="var(--illustration-secondary)"
      />
      <rect
        x="150.5"
        y="32.5"
        width="25"
        height="3"
        fill="var(--illustration-secondary)"
      />
      <rect
        x="177.5"
        y="37.5"
        width="35"
        height="3"
        fill="var(--illustration-secondary)"
      />
      <path
        d="M59.5 12.5V102.5"
        stroke="var(--illustration-secondary)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M65.6021 2L59.5399 12.5L53.4778 2L65.6021 2Z"
        fill="var(--bg-default)"
        stroke="var(--illustration-primary)"
        strokeWidth="3"
      />
    </svg>
  );
}
