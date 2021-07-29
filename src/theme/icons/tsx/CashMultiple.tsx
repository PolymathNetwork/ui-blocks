import { SVGProps, memo } from 'react';

const SvgCashMultiple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 6h18v12H5V6zm9 3a3 3 0 110 6 3 3 0 010-6zM9 8a2 2 0 01-2 2v4a2 2 0 012 2h10a2 2 0 012-2v-4a2 2 0 01-2-2H9zm-8 2h2v10h16v2H1V10z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgCashMultiple);
export default Icon;
