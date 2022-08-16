import React from "react";

export const SimpleButton = (props) => {
  // "lab text-5xl"
  return (
    <a className="m-4 hover:bg-lime-200" href={props.href}>
      <i className={`${props.iconClass} text-5xl`}></i>
      <span>{props.message}</span>
    </a>
  );
};
