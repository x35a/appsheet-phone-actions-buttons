import React from "react";
import { ButtonWithOptions } from "./button-templates/Button-with-options";
import {
  phoneNumber,
  trackingNumber,
  orderId,
  saleTotal,
  products
} from "../../read-url-parameters";
import { trackingLink } from "../../build-tracking-link";
import { viberChatByNumber } from "../../viber-url-scheme";

export const SendConfirmationMessage = () => {
  const props = {
    phoneNumber: phoneNumber,
    href: `${viberChatByNumber}${phoneNumber}`,
    iconClass: "las la-check",
    buttonText: "Send Confirmation Message",
    inputNameGroup: "SendConfirmationMessage",
    options: [
      {
        checked: true,
        inputText: "WayForPay Confimation",
        message: `Дякуємо за ваше чудове замовлення!
${orderId} 
${saleTotal} грн
${products}
${
  trackingNumber
    ? "ттн очікується: " + trackingNumber
    : "Замовлення прийняте в роботу, очікуйте на подальшу інформацію, дякуємо."
}
${
  trackingLink
    ? "Переглядайте детальну інформацію у додатку або за посиланням: " +
      trackingLink
    : ""
}`
      },
      {
        checked: false,
        inputText: "Postpay Confirmation Request",
        message: `Дякуємо за ваше чудове замовлення!
${orderId}
${saleTotal} грн
${products}
Уточнюємо наявність. *Скажіть будь ласка, замовлення актуальне?*`
      },
      {
        checked: false,
        inputText: "Stock Check Promise",
        message: `Дякуємо за ваше чудове замовлення!
${orderId}
${saleTotal} грн
${products}
Склад перевірить наявність і кількість, і проінформує Вас, дякуємо.`
      }
    ]
  };

  return <ButtonWithOptions {...props} />;
};
