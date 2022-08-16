import React from "react";
import { SimpleButton } from "./Simple-Button";
import {
  phoneNumber,
  trackingNumber,
  orderId,
  saleTotal,
  products
} from "../../read-url-parameters";
import { trackingLink } from "../../build-tracking-link";
import { viberChatByNumber } from "../../viber-url-scheme";

export const SendConfirmationMessage = (props) => {
  const href = `${viberChatByNumber}${phoneNumber}`;
  const iconClass = "las la-check-double";
  const buttonText = "Send Confirmation Message (Viber)";
  const message = `Дякуємо за ваше чудове замовлення!
${orderId} 
${saleTotal} грн
${products}
ттн очікується: ${trackingNumber}
${trackingLink}`;

  return (
    <SimpleButton
      href={href}
      iconClass={iconClass}
      buttonText={buttonText}
      message={message}
    />
  );
};
