import { SVGProps, memo } from 'react';

const SvgExpandAllOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 2a2 2 0 00-2 2v10h2V4h10V2H4zm4 4a2 2 0 00-2 2v10h2V8h10V6H8zm12 6v8h-8v-8h8zm0-2h-8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-8a2 2 0 00-2-2zm-1 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgExpandAllOutline);
export default Icon;
