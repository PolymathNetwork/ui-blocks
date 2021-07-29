import { SVGProps, memo } from 'react';

const SvgAccountSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5 12c2.5 0 4.5 2 4.5 4.5 0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM10 4a4 4 0 013.18 6.43c-.86.32-1.63.83-2.27 1.47L10 12a4 4 0 110-8zM2 20v-2c0-2.12 3.31-3.86 7.5-4-.32.78-.5 1.62-.5 2.5 0 1.29.38 2.5 1 3.5H2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgAccountSearch);
export default Icon;
