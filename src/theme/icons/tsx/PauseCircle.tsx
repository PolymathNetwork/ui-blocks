import { SVGProps, memo } from 'react';

const SvgPauseCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 16h-2V8h2v8zm-4 0H9V8h2v8zm1-14a10 10 0 100 20 10 10 0 000-20z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgPauseCircle);
export default Icon;
