import { SVGProps, memo } from 'react';

const SvgArrowBottomLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 6.41L17.59 5 7 15.59V9H5v10h10v-2H8.41L19 6.41z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgArrowBottomLeft);
export default Icon;
