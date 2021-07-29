import { SVGProps, memo } from 'react';

const SvgFormatListBulleted = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 5h14v2H7V5zm0 8v-2h14v2H7zM4 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM7 19v-2h14v2H7zm-3-2.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgFormatListBulleted);
export default Icon;
