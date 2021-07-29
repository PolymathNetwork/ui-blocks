import { SVGProps, memo } from 'react';

const SvgBank = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.5 1L2 6v2h19V6l-9.5-5zm4.5 9v7h3v-7h-3zM2 22h19v-3H2v3zm8-12v7h3v-7h-3zm-6 0v7h3v-7H4z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgBank);
export default Icon;
