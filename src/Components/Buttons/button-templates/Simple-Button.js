import React from "react";

export const SimpleButton = (props) => {
  const onClickHandler = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(props.message).then(() => {
      console.log(props.message);
    });
    window.location.href = props.href;
  };

  return (
    <div className="m-4">
      <a
        onClick={props.message ? onClickHandler : undefined}
        className="flex items-center hover:bg-lime-200"
        href={props.href}
      >
        <i className={`${props.iconClass} text-5xl mr-3`}></i>
        <span>{props.buttonText}</span>
      </a>
    </div>
  );
};
