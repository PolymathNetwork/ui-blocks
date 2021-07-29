import { SVGProps, memo } from 'react';

const SvgFilePercentOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 2H6a2 2 0 00-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8l-6-6zm4 18H6V4h7v5h5v11zm-8-8.5c0 .83-.67 1.5-1.5 1.5S7 12.33 7 11.5 7.67 10 8.5 10s1.5.67 1.5 1.5zm6 6c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm0-6.15L8.37 19 7 17.65 14.65 10 16 11.35z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgFilePercentOutline);
export default Icon;
