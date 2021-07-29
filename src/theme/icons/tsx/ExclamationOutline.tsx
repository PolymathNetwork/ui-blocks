import { SVGProps, memo } from 'react';

const SvgExclamationOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 2h6v12H9V2zm2 2h2v8h-2V4zM9 16h6v6H9v-6zm2 2h2v2h-2v-2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgExclamationOutline);
export default Icon;
