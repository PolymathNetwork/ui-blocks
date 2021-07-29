import { SVGProps, memo } from 'react';

const SvgAlcy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2a10 10 0 110 20 10 10 0 010-20zm-1 5a2 2 0 00-2 2v8h2v-4h2v4h2V9a2 2 0 00-2-2h-2zm0 2h2v2h-2V9z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgAlcy);
export default Icon;
