import { SVGProps, memo } from 'react';

const SvgSortAscending = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 11v2h8v-2h-8zm0-6v2h4V5h-4zm0 12v2h12v-2H10zM6 7h2.5L5 3.5 1.5 7H4v13h2V7z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgSortAscending);
export default Icon;
