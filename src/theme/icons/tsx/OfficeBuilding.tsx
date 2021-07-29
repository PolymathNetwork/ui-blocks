import { SVGProps, memo } from 'react';

const SvgOfficeBuilding = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 3v18h6v-3.5h2V21h6V3H5zm2 2h2v2H7V5zm4 0h2v2h-2V5zm4 0h2v2h-2V5zM7 9h2v2H7V9zm4 0h2v2h-2V9zm4 0h2v2h-2V9zm-8 4h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2H7v-2zm8 0h2v2h-2v-2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgOfficeBuilding);
export default Icon;
