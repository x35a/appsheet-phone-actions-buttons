import React from "react";
import { SimpleButton } from "./Simple-Button";
import { phoneNumber } from "../../read-url-parameters";
import { viberChatByNumber } from "../../viber-url-scheme";

export const SendCancelMessage = (props) => {
  const href = `${viberChatByNumber}${phoneNumber}`;
  const iconClass = "la-times";
  const buttonText = "Send Cancel Message";
  const message = `Вибачте, даного товару немає в наявності, очікуємо на поставку.`;

  return (
    <SimpleButton
      href={href}
      iconClass={iconClass}
      buttonText={buttonText}
      message={message}
    />
  );
};
