import { SVGProps, memo } from 'react';

const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 2v4h-2c-.69 0-1 .81-1 1.5V10h3v4h-3v8h-4v-8H7v-4h3V6a4 4 0 014-4h3z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgFacebook);
export default Icon;