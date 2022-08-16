import React from "react";
import { SimpleButton } from "./Simple-Button";
import { phoneNumber, productsNotFound } from "../../read-url-parameters";
import { viberChatByNumber } from "../../viber-url-scheme";

export const RequestCardNumber = (props) => {
  const href = `${viberChatByNumber}${phoneNumber}`;
  const iconClass = "las la-undo";
  const buttonText = "Request Customer Card Number for Money Back";
  const message = `Доброго дня, ${productsNotFound} на жаль зараз немає в наявності.
Напишіть будь ласка номер своєї картки, ми зробимо повернення передоплати.`;

  return (
    <SimpleButton
      href={href}
      iconClass={iconClass}
      buttonText={buttonText}
      message={message}
    />
  );
};
