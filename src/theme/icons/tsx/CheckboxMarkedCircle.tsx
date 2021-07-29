import { SVGProps, memo } from 'react';

const SvgCheckboxMarkedCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 17l-5-5 1.41-1.42L10 14.17l7.59-7.59L19 8l-9 9zm2-15a10 10 0 100 20 10 10 0 000-20z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgCheckboxMarkedCircle);
export default Icon;
