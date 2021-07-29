import { SVGProps, memo } from 'react';

const SvgFileDocumentBoxCheckOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 21l-2.75-3 1.16-1.16L17 18.43l3.59-3.59 1.16 1.41L17 21zm-4.2 0H5c-1.11 0-2-.89-2-2V5c0-1.11.89-2 2-2h14c1.11 0 2 .89 2 2v7.8c-.61-.35-1.28-.6-2-.72V5H5v14h7.08c.12.72.37 1.39.72 2zm-.8-4H7v-2h5v2zm2.68-4H7v-2h10v1.08c-.85.14-1.63.46-2.32.92zM17 9H7V7h10"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgFileDocumentBoxCheckOutline);
export default Icon;
