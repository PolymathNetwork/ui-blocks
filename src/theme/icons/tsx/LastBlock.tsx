import { SVGProps, memo } from 'react';

const SvgLastBlock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 7h-2.5v13h-2V7H16l3.5-3.5L23 7zm-10 8.23l-4 2.3v-4.59l4-2.3v4.59zm-1-6.32L8 11.2 4 8.91l4-2.35 4 2.35zm-5 8.62l-4-2.3v-4.59l4 2.3v4.59zm8-8.34c0-.57-.27-1-.77-1.32L8.75 4.69c-.25-.13-.5-.19-.75-.19s-.5.06-.75.19L1.77 7.87c-.5.32-.77.75-.77 1.32v6.32c0 .57.27 1 .77 1.32l5.48 3.18c.5.32 1 .32 1.5 0l5.48-3.18c.5-.32.77-.75.77-1.32V9.19z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgLastBlock);
export default Icon;
