import { SVGProps, memo } from 'react';

const SvgBriefcaseCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 2h4a2 2 0 012 2v2h4a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h4V4a2 2 0 012-2zm4 4V4h-4v2h4zm-3.5 11.5l6.59-6.59-1.41-1.41-5.18 5.17-2.09-2.08L7 14l3.5 3.5z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgBriefcaseCheck);
export default Icon;
