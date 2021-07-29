import { SVGProps, memo } from 'react';

const SvgPolyNew = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.47 12.118H13c2.235 0 3.53-1.295 3.53-3.06 0-2-1.412-3.058-3.648-3.058H5V2h8.235C18.06 2 21 4.824 21 8.941 21 13.647 17.353 16 12.882 16H9.471v6H5V12l4.47.118z"
      fill="#1348E4"
    />
  </svg>
);

const Icon = memo(SvgPolyNew);
export default Icon;
