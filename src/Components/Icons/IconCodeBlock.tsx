import type { SVGProps } from "react";

const SvgIconCodeBlock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
    <path fill='none' d='M0 0h24v24H0z' />
    <path
      fill='currentColor'
      d='M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm16 7-3.536 3.536-1.414-1.415L17.172 12 15.05 9.879l1.414-1.415zM6.828 12l2.122 2.121-1.414 1.415L4 12l3.536-3.536L8.95 9.88zm4.416 5H9.116l3.64-10h2.128z'
    />
  </svg>
);
export default SvgIconCodeBlock;
