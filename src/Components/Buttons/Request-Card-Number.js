import React from "react";
import { SimpleButton } from "./Simple-Button";
import { phoneNumber, productsNotFound } from "../../read-url-parameters";
import { viberChatByNumber } from "../../viber-url-scheme";

export const RequestCardNumber = (props) => {
  const href = `${viberChatByNumber}${phoneNumber}`;
  const iconClass = "las la-undo";
  const buttonText = "Money Back, Request Card Number";
  const message = `Доброго дня
${productsNotFound}
на жаль не було в наявності, база даних сайту не встигла оновитись, просимо вибачення за незручності.
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
