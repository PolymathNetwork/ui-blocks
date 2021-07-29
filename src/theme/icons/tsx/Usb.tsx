import { SVGProps, memo } from 'react';

const SvgUsb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 7v4h1v2h-3V5h2l-3-4-3 4h2v8H8v-2.07c.7-.37 1.2-1.08 1.2-1.93A2.2 2.2 0 007 6.8c-1.22 0-2.2.98-2.2 2.2 0 .85.5 1.56 1.2 1.93V13a2 2 0 002 2h3v3.05a2.19 2.19 0 00-.556 3.506A2.2 2.2 0 0014.2 20c0-.85-.49-1.59-1.2-1.95V15h3a2 2 0 002-2v-2h1V7h-4z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgUsb);
export default Icon;
