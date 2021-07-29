import { SVGProps, memo } from 'react';

const SvgHomeOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5zM12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgHomeOutline);
export default Icon;
