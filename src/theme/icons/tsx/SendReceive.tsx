import { SVGProps, memo } from 'react';

const SvgSendReceive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.59 10.41L6.5 18.5v-3.59h-2v7h7v-2H7.91L16 11.82l-1.41-1.41z"
      fill="#8C9BA5"
    />
    <path
      d="M12.41 4V2h7v7h-2V5.41L9.32 13.5l-1.41-1.41L16 4h-3.59z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgSendReceive);
export default Icon;
