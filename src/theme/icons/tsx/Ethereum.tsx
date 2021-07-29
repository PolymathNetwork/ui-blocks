import { SVGProps, memo } from 'react';

const SvgEthereum = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 1.75l-6.25 10.5L12 16l6.25-3.75L12 1.75zM5.75 13.5L12 22.25l6.25-8.75L12 17.25 5.75 13.5z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgEthereum);
export default Icon;
