import { SVGProps, memo } from 'react';

const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.758 9.986l4.843 4.655 4.6-4.655 2.274 2.328-6.874 6.98-4.842-4.654-4.725 4.654-6.95-6.98 2.294-2.328 4.656 4.655 4.724-4.655z"
      fill="#4099FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.362 8.867C17.477 6.288 14.95 5 11.779 5 8.608 5 6.146 6.288 4.394 8.867l2.286 2.216c1.24-2.172 2.939-3.258 5.1-3.258 2.159 0 3.892 1.086 5.199 3.258l2.383-2.216z"
      fill="#4099FF"
    />
  </svg>
);

const Icon = memo(SvgWallet);
export default Icon;
