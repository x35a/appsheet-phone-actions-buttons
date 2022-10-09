import React from "react";
import { phoneNumber, trackingNumber } from "../../read-url-parameters";
import { trackingLink } from "../../build-tracking-link";
import { ButtonWithOptions } from "./Button-with-options";
import { viberChatByNumber } from "../../viber-url-scheme";

export const SendTrackingNumberViberButton = () => {
  const messageV1 = `Посилка: ${trackingNumber}\nПереглядайте детальну інформацію у додатку або за посиланням: ${trackingLink}`;
  const messageV2 = `Дякуємо, ттн очікується: ${trackingNumber}\nПереглядайте детальну інформацію у додатку або за посиланням: ${trackingLink}`;

  const props = {
    phoneNumber: phoneNumber,
    trackingNumber: trackingNumber,
    trackingLink: trackingLink,
    href: `${viberChatByNumber}${phoneNumber}`,
    iconClass: "las la-shipping-fast",
    buttonText: "Send Tracking Number",
    inputNameGroup: "SendTrackingNumberViberButton",
    options: [
      {
        checked: true,
        inputText: messageV1,
        message: messageV1
      },
      {
        checked: false,
        inputText: messageV2,
        message: messageV2
      }
    ]
  };

  return <ButtonWithOptions {...props} />;
};
