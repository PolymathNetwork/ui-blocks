import { SVGProps, memo } from 'react';

const SvgAccountGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 6a3 3 0 100 6 3 3 0 000-6zM6 8.17a2.5 2.5 0 100 5c.88 0 1.65-.46 2.09-1.14C7.42 11.18 7 10.15 7 9c0-.2 0-.4.04-.6-.32-.15-.67-.23-1.04-.23zm12 0c-.37 0-.72.08-1.04.23.04.2.04.4.04.6 0 1.15-.42 2.18-1.09 3.03a2.49 2.49 0 003.858.408A2.501 2.501 0 0018 8.17zM12 14c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3zm-7.33.97C3 15.26 1 16.04 1 17.33V19h3v-2c0-.78.29-1.47.67-2.03zm14.66 0c.38.56.67 1.25.67 2.03v2h3v-1.67c0-1.29-2-2.07-3.67-2.36z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgAccountGroup);
export default Icon;
