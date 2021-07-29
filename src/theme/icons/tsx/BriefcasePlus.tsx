import { SVGProps, memo } from 'react';

const SvgBriefcasePlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3v-3zM10 2h4a2 2 0 012 2v2h4a2 2 0 012 2v5.53A6 6 0 0012 18c0 1.09.29 2.12.8 3H4a2 2 0 01-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2zm4 4V4h-4v2h4z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgBriefcasePlus);
export default Icon;
