import { SVGProps, memo } from 'react';

const SvgBriefcase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 2h4a2 2 0 012 2v2h4a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2zm4 4V4h-4v2h4z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgBriefcase);
export default Icon;