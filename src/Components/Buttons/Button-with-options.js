import React, { useState } from "react";
//import { trackingNumber } from "../../read-url-parameters";
const trackingNumber = "111";
const trackingLink = "222";
const phone_number = "333";

export const ButtonWithOptions = (props) => {
  const [buttonState, setButtonState] = useState({
    content: "Send Tracking Number (Viber)",
    href: `viber://chat?number=%2B38${phone_number}`,
    options: [
      {
        checked: true,
        content: `Посилка: ${trackingNumber}\nПереглядайте детальну інформацію у додатку або за посиланням: ${trackingLink}`
      },
      {
        checked: false,
        content: `Дякуємо, ттн очікується: ${trackingNumber}\nПереглядайте детальну інформацію у додатку або за посиланням: ${trackingLink}`
      }
    ]
  });

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
    const message = activeOption.content;
    navigator.clipboard.writeText(message).then(() => {
      console.log(message);
    });
    window.location.href = `viber://chat?number=%2B38${phone_number}`;
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
        <span class="">{buttonState.content}</span>
      </a>

      {buttonState.options.map((option, index) => {
        return (
          <label key={index} class="flex items-center cursor-pointer mb-4">
            <input
              type="radio"
              name="shippingmessage"
              class="mr-4"
              // data-shippingmessage="v2"
              checked={option.checked ? true : false}
              onChange={() => onChangeHandler(index)}
            />
            <span class="whitespace-nowrap overflow-x-auto">
              {option.content}
            </span>
          </label>
        );
      })}
    </div>
  );
};
