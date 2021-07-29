import { SVGProps, memo } from 'react';

const SvgBellOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 17H7v-6.5C7 8 9 6 11.5 6S16 8 16 10.5V17zm2-1v-5.5c0-3.07-2.14-5.64-5-6.32V3.5a1.5 1.5 0 10-3 0v.68c-2.87.68-5 3.25-5 6.32V16l-2 2v1h17v-1l-2-2zm-6.5 6a2 2 0 002-2h-4a2 2 0 002 2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgBellOutline);
export default Icon;
