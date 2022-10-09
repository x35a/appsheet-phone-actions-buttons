import React from "react";
import { phoneNumber, trackingNumber } from "../../read-url-parameters";
import { trackingLink } from "../../build-tracking-link";
import { ButtonWithOptions } from "./button-templates/Button-with-options";
import { viberChatByNumber } from "../../viber-url-scheme";

export const SendTrackingNumber = () => {
  const message1 = `Посилка: ${trackingNumber}\nПереглядайте детальну інформацію у додатку або за посиланням: ${trackingLink}`;
  const message2 = `Дякуємо, ттн очікується: ${trackingNumber}\nПереглядайте детальну інформацію у додатку або за посиланням: ${trackingLink}`;
  const message3 = `Доброго дня, Ваше замовлення знаходиться у відділенні пошти, ттн ${trackingNumber}
Незабаром почнеться платне зберігання, будь ласка отримайте посилку.
Переглядайте детальну інформацію у додатку або за посиланням: ${trackingLink}`;

  const props = {
    phoneNumber: phoneNumber,
    trackingNumber: trackingNumber,
    trackingLink: trackingLink,
    href: `${viberChatByNumber}${phoneNumber}`,
    iconClass: "las la-shipping-fast",
    buttonText: "Send Tracking Number",
    inputNameGroup: "SendTrackingNumber",
    options: [
      {
        checked: true,
        inputText: message1,
        message: message1
      },
      {
        checked: false,
        inputText: message2,
        message: message2
      },
      {
        checked: false,
        inputText: message3,
        message: message3
      }
    ]
  };

  return <ButtonWithOptions {...props} />;
};
