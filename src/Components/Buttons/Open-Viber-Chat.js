import React from "react";
import { SimpleButton } from "./button-templates/Simple-Button";
import { phoneNumber } from "../../read-url-parameters";
import { getHref } from "../../get-href";

export const OpenViberChat = (props) => {
  const href = getHref(phoneNumber).viber;
  const iconClass = "lab la-viber";
  const buttonText = "Open Viber Chat";
  return (
    <SimpleButton href={href} iconClass={iconClass} buttonText={buttonText} />
  );
};
