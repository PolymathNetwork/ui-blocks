import { SVGProps, memo } from 'react';

const SvgInformationVariant = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.5 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-.36 4.77c-1.19.1-4.44 2.69-4.44 2.69-.2.15-.14.14.02.42.16.27.14.29.33.16.2-.13.53-.34 1.08-.68 2.12-1.36.34 1.78-.57 7.07-.36 2.62 2 1.27 2.61.87.6-.39 2.21-1.5 2.37-1.61.22-.15.06-.27-.11-.52-.12-.17-.24-.05-.24-.05-.65.43-1.84 1.33-2 .76-.19-.57 1.03-4.48 1.7-7.17.11-.64.41-2.04-.75-1.94z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgInformationVariant);
export default Icon;
