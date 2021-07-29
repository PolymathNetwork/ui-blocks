import { SVGProps, memo } from 'react';

const SvgAccountQuestion = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 8a4 4 0 11-8 0 4 4 0 018 0zm4 10v2H1v-2c0-2.21 3.58-4 8-4s8 1.79 8 4zm3.5-3.5V16H19v-1.5h1.5zm-2-5H17V9a3 3 0 016 0c0 .97-.5 1.88-1.29 2.41l-.3.19c-.57.4-.91 1.01-.91 1.7v.2H19v-.2c0-1.19.6-2.3 1.59-2.95l.29-.19c.39-.26.62-.69.62-1.16a1.5 1.5 0 10-3 0v.5z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgAccountQuestion);
export default Icon;
