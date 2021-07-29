import { SVGProps, memo } from 'react';

const SvgInfoOuline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 1h6v6H9V1zm2 2h2v2h-2V3zM6 15V9h9v8h3v6H6v-6h3v-2H6zm2-4h5v8h3v2H8v-2h3v-6H8v-2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgInfoOuline);
export default Icon;
