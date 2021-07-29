import { SVGProps, memo } from 'react';

const SvgStore24Hour = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 12h-1v-2h-2V7h1v2h1V7h1v5zm-5-2H9v1h2v1H8V9h2V8H8V7h3v3zm8-3V4H5v3H2v13h8v-4h4v4h8V7h-3z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgStore24Hour);
export default Icon;
