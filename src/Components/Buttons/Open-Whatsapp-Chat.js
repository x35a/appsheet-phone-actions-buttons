import React from "react";
import SimpleButton from "./Simple-Button";
import { phoneNumber } from "../../read-url-parameters";
import { whatsappChatByNumber } from "../../whatsapp-url-scheme";

export const OpenWhatsappChat = (props) => {
  const href = `${whatsappChatByNumber}${phoneNumber}`;
  const iconClass = "lab la-whatsapp";
  const message = "Open Whatsapp Chat";
  return <SimpleButton href={href} iconClass={iconClass} message={message} />;
};
