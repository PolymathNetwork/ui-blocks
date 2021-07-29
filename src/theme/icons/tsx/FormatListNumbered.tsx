import { SVGProps, memo } from 'react';

const SvgFormatListNumbered = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 13v-2h14v2H7zm0 6v-2h14v2H7zM7 7V5h14v2H7zM3 8V5H2V4h2v4H3zm-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17H2zm2.25-7a.75.75 0 01.54 1.27L3.12 13H5v1H2v-.92L4 11H2v-1h2.25z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgFormatListNumbered);
export default Icon;
