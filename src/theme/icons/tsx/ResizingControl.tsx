import { SVGProps, memo } from 'react';

const SvgResizingControl = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={8}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.11 6.268L5.769.61l.707.707L.818 6.975l-.707-.707zM2.94 6.268l2.828-2.829.707.707-2.829 2.829-.707-.707z"
      fill="#152935"
    />
  </svg>
);

const Icon = memo(SvgResizingControl);
export default Icon;
