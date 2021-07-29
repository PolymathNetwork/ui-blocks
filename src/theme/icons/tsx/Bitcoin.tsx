import { SVGProps, memo } from 'react';

const SvgBitcoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 4h2V2h2v2h2V2h2v2.03c2.25.25 4 2.15 4 4.47 0 1.3-.55 2.5-1.44 3.3a4.5 4.5 0 011.94 3.7c0 2.5-2 4.5-4.5 4.5v2h-2v-2h-2v2H8v-2H6l.5-2H8V6H6V4zm4 9v5h4a2.5 2.5 0 000-5h-4zm0-7v5h3.5a2.5 2.5 0 000-5H10z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgBitcoin);
export default Icon;
