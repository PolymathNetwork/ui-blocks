import { SVGProps, memo } from 'react';

const SvgRadioboxMarked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 20a8 8 0 110-16 8 8 0 010 16zm0-18a10 10 0 100 20 10 10 0 000-20zm0 5a5 5 0 100 10 5 5 0 000-10z"
      fill="#1348E4"
    />
  </svg>
);

const Icon = memo(SvgRadioboxMarked);
export default Icon;
