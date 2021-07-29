import { SVGProps, memo } from 'react';

const SvgFileDownloadOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 2l6 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h8zm4 18V9h-5V4H6v16h12zm-6-1l-4-4h2.5v-3h3v3H16l-4 4z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgFileDownloadOutline);
export default Icon;
