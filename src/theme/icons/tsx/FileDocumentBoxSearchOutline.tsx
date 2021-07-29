import { SVGProps, memo } from 'react';

const SvgFileDocumentBoxSearchOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5 12c2.5 0 4.5 2 4.5 4.5 0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM5 3h14c1.11 0 2 .89 2 2v8.03c-.5-.8-1.19-1.49-2-2.03V5H5v14h4.5c.31.75.76 1.42 1.31 2H5c-1.11 0-2-.89-2-2V5c0-1.11.89-2 2-2zm2 4h10v2H7V7zm0 4h5.03c-.8.5-1.49 1.19-2.03 2H7v-2zm0 4h2.17c-.11.5-.17 1-.17 1.5v.5H7v-2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgFileDocumentBoxSearchOutline);
export default Icon;
