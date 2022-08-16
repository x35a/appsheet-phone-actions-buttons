import React, { useState } from "react";

export const ButtonWithOptions = (props) => {
  const [buttonState, setButtonState] = useState(props);

  function onChangeHandler(activeInputIndex) {
    const options = [...buttonState.options];
    options.forEach((option, index) =>
      index === activeInputIndex
        ? (option.checked = true)
        : (option.checked = false)
    );
    setButtonState((prevState) => {
      return { ...prevState, ...options };
    });
  }

  function onClickHandler(e) {
    e.preventDefault();
    const activeOption = buttonState.options.find((option) => option.checked);
    const message = activeOption.message;
    navigator.clipboard.writeText(message).then(() => {
      console.log(message);
    });
    window.location.href = buttonState.href;
    console.log(activeOption);
  }

  return (
    <div class="m-4">
      <a
        onClick={onClickHandler}
        class="block mb-4 hover:bg-lime-200"
        href="null"
      >
        <i class="las la-shipping-fast text-5xl"></i>
        <span>{buttonState.buttonText}</span>
      </a>

      {buttonState.options.map((option, index) => {
        return (
          <label key={index} class="flex items-center cursor-pointer mb-4">
            <input
              type="radio"
              name={buttonState.inputNameGroup}
              class="mr-4"
              checked={option.checked ? true : false}
              onChange={() => onChangeHandler(index)}
            />
            <span class="whitespace-nowrap overflow-x-auto">
              {option.message}
            </span>
          </label>
        );
      })}
    </div>
  );
};
