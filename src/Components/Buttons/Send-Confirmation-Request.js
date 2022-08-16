import React from "react";
import SimpleButton from "./Simple-Button";
import {
  phoneNumber,
  orderId,
  saleTotal,
  products
} from "../../read-url-parameters";
import { viberChatByNumber } from "../../viber-url-scheme";

export const SendConfirmationRequest = (props) => {
  const href = `${viberChatByNumber}${phoneNumber}`;
  const iconClass = "lab la-whatsapp";
  const message = `Дякуємо за ваше чудове замовлення! 
  ${orderId} 
  ${saleTotal} грн
  ${products}
  Уточнюємо наявність. *Скажіть будь ласка, замовлення актуальне?*`;

  return <SimpleButton href={href} iconClass={iconClass} message={message} />;
};
