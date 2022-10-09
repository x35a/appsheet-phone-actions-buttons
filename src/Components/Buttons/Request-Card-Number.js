import React from "react";
import { SimpleButton } from "./button-templates/Simple-Button";
import { phoneNumber, productsNotFound } from "../../read-url-parameters";
import { getHref } from "../../get-href";

export const RequestCardNumber = (props) => {
  const href = getHref(phoneNumber).viber;
  const iconClass = "las la-undo";
  const buttonText = "Money Back (Request Card Number)";
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
