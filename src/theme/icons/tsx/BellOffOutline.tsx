import { SVGProps, memo } from 'react';

const SvgBellOffOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.11 21.46L2.39 1.73 1.11 3l4.72 4.72A6.975 6.975 0 005 11v6l-2 2v1h15.11l2.73 2.73 1.27-1.27zM7 18v-7c0-.61.11-1.21.34-1.77L16.11 18H7zm3 3h4a2 2 0 01-4 0zM8.29 5.09c.53-.34 1.11-.59 1.71-.8V4a2 2 0 114 0v.29c2.97.88 5 3.61 5 6.71v4.8l-2-2V11a5 5 0 00-5-5c-.78 0-1.55.2-2.24.56L8.29 5.09z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgBellOffOutline);
export default Icon;
