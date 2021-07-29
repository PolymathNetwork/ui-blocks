import { SVGProps, memo } from 'react';

const SvgInformationOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 9h2V7h-2v2zm1 11c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-18a10 10 0 100 20 10 10 0 000-20zm-1 15h2v-6h-2v6z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgInformationOutline);
export default Icon;
