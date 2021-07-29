import { SVGProps, memo } from 'react';

const SvgAccountCardDetailsOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 3H2c-1.09.04-1.96.91-2 2v14c.04 1.09.91 1.96 2 2h20c1.09-.04 1.96-.91 2-2V5a2.074 2.074 0 00-2-2zm0 16H2V5h20v14zm-8-2v-1.25c0-1.66-3.34-2.5-5-2.5-1.66 0-5 .84-5 2.5V17h10zM9 7a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm5 0v1h6V7h-6zm0 2v1h6V9h-6zm0 2v1h4v-1h-4z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgAccountCardDetailsOutline);
export default Icon;
