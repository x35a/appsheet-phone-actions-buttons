import React from "react";
import { SimpleButton } from "./Simple-Button";
//import { ButtonWithOptions } from "./Button-with-options";
import {
  phoneNumber,
  orderId,
  saleTotal,
  products
} from "../../read-url-parameters";
import { viberChatByNumber } from "../../viber-url-scheme";

export const SendConfirmationRequest = (props) => {
  const href = `${viberChatByNumber}${phoneNumber}`;
  const iconClass = "las la-check-circle";
  const buttonText = "Send Confirmation Request (Viber)";
  const message = `Дякуємо за ваше чудове замовлення! 
  ${orderId} 
  ${saleTotal} грн
  ${products}
  Уточнюємо наявність. *Скажіть будь ласка, замовлення актуальне?*`;

  return (
    <SimpleButton
      href={href}
      iconClass={iconClass}
      buttonText={buttonText}
      message={message}
    />
  );
};
