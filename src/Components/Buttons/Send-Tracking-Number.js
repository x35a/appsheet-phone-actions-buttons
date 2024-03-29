import React from "react";
import { phoneNumber, trackingNumber } from "../../read-url-parameters";
import {
  trackingLink,
  isRozetkaTrackingNumber
} from "../../build-tracking-link";
import { ButtonWithOptions } from "./button-templates/Button-with-options";
import { getHref } from "../../get-href";

export const SendTrackingNumber = () => {
  const trackingLinkMessage = isRozetkaTrackingNumber
    ? `Переглядайте детальну інформацію у особистому кабінеті Prom за посиланням ${trackingLink}`
    : `Переглядайте детальну інформацію у додатку або за посиланням ${trackingLink}`;
  const message1 = `Посилка: ${trackingNumber}\n${trackingLinkMessage}`;
  const message2 = `Дякуємо, ттн очікується: ${trackingNumber}\n${trackingLinkMessage}`;
  const message3 = `Доброго дня, Ваше замовлення знаходиться у відділенні пошти, ттн ${trackingNumber}
Незабаром почнеться платне зберігання, будь ласка отримайте посилку.
${trackingLinkMessage}`;

  const props = {
    trackingNumber: trackingNumber,
    trackingLink: trackingLink,
    iconClass: "las la-shipping-fast",
    buttonText: "Send Tracking Number",
    inputNameGroup: "SendTrackingNumber",
    options: [
      {
        checked: true,
        href: getHref(phoneNumber).viber,
        inputText: message1,
        message: message1
      },
      {
        checked: false,
        href: getHref(phoneNumber).viber,
        inputText: message2,
        message: message2
      },
      {
        checked: false,
        href: getHref(phoneNumber).viber,
        inputText: message3,
        message: message3
      }
    ]
  };

  return <ButtonWithOptions {...props} />;
};
