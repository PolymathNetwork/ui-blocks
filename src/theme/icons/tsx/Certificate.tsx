import { SVGProps, memo } from 'react';

const SvgCertificate = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 3c-1.11 0-2 .89-2 2v10a2 2 0 002 2h8v5l3-3 3 3v-5h2a2 2 0 002-2V5a2 2 0 00-2-2H4zm8 2l3 2 3-2v3.5l3 1.5-3 1.5V15l-3-2-3 2v-3.5L9 10l3-1.5V5zM4 5h5v2H4V5zm0 4h3v2H4V9zm0 4h5v2H4v-2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgCertificate);
export default Icon;