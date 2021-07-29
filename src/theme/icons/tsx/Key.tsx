import { SVGProps, memo } from 'react';

const SvgKey = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#key_svg__clip0)">
      <path
        d="M22 18v4h-4v-3h-3v-3h-3l-2.26-2.26a6 6 0 114-4L22 18zM7 5a2 2 0 100 4 2 2 0 000-4z"
        fill="#8C9BA5"
      />
    </g>
    <defs>
      <clipPath id="key_svg__clip0">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

const Icon = memo(SvgKey);
export default Icon;
