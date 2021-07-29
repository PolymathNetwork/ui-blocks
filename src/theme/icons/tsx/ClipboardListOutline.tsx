import { SVGProps, memo } from 'react';

const SvgClipboardListOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 7h10V5h2v14H5V5h2v2zm5 10v-2h5v2h-5zm0-6V9h5v2h-5zm-4 1V9H7V8h2v4H8zm1.25 2c.41 0 .75.34.75.75 0 .2-.08.39-.21.52L8.12 17H10v1H7v-.92L9 15H7v-1h2.25z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgClipboardListOutline);
export default Icon;
