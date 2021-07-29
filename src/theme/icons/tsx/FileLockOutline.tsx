import { SVGProps, memo } from 'react';

const SvgFileLockOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 2H6a2 2 0 00-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8l-6-6zm4 18H6V4h7v5h5v11zm-3-5v-1c0-1.66-1.34-3-3-3s-3 1.36-3 3v1H8v4h8v-4h-1zm-2 0h-2v-1c0-.55.45-1 1-1s1 .47 1 1v1z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgFileLockOutline);
export default Icon;
