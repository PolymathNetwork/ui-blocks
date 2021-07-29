import { SVGProps, memo } from 'react';

const SvgInformation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 9h-2V7h2v2zm0 8h-2v-6h2v6zM12 2a10 10 0 100 20 10 10 0 000-20z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgInformation);
export default Icon;
