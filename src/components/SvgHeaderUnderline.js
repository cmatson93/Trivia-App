import * as React from "react";

function SvgHeaderUnderline(props) {
  return (
    <svg width={540} height={52} fill='transparent' {...props}>
      <path d='M0 3h96l65 35h218l65-35h96' stroke='#EF7B45' strokeWidth={5} />
      <path
        d='M0 14h94l65 35h221.5L446 14h92.5'
        stroke='#5EB1BF'
        strokeWidth={5}
      />
    </svg>
  );
}

export default SvgHeaderUnderline;
