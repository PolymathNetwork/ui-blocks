import { SVGProps, memo } from 'react';

const SvgSend = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="#8C9BA5" />
  </svg>
);

const Icon = memo(SvgSend);
export default Icon;
