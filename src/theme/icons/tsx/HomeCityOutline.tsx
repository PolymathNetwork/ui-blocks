import { SVGProps, memo } from 'react';

const SvgHomeCityOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 2v2.26l2 1.33V4h10v15h-5v2h7V2H10zM7.5 5L0 10v11h15V10L7.5 5zM14 6v.93L15.61 8H16V6h-2zm4 0v2h2V6h-2zM7.5 7.5L13 11v8h-3v-6H5v6H2v-8l5.5-3.5zM18 10v2h2v-2h-2zm0 4v2h2v-2h-2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgHomeCityOutline);
export default Icon;