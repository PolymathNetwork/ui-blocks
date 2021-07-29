import { SVGProps, memo } from 'react';

const SvgEmailOpenOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 15.36l-8-5V18h16v-7.64l-8 5zM4 8l8 5 8-5-8-5-8 5zm18 0v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8c0-.73.39-1.36.97-1.71L12 .64l9.03 5.65c.58.35.97.98.97 1.71z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgEmailOpenOutline);
export default Icon;
