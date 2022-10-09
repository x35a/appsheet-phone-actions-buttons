import React from "react";
import { SimpleButton } from "./button-templates/Simple-Button";
import { phoneNumber } from "../../read-url-parameters";
import { getHref } from "../../get-href";

export const OpenWhatsappChat = (props) => {
  const href = getHref(phoneNumber).whatsapp;
  const iconClass = "lab la-whatsapp";
  const buttonText = "Open Whatsapp Chat";
  return (
    <SimpleButton href={href} iconClass={iconClass} buttonText={buttonText} />
  );
};
