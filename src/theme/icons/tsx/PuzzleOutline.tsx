import { SVGProps, memo } from 'react';

const SvgPuzzleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 13.5c0 1.76-1.3 3.22-3 3.46V20a2 2 0 01-2 2h-3.8v-.3a2.7 2.7 0 00-5.4 0v.3H4a2 2 0 01-2-2v-3.8h.3C3.79 16.2 5 15 5 13.5c0-1.5-1.21-2.7-2.7-2.7H2V7a2 2 0 012-2h3.04c.24-1.7 1.7-3 3.46-3s3.22 1.3 3.46 3H17a2 2 0 012 2v3.04c1.7.24 3 1.7 3 3.46zM17 15h1.5a1.5 1.5 0 100-3H17V7h-5V5.5a1.5 1.5 0 10-3 0V7H4v2.12c1.76.68 3 2.38 3 4.38s-1.25 3.7-3 4.38V20h2.12a4.7 4.7 0 014.38-3c2 0 3.7 1.25 4.38 3H17v-5z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgPuzzleOutline);
export default Icon;
