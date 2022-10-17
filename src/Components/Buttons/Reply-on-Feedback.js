import React from "react";
import { SimpleButton } from "./button-templates/Simple-Button";
import { phoneNumber } from "../../read-url-parameters";
import { getHref } from "../../get-href";

export const ReplyOnFeedback = () => {
  const href = getHref(phoneNumber).viber;
  const iconClass = "las la-comment-dots";
  const buttonText = "Дякуємо за Ваш чудовий відгук!";
  const message = `Дякуємо за Ваш чудовий відгук! Приємних покупок! 😊`;

  return (
    <SimpleButton
      href={href}
      iconClass={iconClass}
      buttonText={buttonText}
      message={message}
    />
  );
};
