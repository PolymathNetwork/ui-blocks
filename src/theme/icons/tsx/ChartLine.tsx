import { SVGProps, memo } from 'react';

const SvgChartLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 11.78l4.24-7.33 1.73 1-5.23 9.05-6.51-3.75L5.46 19H22v2H2V3h2v14.54L9.5 8l6.5 3.78z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgChartLine);
export default Icon;
