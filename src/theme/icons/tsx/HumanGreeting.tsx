import { SVGProps, memo } from 'react';

const SvgHumanGreeting = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 4v1.5c0 4.15 2.21 7.78 5.5 9.8V20h15v-2c0-2.66-5.33-4-8-4h-.25C9 14 5 10 5 5.5V4H1.5zM14 4a4 4 0 100 8 4 4 0 000-8z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgHumanGreeting);
export default Icon;
