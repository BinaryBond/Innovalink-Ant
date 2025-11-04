import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export default function button({ text, onClick, className, style }: ButtonProps) {
  return (
    <button  style={style} className={`${className} cursor-pointer rounded-[40px] text-sm  px-5 py-3`} onClick={onClick}>
      {text}
    </button>
  );
}
