import { SVGProps, memo } from 'react';

const SvgCheckboxMultipleBlank = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 16a2 2 0 01-2 2H8a2 2 0 01-2-2V4c0-1.11.89-2 2-2h12a2 2 0 012 2v12zm-6 4v2H4a2 2 0 01-2-2V7h2v13h12z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgCheckboxMultipleBlank);
export default Icon;
