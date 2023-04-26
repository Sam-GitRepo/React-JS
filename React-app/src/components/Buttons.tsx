import React from "react";

interface Props {
  children: string;
  color:string;
  onClick: () => void;
}

const Buttons = ({ children, onClick }: Props) => {
  return (
  <button className="btn btn-primary" onClick={onClick}>{children} >Button</button>
  )
};

export default Buttons;
