import { SVGProps, memo } from 'react';

const SvgContentCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 21H8V7h11v14zm0-16H8a2 2 0 00-2 2v14a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2zm-3-4H4a2 2 0 00-2 2v14h2V3h12V1z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgContentCopy);
export default Icon;
