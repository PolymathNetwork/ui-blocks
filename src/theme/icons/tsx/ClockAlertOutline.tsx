import { SVGProps, memo } from 'react';

const SvgClockAlertOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C6.47 2 2 6.5 2 12a10 10 0 0010 10c2.25 0 4.33-.76 6-2v-2.72C16.53 18.94 14.39 20 12 20a8 8 0 010-16c3.36 0 6.23 2.07 7.41 5h2.13C20.27 4.94 16.5 2 12 2zm-1 5v6l5.25 3.15.75-1.23-4.5-2.67V7H11zm9 4v7h2v-7h-2zm0 9v2h2v-2h-2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgClockAlertOutline);
export default Icon;
