import React from "react";
import { phoneNumber, trackingNumber } from "../../read-url-parameters";
import { trackingLink } from "../../build-tracking-link";
import { ButtonWithOptions } from "./Button-with-options";

export const SendTrackingNumberViberButton = () => {
  const props = {
    phoneNumber: phoneNumber,
    trackingNumber: trackingNumber,
    trackingLink: trackingLink,
    href: `viber://chat?number=%2B38${phoneNumber}`,
    iconClass: "las la-shipping-fast",
    buttonText: "Send Tracking Number (Viber)",
    inputNameGroup: "SendTrackingNumberViberButton",
    options: [
      {
        checked: true,
        message: `Посилка: ${trackingNumber}\nПереглядайте детальну інформацію у додатку або за посиланням: ${trackingLink}`
      },
      {
        checked: false,
        message: `Дякуємо, ттн очікується: ${trackingNumber}\nПереглядайте детальну інформацію у додатку або за посиланням: ${trackingLink}`
      }
    ]
  };

  return <ButtonWithOptions {...props} />;
};
