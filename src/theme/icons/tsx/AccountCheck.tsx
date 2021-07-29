import { SVGProps, memo } from 'react';

const SvgAccountCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.1 12.5l1.4 1.41-6.53 6.59L12.5 17l1.4-1.41 2.07 2.08 5.13-5.17zM10 17l3 3H3v-2c0-2.21 3.58-4 8-4l1.89.11L10 17zm1-13a4 4 0 110 8 4 4 0 010-8z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgAccountCheck);
export default Icon;
