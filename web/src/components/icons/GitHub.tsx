import type { CustomIconProps } from './index';

export default function GitHub({ size = 16, className }: CustomIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_66_2391)">
        <circle cx="12" cy="12" r="12" fill="white" />
        <path
          d="M12 0C18.63 0 24 5.37 24 12C23.9994 14.5143 23.2103 16.9651 21.7438 19.0074C20.2773 21.0498 18.2072 22.5808 15.825 23.385C15.225 23.505 15 23.13 15 22.815C15 22.41 15.015 21.12 15.015 19.515C15.015 18.39 14.64 17.67 14.205 17.295C16.875 16.995 19.68 15.975 19.68 11.37C19.68 10.05 19.215 8.985 18.45 8.145C18.57 7.845 18.99 6.615 18.33 4.965C18.33 4.965 17.325 4.635 15.03 6.195C14.07 5.925 13.05 5.79 12.03 5.79C11.01 5.79 9.99 5.925 9.03 6.195C6.735 4.65 5.73 4.965 5.73 4.965C5.07 6.615 5.49 7.845 5.61 8.145C4.845 8.985 4.38 10.065 4.38 11.37C4.38 15.96 7.17 16.995 9.84 17.295C9.495 17.595 9.18 18.12 9.075 18.9C8.385 19.215 6.66 19.725 5.58 17.91C5.355 17.55 4.68 16.665 3.735 16.68C2.73 16.695 3.33 17.25 3.75 17.475C4.26 17.76 4.845 18.825 4.98 19.17C5.22 19.845 6 21.135 9.015 20.58C9.015 21.585 9.03 22.53 9.03 22.815C9.03 23.13 8.805 23.49 8.205 23.385C5.81496 22.5895 3.7361 21.0615 2.26334 19.018C0.79057 16.9744 -0.00132072 14.519 1.65347e-06 12C1.65347e-06 5.37 5.37 0 12 0Z"
          fill="black"
        />
        <circle cx="12" cy="12" r="11.5" stroke="white" />
      </g>
      <defs>
        <clipPath id="clip0_66_2391">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
