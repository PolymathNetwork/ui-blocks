import { SVGProps, memo } from 'react';

const SvgAccountCardVerify = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 3H2c-1.09.04-1.96.91-2 2v14c.04 1.09.91 1.96 2 2h12.803a5.958 5.958 0 01-.72-2H2V5h20v7.341c.745.264 1.423.67 2 1.187V5a2.074 2.074 0 00-2-2zm-8 14v-1.25c0-1.66-3.34-2.5-5-2.5-1.66 0-5 .84-5 2.5V17h10zM9 7a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm5 0v1h6V7h-6zm0 3h6V9h-6v1zm0 1v1h4v-1h-4zm4.75 10.16l-2.75-3L17.16 17l1.59 1.59L22.34 15l1.16 1.41-4.75 4.75z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgAccountCardVerify);
export default Icon;
