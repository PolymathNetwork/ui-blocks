import { SVGProps, memo } from 'react';

const SvgUploadOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 10v6h6v-6h4l-7-7-7 7h4zm3-4.2L14.2 8H13v6h-2V8H9.8L12 5.8zM19 18H5v2h14v-2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgUploadOutline);
export default Icon;
