import { SVGProps, memo } from 'react';

const SvgSortDescending = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 13v-2h8v2h-8zm0 6v-2h4v2h-4zm0-12V5h12v2H10zM6 17h2.5L5 20.5 1.5 17H4V4h2v13z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgSortDescending);
export default Icon;
