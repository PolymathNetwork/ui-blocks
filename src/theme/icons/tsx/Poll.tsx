import { SVGProps, memo } from 'react';

const SvgPoll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3 22V8h4v14H3zm7 0V2h4v20h-4zm7 0v-8h4v8h-4z" fill="#8C9BA5" />
  </svg>
);

const Icon = memo(SvgPoll);
export default Icon;
