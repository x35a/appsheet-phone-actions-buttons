import React from "react";
import { SimpleButton } from "./button-templates/Simple-Button";
import { phoneNumber } from "../../read-url-parameters";
import { getHref } from "../../get-href";

export const SendViberGroupInvite = (props) => {
  const href = getHref(phoneNumber).viber;
  const iconClass = "las la-user-friends";
  const buttonText = "Send Viber Group Invite";
  const message = `Запрошуємо до нашої групи де ми викладаємо новинки, акції та інші цікаві пропозиції, приєднуйтесь, будемо раді Вас бачити (smiley)
https://invite.viber.com/?g2=AQAoTmyfB4n%2Fo02vy0fg5T8hmZVnFIHxYWV%2Bf7bv93i2Kb%2FBUA1R9Oi8yTGToAyV`;

  return (
    <SimpleButton
      href={href}
      iconClass={iconClass}
      buttonText={buttonText}
      message={message}
    />
  );
};
