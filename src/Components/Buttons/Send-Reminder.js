import React from "react";
import { SimpleButton } from "./Simple-Button";
import { phoneNumber, trackingNumber } from "../../read-url-parameters";
import { trackingLink } from "../../build-tracking-link";
import { viberChatByNumber } from "../../viber-url-scheme";

export const SendReminder = (props) => {
  const href = `${viberChatByNumber}${phoneNumber}`;
  const iconClass = "las la-bell";
  const buttonText = "Send Tracking Number Reminder (Viber)";
  const message = `Доброго дня, Ваше замовлення знаходиться у відділенні пошти, ттн ${trackingNumber}
Незабаром почнеться платне зберігання, будь ласка отримайте посилку.
Переглядайте детальну інформацію у додатку або за посиланням: ${trackingLink}`;

  return (
    <SimpleButton
      href={href}
      iconClass={iconClass}
      buttonText={buttonText}
      message={message}
    />
  );
};
