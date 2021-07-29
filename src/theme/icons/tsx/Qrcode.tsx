import { SVGProps, memo } from 'react';

const SvgQrcode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 11h2v2H3v-2zm8-6h2v4h-2V5zm-2 6h4v4h-2v-2H9v-2zm6 0h2v2h2v-2h2v2h-2v2h2v4h-2v2h-2v-2h-4v2h-2v-4h4v-2h2v-2h-2v-2zm4 8v-4h-2v4h2zM15 3h6v6h-6V3zm2 2v2h2V5h-2zM3 3h6v6H3V3zm2 2v2h2V5H5zM3 15h6v6H3v-6zm2 2v2h2v-2H5z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgQrcode);
export default Icon;
