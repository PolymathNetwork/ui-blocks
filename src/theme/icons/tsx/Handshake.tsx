import { SVGProps, memo } from 'react';

const SvgHandshake = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#handshake_svg__clip0)">
      <path
        d="M15.532 7.049l2.121 2.121 4.66-.007a1 1 0 011.004 1.004l-.007 3.656a1 1 0 01-.997.997l-3.245.007L13.41 9.17l-1.415 1.414a1 1 0 11-1.414-1.414l2.122-2.121a2 2 0 012.828 0zm-7.778-.707L4.925 9.17H1.687a1 1 0 00-.997.997l-.007 3.656a1 1 0 001.004 1.004h6.067l2.828 2.828a1 1 0 001.414 0l.708-.707.707.707a1 1 0 001.414 0l.707-.707.707.707a1 1 0 001.414 0l.707-.707-4.95-4.95-.706.708a2 2 0 01-2.829 0L8.461 11.29a2 2 0 010-2.828l2.121-2.121H7.754z"
        fill="#8C9BA5"
      />
    </g>
    <defs>
      <clipPath id="handshake_svg__clip0">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

const Icon = memo(SvgHandshake);
export default Icon;
