import React from "react";
import { SimpleButton } from "./button-templates/Simple-Button";
import { orderId, comments } from "../../read-url-parameters";
import { getHref } from "../../get-href";

export const SendrCardNumber = () => {
  const href = getHref("0677722166").viber; // r number
  const iconClass = "las la-undo";
  const buttonText = "Send r card number (Money Back)";
  const message = `${comments}
orderId ${orderId}`;

  return (
    <SimpleButton
      href={href}
      iconClass={iconClass}
      buttonText={buttonText}
      message={message}
    />
  );
};
