import React, { useState } from "react";

export const ButtonWithOptions = (props) => {
  const [inputsState, setInputsState] = useState(props.options);

  function onChangeHandler(activeInputIndex) {
    const inputsNewState = [...inputsState];
    inputsNewState.forEach((option, index) =>
      index === activeInputIndex
        ? (option.checked = true)
        : (option.checked = false)
    );
    setInputsState(inputsNewState);
  }

  function onClickHandler(e) {
    e.preventDefault();
    const activeOption = inputsState.find((option) => option.checked);
    const message = activeOption.message;
    navigator.clipboard.writeText(message).then(() => {
      console.log(message);
    });
    window.location.href = props.href;
    console.log(activeOption);
  }

  return (
    <div className="m-4">
      <a
        onClick={onClickHandler}
        className="block mb-4 hover:bg-lime-200"
        href="null"
      >
        <i className={`${props.iconClass} text-5xl`}></i>
        <span>{props.buttonText}</span>
      </a>

      {props.options.map((option, index) => {
        return (
          <label key={index} className="flex items-center cursor-pointer mb-4">
            <input
              type="radio"
              name={props.inputNameGroup}
              className="mr-4"
              checked={option.checked ? true : false}
              onChange={() => onChangeHandler(index)}
            />
            <span className="whitespace-nowrap overflow-x-auto">
              {option.message}
            </span>
          </label>
        );
      })}
    </div>
  );
};
