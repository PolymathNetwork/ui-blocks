import { SVGProps, memo } from 'react';

const SvgFileImportOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 2H6a2 2 0 00-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8l-6-6zm4 18H6V4h7v5h5v11zm-3-8.07V19H7.93l2.12-2.12-2.83-2.83 2.83-2.83 2.83 2.83L15 11.93z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgFileImportOutline);
export default Icon;
