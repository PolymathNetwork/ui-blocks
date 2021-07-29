import { SVGProps, memo } from 'react';

const SvgCoinbase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.063.036h23.923v23.923H.062V.037z"
      fill="url(#coinbase_svg__paint0_linear)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.704 12.005a8.327 8.327 0 1016.655 0 8.327 8.327 0 00-16.655 0zm6.2-2.684a.555.555 0 00-.556.555v4.257c0 .306.248.555.555.555h4.256a.555.555 0 00.555-.555V9.876a.555.555 0 00-.555-.555H9.903z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="coinbase_svg__paint0_linear"
        x1={12.024}
        y1={0.036}
        x2={12.024}
        y2={23.959}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2E66F8" />
        <stop offset={1} stopColor="#124ADB" />
      </linearGradient>
    </defs>
  </svg>
);

const Icon = memo(SvgCoinbase);
export default Icon;
