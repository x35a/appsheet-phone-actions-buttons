import React from "react";
import { ButtonWithOptions } from "./button-templates/Button-with-options";
import {
  phoneNumber,
  trackingNumber,
  orderId,
  saleTotal,
  products
} from "../../read-url-parameters";
import {
  trackingLink,
  isRozetkaTrackingNumber
} from "../../build-tracking-link";
import { getHref } from "../../get-href";

export const SendConfirmationMessage = () => {
  const trackingLinkMessage = isRozetkaTrackingNumber
    ? `Переглядайте детальну інформацію у особистому кабінеті Prom за посиланням ${trackingLink}`
    : `Переглядайте детальну інформацію у додатку або за посиланням ${trackingLink}`;

  const props = {
    iconClass: "las la-check",
    buttonText: "Send Confirmation Message",
    inputNameGroup: "SendConfirmationMessage",
    options: [
      {
        checked: true,
        href: getHref(phoneNumber).viber,
        inputText: "WayForPay Confimation",
        message: `Дякуємо за ваше чудове замовлення!
${orderId} 
${saleTotal} грн
${products}
${
  trackingNumber
    ? "ттн очікується: " + trackingNumber
    : "Замовлення прийняте в роботу, після відправки надішемо ТТН."
}
${trackingLink ? trackingLinkMessage : ""}`
      },
      {
        checked: false,
        href: getHref(phoneNumber).viber,
        inputText: "Stock Check Promise",
        message: `Дякуємо за ваше чудове замовлення!
${orderId}
${saleTotal} грн
${products}
Склад перевірить наявність і кількість, і проінформує Вас, дякуємо.`
      },
      {
        checked: false,
        href: getHref(phoneNumber).viber,
        inputText: "Postpay Confirmation Request",
        message: `Дякуємо за ваше чудове замовлення!
${orderId}
${saleTotal} грн
${products}
Уточнюємо наявність. *Скажіть будь ласка, замовлення актуальне?*`
      }
    ]
  };

  return <ButtonWithOptions {...props} />;
};
