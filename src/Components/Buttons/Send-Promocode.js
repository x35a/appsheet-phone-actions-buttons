import React from "react";
import { SimpleButton } from "./button-templates/Simple-Button";
import { orderId, phoneNumber } from "../../read-url-parameters";
import { viberChatByNumber } from "../../viber-url-scheme";

export const SendPromocode = (props) => {
  const href = `${viberChatByNumber}${phoneNumber}`;
  const iconClass = "las la-percent";
  const buttonText = "Send Promocode";
  const message = `Пропонуємо промокод на знижку 3%
Ваш промокод: ${orderId}
Скористатися знижкою можна на сайті https://smartfood.org.ua/`;

  return (
    <SimpleButton
      href={href}
      iconClass={iconClass}
      buttonText={buttonText}
      message={message}
    />
  );
};
