import { SVGProps, memo } from 'react';

const SvgPolymath = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 187.5 17.7" {...props}>
    <defs>
      <style>{'.polymath_svg__cls-1{fill:#1348e4}'}</style>
    </defs>
    <g id="polymath_svg__Layer_2" data-name="Layer 2">
      <g id="polymath_svg__Layer_1-2" data-name="Layer 1">
        <path
          id="polymath_svg__Shape"
          className="polymath_svg__cls-1"
          d="M3.8 8.9h3c1.9 0 3-1.1 3-2.6 0-1.7-1.2-2.6-3.1-2.6H0V.3h7c4.1 0 6.6 2.4 6.6 5.9 0 4-3.1 6-6.9 6H3.8v5.1H0V9z"
        />
        <path
          id="polymath_svg__Shape-2"
          data-name="Shape"
          className="polymath_svg__cls-1"
          d="M21.8 8.9A8.84 8.84 0 0130.9 0 8.76 8.76 0 0140 8.8a8.84 8.84 0 01-9.1 8.9 8.76 8.76 0 01-9.1-8.8zm14.2 0a5.21 5.21 0 00-5.2-5.4 5.1 5.1 0 00-5.1 5.3 5.27 5.27 0 005.2 5.4A5 5 0 0036 8.9z"
        />
        <path
          id="polymath_svg__Shape-3"
          data-name="Shape"
          className="polymath_svg__cls-1"
          d="M50.7.3h3.8V14h8.6v3.4H50.7V.3z"
        />
        <path
          id="polymath_svg__Shape-4"
          data-name="Shape"
          className="polymath_svg__cls-1"
          d="M76.8 10.7L70.2.3h4.4l4.1 6.9L82.9.3h4.3l-6.6 10.3v6.8h-3.8v-6.7z"
        />
        <path
          id="polymath_svg__Shape-5"
          data-name="Shape"
          className="polymath_svg__cls-1"
          d="M96.9.3h4.1l4.5 7.3L110 .3h4.1v17.2h-3.7V6.2l-4.8 7.3h-.1l-4.8-7.3v11.1H97V.3h-.1z"
        />
        <path
          id="polymath_svg__Shape-6"
          data-name="Shape"
          className="polymath_svg__cls-1"
          d="M135.2 10.3l-2.3-5.6-2.3 5.6-1.3 3.3-1.6 3.8h-3.8L131.3.1h3.5l7.4 17.3h-3.9l-1.6-3.8-1.5-3.3z"
        />
        <path
          id="polymath_svg__Shape-7"
          data-name="Shape"
          className="polymath_svg__cls-1"
          d="M153.9 3.8h-5.2V.3h14.2v3.5h-5.2v13.7h-3.8V3.8z"
        />
        <path
          id="polymath_svg__Shape-8"
          data-name="Shape"
          className="polymath_svg__cls-1"
          d="M172.9.3h3.8v6.8h7V.3h3.8v17.2h-3.8v-6.9h-7v6.9h-3.8V.3z"
        />
      </g>
    </g>
  </svg>
);

const Icon = memo(SvgPolymath);
export default Icon;
